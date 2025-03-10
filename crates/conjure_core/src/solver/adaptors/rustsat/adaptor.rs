use std::any::type_name;
use std::fmt::format;
use std::hash::Hash;
use std::iter::Inspect;
use std::ptr::null;
use std::vec;

// use super::conversions::{self, conv_to_clause, conv_to_formula, instantiate_model_from_conjure};
use clap::error;
use minion_rs::ast::{Model, Tuple};
use rustsat::encodings::am1::Def;
use rustsat::solvers::{Solve, SolverResult};
use rustsat::types::{Assignment, Lit, TernaryVal, Var as satVar};
use std::collections::{BTreeMap, HashMap};
use std::result::Result::Ok;
use tracing_subscriber::filter::DynFilterFn;

use crate::ast::Domain::BoolDomain;

use rustsat_minisat::core::Minisat;

use crate::ast::{Atom, Expression, Literal, Name};
use crate::metadata::Metadata;
use crate::solver::adaptors::rustsat::convs::handle_cnf;
use crate::solver::SearchComplete::NoSolutions;
use crate::solver::{
    self, private, SearchStatus, SolveSuccess, SolverAdaptor, SolverCallback, SolverError,
    SolverFamily, SolverMutCallback,
};
use crate::stats::SolverStats;
use crate::{ast as conjure_ast, model, Model as ConjureModel};

use rustsat::instances::{BasicVarManager, Cnf, SatInstance};

use thiserror::Error;

/// A [SolverAdaptor] for interacting with the SatSolver generic and the types thereof.

pub struct SAT {
    __non_constructable: private::Internal,
    model_inst: Option<SatInstance>,
    var_map: Option<HashMap<String, Lit>>,
    solver_inst: Minisat,
    decision_refs: Option<Vec<String>>,
}

impl private::Sealed for SAT {}

impl Default for SAT {
    fn default() -> Self {
        SAT {
            __non_constructable: private::Internal,
            solver_inst: Minisat::default(),
            var_map: None,
            model_inst: None,
            decision_refs: None,
        }
    }
}

// maybe use for callback?
fn get_ref_sols(
    find_refs: Vec<String>,
    sol: Assignment,
    var_map: HashMap<String, Lit>,
) -> HashMap<Name, Literal> {
    let mut solution: HashMap<Name, Literal> = HashMap::new();

    for reference in find_refs {
        // print!("{} is ", reference);
        let lit: Lit = *var_map.get(&reference).unwrap();
        // println!("{}", sol[lit.var()].to_bool_with_def(false));
        solution.insert(
            Name::UserName((reference)),
            // Literal::Bool((sol[lit.var()].to_bool_with_def(false))),
            match sol[lit.var()] {
                TernaryVal::True => Literal::Int(1),
                TernaryVal::False => Literal::Int(0),
                TernaryVal::DontCare => Literal::Int(2),
            }, // Literal::Int((sol[lit.var()])),
        );
    }

    solution
}

impl SAT {
    // TODO: maybe move this to utils?
    pub fn get_sat_solution(&mut self, model: ConjureModel) -> HashMap<Name, Literal> {
        self.load_model(model, private::Internal);

        let mut solver = Minisat::default();
        // self.solver_inst = Some(solver);

        let cnf: (Cnf, BasicVarManager) = self.model_inst.clone().unwrap().into_cnf();
        // println!("CNF: {:?}", cnf.0);

        solver.add_cnf(cnf.0);
        let res = solver.solve().unwrap();

        tracing::info!(
            "Result: {}",
            match res {
                SolverResult::Sat => ("Satisfiable"),
                SolverResult::Unsat => ("Unsatisfiable"), // TODO: Maybe Err here
                SolverResult::Interrupted => ("!!Interrupted!!"), // TODO: Absolutely Err here
            }
        );

        let sol = solver.full_solution().unwrap();

        get_ref_sols(
            self.decision_refs.clone().unwrap(),
            sol,
            self.var_map.clone().unwrap(),
        )
    }
}

impl SolverAdaptor for SAT {
    fn solve(
        &mut self,
        callback: SolverCallback,
        _: private::Internal,
    ) -> Result<SolveSuccess, SolverError> {
        let mut solver = &mut self.solver_inst;

        let cnf: (Cnf, BasicVarManager) = self.model_inst.clone().unwrap().into_cnf();

        (*(solver)).add_cnf(cnf.0);

        let mut has_sol = false;
        loop {
            let res = solver.solve().unwrap();

            match res {
                SolverResult::Sat => {
                    println!("REMOVE: new sols");
                }
                SolverResult::Unsat => {
                    return Ok(SolveSuccess {
                        // TODO: This SHOULD NOT be magic constants, excpet wall time
                        stats: SolverStats {
                            conjure_solver_wall_time_s: -1.0,
                            solver_family: Some(self.get_family()),
                            solver_adaptor: Some("SAT".to_string()),
                            nodes: None,
                            satisfiable: None,
                            sat_vars: None,
                            sat_clauses: None,
                        },
                        status: if has_sol {
                            SearchStatus::Complete(solver::SearchComplete::HasSolutions)
                        } else {
                            SearchStatus::Complete(NoSolutions)
                        },
                    });
                }
                SolverResult::Interrupted => {
                    return Err(SolverError::Runtime("!!Interrupted Solution!!".to_string()))
                }
            };

            let sol = solver.full_solution().unwrap();
            has_sol = true;
            let solution = get_ref_sols(
                self.decision_refs.clone().unwrap(),
                sol,
                self.var_map.clone().unwrap(),
            );

            if !callback(solution) {
                println!("callback false");
                return Ok(SolveSuccess {
                    // TODO: This SHOULD NOT be magic constants, excpet wall time
                    stats: SolverStats {
                        conjure_solver_wall_time_s: -1.0,
                        solver_family: Some(self.get_family()),
                        solver_adaptor: Some("SAT".to_string()),
                        nodes: None,
                        satisfiable: None,
                        sat_vars: None,
                        sat_clauses: None,
                    },
                    status: SearchStatus::Incomplete(solver::SearchIncomplete::UserTerminated),
                });
            }

            // TODO: prepare to get next solution
            println!("..More Solutions..");
            panic!("Not Supported");
        }
    }

    fn solve_mut(
        &mut self,
        callback: SolverMutCallback,
        _: private::Internal,
    ) -> Result<SolveSuccess, SolverError> {
        Err(SolverError::OpNotSupported("solve_mut".to_owned()))
    }

    fn load_model(&mut self, model: ConjureModel, _: private::Internal) -> Result<(), SolverError> {
        let decisions = model.symbols().iter_var();

        let mut finds: Vec<String> = Vec::new();

        for find_ref in decisions {
            if (find_ref.1.domain != BoolDomain) {
                panic!("Expected decision variable of domain Boolean");
            }

            let name = find_ref.0;
            finds.push(name.to_string());
        }

        self.decision_refs = Some(finds);

        let vec_constr = model.clone().get_constraints_vec();
        let constr = &vec_constr[0];
        let vec_cnf = match constr {
            Expression::And(_, vec) => vec,
            _ => panic!("Bad Constraint type, only accepting And constraint"),
        };

        let mut var_map: HashMap<String, Lit> = HashMap::new();

        let inst: SatInstance = handle_cnf(vec_cnf, &mut var_map);

        self.var_map = Some(var_map);
        // TODO: temp clone for debug
        let cnf: (Cnf, BasicVarManager) = inst.clone().into_cnf();
        tracing::info!("CNF: {:?}", cnf.0);
        self.model_inst = Some(inst);

        Ok(())
    }

    fn get_family(&self) -> SolverFamily {
        SolverFamily::SAT
    }

    fn init_solver(&mut self, _: private::Internal) {}

    fn get_name(&self) -> Option<String> {
        Some("SAT".to_string())
    }

    fn add_adaptor_info_to_stats(&self, stats: SolverStats) -> SolverStats {
        SolverStats {
            solver_adaptor: self.get_name(),
            solver_family: Some(self.get_family()),
            ..stats
        }
    }
}

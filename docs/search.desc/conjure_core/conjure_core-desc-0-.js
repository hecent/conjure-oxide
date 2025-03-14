searchState.loadedDescShard("conjure_core", 0, "Triggers a panic with a detailed bug report message, while …\nTop-level error types for Conjure-Oxide.\nCreates a new matrix <code>AbstractLiteral</code> from some <code>Vec</code>, …\nCreates a new matrix as an <code>Expression</code> from a (Rust) …\nCreates a new matrix <code>AbstractLiteral</code> optionally with some …\nCreates a new matrix as an <code>Expression</code>, optionally with …\nThis module contains the rewrite rules for Conjure Oxides …\nA high-level API for interacting with constraints solvers.\n<code>|x|</code> - absolute value of <code>x</code> <strong>Supported by:</strong> JsonInput.\n<code>allDiff(&lt;vec_expr&gt;)</code> <strong>Supported by:</strong> JsonInput.\n<code>and(&lt;vec_expr&gt;)</code> <strong>Supported by:</strong> JsonInput, SAT.\nAn <code>Atom</code> is an indivisible expression, such as a literal or …\nDeclaration of an auxiliary variable.\nAn expression representing “A is valid as long as B is …\nRepresents a decision variable within a computational …\nA specific kind of declaration.\nA n-dimensional matrix with a value domain and n-index …\nDefines dominance (“Solution A is preferred over …\n<strong>Supported by:</strong> JsonInput.\nRepresents different types of expressions used to define …\nEnsures that x=|y| i.e. x is the absolute value of y.\nEnsures that <code>alldiff([a,b,...])</code>.\n<code>ineq(x,y,k)</code> ensures that x &lt;= y + k.\nEnsures that x =-y, where x and y are atoms.\nEnsures that x*y=z.\nEnsures that sum(vec) &gt;= x.\nEnsures that sum(vec) &lt;= x.\n<code>w-literal(x,k)</code> ensures that x == k, where x is a variable …\n<code>weightedsumgeq(cs,xs,total)</code> ensures that cs.xs &gt;= total, …\n<code>weightedsumleq(cs,xs,total)</code> ensures that cs.xs &lt;= total, …\n<code>fromSolution(name)</code> - Used in dominance relation definitions\n<strong>Supported by:</strong> JsonInput.\n<strong>Supported by:</strong> JsonInput.\nEnsures that <code>a-&gt;b</code> (material implication). <strong>Supported by:</strong> …\n<code>inDomain(x,domain)</code> iff <code>x</code> is in the domain <code>domain</code>.\nAn integer domain.\n<strong>Supported by:</strong> JsonInput.\nA literal value, equivalent to constants in Conjure.\n<strong>Supported by:</strong> JsonInput.\nA name generated by Conjure-Oxide.\nA 1 dimensional matrix slice with an index domain.\n<code>max(&lt;vec_expr&gt;)</code> <strong>Supported by:</strong> JsonInput.\n<code>min(&lt;vec_expr&gt;)</code> <strong>Supported by:</strong> JsonInput.\nEnsures that floor(x/y)=z. Always true when y=0.\nEnsures that x%y=z. Always true when y=0.\nEnsures that <code>x**y = z</code>.\n<code>reify(constraint,r)</code> ensures that r=1 iff <code>constraint</code> is …\n<code>reifyimply(constraint,r)</code> ensures that <code>r-&gt;constraint</code>, where …\nBinary subtraction operator\nAn Essence model.\nA reference to an object stored in the [<code>SymbolTable</code>].\nNegation: <code>-x</code> <strong>Supported by:</strong> JsonInput.\n<strong>Supported by:</strong> JsonInput.\n<code>not(a)</code> <strong>Supported by:</strong> JsonInput, SAT.\n<code>or(&lt;vec_expr&gt;)</code> <strong>Supported by:</strong> JsonInput, SAT.\n<code>a * b * c * ...</code> <strong>Supported by:</strong> JsonInput.\nThe top of the model\nDivision after preventing division by zero, usually with a …\nA safe matrix index.\nModulo after preventing mod 0, usually with a bubble\n<code>UnsafePow</code> after preventing undefinedness\nA safe matrix slice: <code>a[indices]</code>.\nA model that is de/serializable using <code>serde</code>.\nA sub-model, representing a lexical scope in the model.\n<code>a + b + c + ...</code> <strong>Supported by:</strong> JsonInput.\nThe global symbol table, mapping names to their …\nSomething with a return type\nint(..i)\nint(i..)\nDivision with a possibly undefined value (division by 0) …\nA matrix index.\nModulo with a possibly undefined value (mod 0) <strong>Supported </strong>…\nUnsafe power<code>x**y</code> (possibly undefined)\nA matrix slice: <code>a[indices]</code>.\nA name given in the input model.\nAdds a top-level constraint.\nAdds top-level constraints.\nAdds a new symbol to the symbol table (Wrapper over …\nReturn an unoptimised domain that is the result of …\nThis declaration as a domain letting, if it is one.\nThis declaration as a mutable domain letting, if it is one.\nReturns this model as a [<code>Submodel</code>].\nReturns this model as a mutable [<code>Submodel</code>].\nThis declaration as a value letting, if it is one.\nThis declaration as a mutable value letting, if it is one.\nThis declaration as a decision variable, if it is one.\nThis declaration as a mutable decision variable, if it is …\nThe top-level constraints in this sub-model.\nThe top-level constraints in this sub-model as a mutable …\nThe domain of this declaration, if it is known.\nLooks up the domain of name if it has one and is in scope.\nReturns the possible values of the expression, recursing …\nExtends the symbol table with the given symbol table, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns an arbitrary variable name that is not in the …\nTrue iff self and other are both atomic and identical.\nInitialises the model for rewriting.\nInserts a declaration into the symbol table.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIterates over symbol table entries in scope.\nIterates over entries in the local symbol table only.\nTrue if the expression is an associative and commutative …\nChecks whether this expression is safe.\nThe kind of this declaration.\nLooks up the declaration with the given name, checking all …\nLooks up the declaration with the given name in the …\nCreates a matrix with elements <code>elems</code>, with domain <code>int(1..)</code>.\nThe name of this declaration.\nCreates a new declaration.\nCreates a new model.\nCreates a new [<code>Submodel</code>] as a child scope of <code>parent</code>.\nCreates an empty symbol table.\nCreates a new domain letting declaration.\nShorthand to create a reference by user name.\nCreates a new value letting declaration.\nCreates a new decision variable declaration.\nGets the parent of this symbol table as a mutable …\nFunctions for pretty printing Conjure models.\nReplaces the top-level constraints with <code>new_constraints</code>, …\nReplaces the root node with <code>new_root</code>, returning the old …\nReplaces the model contents with <code>new_submodel</code>, returning …\nLooks up the domain of name, resolving domain references …\nLooks up the return type for name if it has one and is in …\nLooks up the return type for name if has one and is in the …\nThe root node of this sub-model.\nSerde serialization/ deserialization helpers.\nThe symbol table for this sub-model as a reference.\nThe symbol table for this sub-model as a mutable reference.\nThe symbol table for this sub-model as a pointer.\nIf the expression is a list, returns the inner expressions.\nIf the AbstractLiteral is a list, returns its elements.\nIf the expression is a matrix, gets it elements and index …\nUpdates or adds a declaration in the immediate local scope.\nReturn a list of all possible i32 values in the domain if …\nCreates an empty symbol table with the given parent.\nPretty prints, in essence syntax, the declaration for the …\nPretty prints a <code>Vec&lt;Expression&gt;</code> as if it were a …\nPretty prints a <code>Vec&lt;Expression&gt;</code> as if it were a top level …\nPretty prints, in essence syntax, the declaration for the …\nPretty prints, in essence syntax, the variable declaration …\nPretty prints a <code>Vec&lt;T&gt;</code> in a vector like syntax.\nA type that can be created with default values and an id.\nA type with an [<code>ObjectId</code>].\nA unique id, used to distinguish between objects of the …\nDe/Serialize an <code>Rc&lt;RefCell&lt;T&gt;&gt;</code> as the id of the inner …\nDe/Serialize an <code>Rc&lt;RefCell&lt;T&gt;&gt;</code> as its inner value <code>T</code>.\nCreates a new default value of type <code>T</code>, but with the given …\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe id of this object.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nContains the error value\nContains the success value\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSearches recursively in <code>../tests/integration</code> folder for an …\nSearches for an <code>.essence</code> file at the given filepath, then …\nThe result of applying a rule to an expression. Contains …\nContains the error value\nContains the success value\nRepresents the result of applying a rule to an expression …\nRepresents errors that can occur during the model …\nA rule with a name, application function, and rule sets.\nHolds a rule and its priority, along with the rule set it …\nA structure representing a set of rules with a name, …\nGets symbols added by this reduction\nApplies side-effects (e.g. symbol table updates)\nGets symbols changed by this reduction\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet all rule sets Returns a <code>Vec</code> of static references to …\nReturns a copied <code>Vec</code> of all rules registered with the …\nGet the dependencies of this rule set, evaluating them …\nGet a rule by name. Returns the rule with the given name …\nGet a rule set by name. Returns the rule set with the …\nGet all rule sets for a given solver family. Returns a <code>Vec</code> …\nBuild a list of rules to apply (sorted by priority) from a …\nGet the rules of this rule set, evaluating them lazily if …\nGet rules grouped by priority from a list of rule sets.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe name of the rule set.\nRepresents a reduction with no side effects on the model.\nThis procedural macro registers a decorated function with …\nThis procedural macro registers a rule set with the global …\nResolves the final set of rule sets to apply based on …\nRewrites the given model by applying a set of rules to all …\nA naive, exhaustive rewriter for development purposes. …\nThe solver families that this rule set applies to.\nGet the dependencies of this rule set, including itself\nRepresents a reduction that also modifies the symbol table.\nRepresents a reduction that also adds a top-level …\nSimplify an expression to a constant if possible Returns: …\nThe search was complete (i.e. the solver found all …\nThe search was incomplete (i.e. it was terminated before …\nReturned from SolverAdaptor when solving is successful.\nAn abstract representation of a constraints solver.\nA common interface for calling underlying solver APIs …\nThe type for user-defined callbacks for use with Solver.\nErrors returned by Solver on failure.\nAn iterator over the variants of SolverFamily\nSolver adaptors.\nAdds the solver adaptor name and family (if they exist) to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the solver family that this solver adaptor belongs to\nGets the name of the solver adaptor for pretty printing.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nModifying a model during search.\nRuns the solver on the given model.\nRuns the solver on the given model, allowing modification …\nStates of a <code>Solver</code>.\nA SolverAdaptor for interacting with Minion.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA SolverAdaptor for interacting with Minion.\nAn unspecified error has occurred.\nA ModelModifier provides an interface to modify a model …\nThe requested modification to the model has failed.\nA <code>ModelModifier</code> for a solver that does not support …\nThe desired operation is supported by this solver adaptor, …\nThe desired operation is not supported for this solver …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe state returned by <code>Solver</code> if solving has not been …\nThe state returned by <code>Solver</code> if solving has been …\nCannot construct this from outside this module.\nCannot construct this from outside this module.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExecution statistics.\nThe status of the search\nRepresents the statistical data collected during the model …\nWall time as measured by Conjure-Oxide (not the solver).\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe solver adaptor used for this run.\nThe solver family used for this run.")
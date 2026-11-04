// Transcript data for Custom.mp3. Edit timings here only.
// start: segment start in milliseconds within Custom.mp3.
// Paragraphs starting with "# " render as section headings.
window.SEGMENTS = [
{ who: "Cruz", start: 0, paras: [
"# The Collatz Conjecture. What Remains.",
"Four lines of work define the current state of the 3x + 1 problem: constraints on periodic orbits, lower bounds on the set of integers known to reach 1, almost-sure descent, and a cluster of 2026 results on modular reachability and positive density. Some of these are refereed theorems, some are Lean formalizations, and some are preprints still under examination. What follows sets out what each actually proves and where each one stops.",
"# Periodic orbits and cycle constraints",
"Any non-trivial cycle satisfies an exact integer identity between powers of 2 and powers of 3, and the identity forces the ratio of halvings to odd steps above log₂ 3 ≈ 1.585. Three methods extract constraints from it. Diophantine analysis treats it as an exact equation in integers. Archimedean analysis takes logarithms and measures how close the number of halvings times log 2 comes to the number of odd steps times log 3; call that small positive gap Λ. If Λ is not extremely small, the smallest element of the cycle is forced to be small, and computation has already ruled out cycles among small numbers. Baker-type estimates on linear forms in logarithms supply the missing piece: they prove that Λ cannot be too small."
]},
{ who: "Koda", start: 92000, paras: [
"For a cycle of $k$ odd elements under the accelerated Syracuse map, let $a_i$ be the number of factors of 2 removed at step $i$, let $K = \\sum a_i$, and let $A_j = \\sum_{i<j} a_i$. Then $$n_0\\,(2^K - 3^k) = \\sum_{j=0}^{k-1} 3^{\\,k-1-j}\\, 2^{A_j}.$$ Positivity of $n_0$ forces $K/k > \\log_2 3$. With $\\Lambda = K\\log 2 - k\\log 3$, the elementary Archimedean inequality gives $n_{\\min} < k/(3\\Lambda)$.",
"The two-logarithm estimates of Laurent, Mignotte and Nesterenko (1995) give roughly $\\log\\Lambda \\ge -C(\\log K)^2$ for an explicit constant $C$. Substituting this into the Archimedean inequality yields an explicit ceiling on the smallest element of any cycle of given length."
]},
{ who: "Cruz", start: 177000, paras: [
"Combining these methods has excluded large classes of cycles. Ray Steiner proved in 1977 that the only cycle with a single local minimum is the trivial one. John Simons and Benne de Weger introduced m-cycles, meaning cycles with exactly m local minima, and in 2005, using Baker-type estimates with lattice-basis reduction, excluded all non-trivial m-cycles with m up to 68. Christian Hercher extended this to m up to 91 in 2023, with a published corrigendum. These exclusions lean on the computer-verified range of the conjecture, and the excluded m grows as that range grows. Cycles of arbitrary complexity are out of reach. When the number of local minima grows with the cycle length, the argument needs lower bounds for linear forms in many logarithms, and the constants in those bounds grow rapidly with the number of logarithms. The resulting ceiling on the smallest element then lies above the verified range, and no contradiction follows.",
"# Predecessor counting and the density gap",
"A separate line of work bounds from below the number of integers up to x known to reach 1, written π(x). Richard Crandall gave the first bound of the form x to a positive power in 1978. Ilia Krasikov introduced systems of difference inequalities in 1989 and obtained the exponent 0.43, and Günther Wirsching reached 0.48 with a larger system. David Applegate and Jeffrey Lagarias obtained 0.65 by computer-assisted tree search, then 0.81 by applying nonlinear programming to Krasikov’s inequalities. Lagarias then joined Krasikov to produce the current peer-reviewed benchmark, published in 2003: π(x) ≥ x^0.84 for all sufficiently large x. This bounds the size of the basin, not its proportion. Any exponent below 1, however close, is compatible with the basin occupying a vanishing share of the integers."
]},
{ who: "Koda", start: 302000, paras: [
"The target quantity is the lower natural density $\\liminf_{x\\to\\infty} \\pi(x)/x$. The limit inferior is used because the ordinary limit may not exist; the ratio could oscillate forever. A positive lower density means the basin holds at least a fixed fraction of the integers at every scale, not merely along some favourable sequence of scales. That is strictly more than a positive upper density would give."
]},
{ who: "Cruz", start: 333000, paras: [
"Recent preprints have not moved this boundary. Chao Liu’s preprint of December 2025 reportedly announced 0.946 in its first version; the current second version proves only 0.3227, below even Krasikov’s 1989 exponent. L. Mazur announced in July 2026 a Lean-formalized bound of x^0.90 for predecessor sets of targets not divisible by 3, which remains unrefereed."
]},
{ who: "Koda", start: 361000, paras: [
"The restriction to targets not divisible by 3 comes from the forward map. The value $3m+1$ is always $\\equiv 1 \\pmod 3$, so no odd step lands on a multiple of 3. A multiple of 3 has no odd predecessors, and its backward tree is a single chain of doublings. The restriction falls on the root of the tree; predecessors of an admissible root can themselves be multiples of 3."
]},
{ who: "Cruz", start: 400000, paras: [
"# Stopping times and almost-sure descent",
"Forward results concern descent, which is weaker than convergence. Riho Terras proved in 1976 that the integers with a finite stopping time, meaning some iterate falls below the starting value, have natural density 1. A single descent does not rule out later growth or entry into a non-trivial cycle. Ivan Korec proved in 1994, also in natural density, that for every exponent above log 3 / log 4 ≈ 0.7925, almost every n has an iterate below n to that power. Terence Tao proved in 2022 a much stronger statement: for any function tending to infinity, however slowly, almost every orbit eventually falls below that function of its starting value. Tao’s theorem holds in logarithmic density, not natural density. It does not assert that orbits reach 1, and Tao notes that upgrading to natural density is plausible but is not obtained."
]},
{ who: "Koda", start: 467000, paras: [
"Logarithmic density weights each integer $n$ by $1/n$ and normalizes by $\\sum_{n\\le x} 1/n \\approx \\log x$. The weighting suppresses the contribution of large integers, which is what lets Tao’s first-passage random variable stabilise. Natural density 1 implies logarithmic density 1, but not conversely: a set can have logarithmic density 1 while its natural density fails to exist."
]},
{ who: "Cruz", start: 494000, paras: [
"Two 2026 preprint lines claim the natural-density version. L. Mazur, in July 2026, claims descent below every diverging threshold for almost all integers in natural density, within a logarithmic number of steps, accompanied by a Lean formalization. I. A. Shaik, in a preprint revised in October 2026, claims polylogarithmic descent in natural density with a logarithmic leading time. Both are unrefereed, and both are descent claims rather than claims of convergence to 1.",
"# Modular reachability",
"In November 2026, André Hallqvist released a Lean 4 formalization titled Effective Remainder Everywhere. It proves that for every modulus N, every target w not divisible by 3, and every residue class modulo N, some member of that class reaches w, with an explicit bound on how large that member needs to be. Every residue class therefore contains infinitely many predecessors of w, including the classes divisible by 3, and the backward tree has no local congruence obstruction. The formalization uses only the Lean core library and is repository-hosted, not peer reviewed."
]},
{ who: "Koda", start: 575000, paras: [
"The precise statement: for every $N \\ge 1$, every $w$ with $3 \\nmid w$, and every residue $r$, there exists $n \\equiv r \\pmod N$ such that $n$ reaches $w$, and $$n \\le w \\cdot 2^{2^{48N^4}}.$$ That is a double exponential: the top exponent is $48N^4$, and 2 raised to it is itself the exponent of 2.",
"The argument separates the modulus into its 2-adic and 3-adic part, handled through parity words of the shortcut map, and the part coprime to 6, handled through the fibres of the backward closure, together with a minimal-period argument showing that translation by 1 acts as a stabilizer."
]},
{ who: "Cruz", start: 649000, paras: [
"A small case shows what the theorem guarantees. Take target 11, modulus 7, and ask for a predecessor divisible by 7. The answer is 7 itself, which reaches 11 in two steps. The theorem’s double-exponential bound, applied to the same question, promises a predecessor below roughly 10^(10^34692). The gap measures the slack in the construction, and the bound is not a search range. But a finite, explicit bound for every modulus and every residue is a guarantee that did not exist before, and that guarantee is the content of the result.",
"What it governs is the backward tree, not the fate of forward trajectories. Hallqvist has shown that the same construction carries over to the 5x + 1 map, and that is clarifying. In 5x + 1 the backward tree is equally pervasive, yet the forward dynamics have several distinct cycles. Modular reachability is a property of the backward tree, and it holds independently of where forward orbits end up."
]},
{ who: "Koda", start: 713000, paras: [
"For $5x+1$, the bound is $w \\cdot 2^{2^{105N^5}}$, again a double exponential, now with top exponent $105N^5$. The map has at least three known cycles, with smallest odd elements 1, 13, and 17, and some orbits appear to diverge."
]},
{ who: "Cruz", start: 743000, paras: [
"# Positive-density claims of 2026",
"Several 2026 preprints claim that a positive proportion of integers reach 1, which is exactly what every counting bound leaves open. L. Mazur, in a September 2026 manuscript with a Lean formalization, claims an explicit positive constant c such that, for every sufficiently large X, at least cX integers below X reach 1 within 10.46 log n steps of the ordinary map. A companion preprint extends this to predecessors: for every fixed a not divisible by 3, the integers reaching a have positive lower natural density, without assuming that a itself reaches 1. I. A. Shaik claims positive lower density of convergence at every rate above 3 / log(4/3), about 10.43 ordinary steps per log of the starting value. Kelvin Lau, in an October 2026 preprint, refines Mazur’s construction explicitly: for every N, the number of odd integers below N that reach 1 within the same step count is at least N divided by a tower, rounded down.",
"The tower is 2^2^2^163. That denominator is a triply iterated power of 2, so the bound is zero for every N below it, and the claim is purely asymptotic. None of these preprints has been refereed.",
"Mazur’s work was developed with AI agents, and Lau’s was obtained and formalized with an AI prover. Such systems can generate code, explore proof strategies, and explain what a Lean statement says, but one automated system checking another’s output is not peer review. A compiled Lean proof establishes that a formal statement follows from its encoded definitions. Whether that statement is the theorem the paper claims is a question for human mathematicians, and only their review can settle it."
]},
{ who: "Koda", start: 864000, paras: [
"Lean checks each deduction against the encoded definitions and the axioms in use, typically propositional extensionality, classical choice, and quotient soundness. If a formalization encodes a definition of density, reachability, or step count that departs subtly from the standard one, the proof compiles without error and certifies a different theorem. Machine checking, human auditing of the specification, and archival peer review are three separate steps. For these preprints, only the first is complete."
]},
{ who: "Cruz", start: 900000, paras: [
"# What remains",
"Cycles are excluded up to 91 local minima, not beyond. The refereed bound on the basin stands at x^0.84. Descent below any diverging threshold is proved in logarithmic density, and the natural-density versions, together with positive-density convergence to 1, rest on preprints. Hallqvist’s formalization, if it holds up under review, removes every local modular obstruction in the backward tree.",
"The backward structure of the problem is increasingly well understood. Forward convergence is not. Whether the set of integers reaching 1 has positive lower natural density is not settled by any peer-reviewed theorem, and whether it contains every positive integer is the Collatz conjecture itself."
]}
];

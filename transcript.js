window.SEGMENTS = [
 {
  "who": "Cruz",
  "start": 0,
  "paras": [
   {
    "t": 0,
    "x": "Imagine a tree that grows backward. You start with one number, called the target. Then you ask, which numbers lead to this target? Each answer is a branch. Then you ask which numbers lead to those numbers, and so on, forever. The result is a huge, endlessly branching tree of numbers, all of which eventually fall forward onto the target."
   },
   {
    "t": 23,
    "x": "A recent paper called <em>Reaching Every Residue</em> proves something surprising about these trees. Here is what it says, why it matters, and what it does not say."
   },
   {
    "t": 35,
    "x": "# First, the rules"
   },
   {
    "t": 37,
    "x": "The famous Collatz problem uses this rule: if a number is even, cut it in half. If it is odd, multiply it by 3 and add 1. The Collatz conjecture says that every positive whole number, following this rule, eventually reaches 1. Nobody has proved it."
   },
   {
    "t": 54,
    "x": "The paper studies a family of similar rules. Pick an odd number and call it $q$. The rule is: if a number is even, cut it in half. If it is odd, multiply it by $q$ and add 1. When $q$ is 3, this is the classic Collatz rule. When $q$ is 5, it is the $5x + 1$ rule, and so on."
   },
   {
    "t": 73,
    "x": "One detail matters a great deal: many researchers use a shortcut version of the rule that skips the even numbers, and jumps straight from one odd number to the next. This paper does not take that shortcut. It keeps every even step."
   },
   {
    "t": 88,
    "x": "The reason is simple: with the full rule, if a number $x$ reaches the target, then $2x$ also reaches it, because $2x$ is even, and halving it gives $x$. The same goes for $4x$, $8x$, and so on. So every number in the tree brings with it an endless tower of even numbers. The paper needs those even numbers, because it makes claims about all numbers, even and odd."
   },
   {
    "t": 112,
    "x": "# Second, the target"
   },
   {
    "t": 114,
    "x": "Not every target works. Here is why: every time the rule takes an odd step, the result, $qx + 1$, leaves a remainder of 1 when divided by $q$. After that, each halving step changes that remainder in a fixed way. The upshot is that any number reached through at least one odd step must leave the same remainder when divided by $q$ as some power of 2 does."
   },
   {
    "t": 138,
    "x": "A target that fails this test can only be reached by halving, so its tree is nothing but a single tower of doublings. The paper calls a target admissible when it passes the test."
   },
   {
    "t": 150,
    "x": "For $q = 3$, this just means the target is not a multiple of 3. For $q = 5$, the target must not be a multiple of 5. For $q = 7$, the powers of 2 leave remainders of 1, 2, or 4 when divided by 7, so the target must leave one of those remainders."
   },
   {
    "t": 171,
    "x": "# Third, the main result: Theorem A"
   },
   {
    "t": 174,
    "x": "To state it, we need the idea of a residue class. Pick a whole number $m$, called the modulus, and pick a remainder. The residue class is every number that leaves that remainder when divided by $m$. For example, with $m = 11$ and remainder 0, you get all multiples of 11. With $m = 1000$ and remainder 4, you get every number that leaves 4 when divided by 1000. Think of a residue class as a repeating pattern on the number line."
   },
   {
    "t": 205,
    "x": "Theorem A says this: suppose $q$ is odd, and is not what is called a Wieferich number, which we will define shortly. Suppose the target is admissible. Then the target’s backward tree contains infinitely many numbers from every residue class, for every modulus $m$. No repeating pattern, however fine or strange, can avoid the tree. In technical language, the tree is dense in the profinite integers."
   },
   {
    "t": 232,
    "x": "The paper also gives an explicit limit on how far you must search to find the first member of a given pattern in the tree. That limit is enormous. Take the $5x + 1$ rule, with target 7, and look for multiples of 11. The paper’s limit is a number with about five and a half million digits. But the true answer is tiny: 11 itself works. 11 is odd, so it goes to 56. Then 56 halves to 28, then 14, then 7."
   },
   {
    "t": 260,
    "x": "The point of the limit is not its size. The point is that it is finite: it turns an open-ended search into a bounded one. The authors checked Theorem A and the next result, Theorem B, using Lean, a computer program that verifies every step of a proof down to basic logic. This rules out gaps and hidden mistakes in the argument."
   },
   {
    "t": 283,
    "x": "# Fourth, the exception"
   },
   {
    "t": 286,
    "x": "Take an odd number $q$. Find the smallest power of 2 that leaves a remainder of 1 when divided by $q$. Subtract 1 from that power of 2, and divide by $q$. If the result shares a prime factor with $q$, then $q$ is called a Wieferich number."
   },
   {
    "t": 304,
    "x": "The first one is 21. The smallest power of 2 that leaves remainder 1 when divided by 21 is 64. $64 - 1$ is 63, and 63 divided by 21 is 3. 3 and 21 share the factor 3, so 21 is a Wieferich number. 3, 5, 7, and 15 are not."
   },
   {
    "t": 327,
    "x": "Theorem B says that for Wieferich numbers, the result fails. For example, with the $21x + 1$ rule and target 1, no number that leaves a remainder of 5 when divided by 63 ever reaches 1. Together, the two theorems say: the backward tree of 1 reaches every residue class for every modulus, exactly when $q$ is not a Wieferich number."
   },
   {
    "t": 352,
    "x": "# Fifth, what this does not prove"
   },
   {
    "t": 354,
    "x": "It is tempting to think that since the tree of 1 reaches every pattern under the $3x + 1$ rule, the Collatz conjecture must be true. That is wrong, and the $5x + 1$ rule shows why."
   },
   {
    "t": 367,
    "x": "Under $5x + 1$, there are at least three separate loops. One loop contains 1. Another starts at 13: 13 goes to 66, then 33, and after several more steps returns to 13. A third starts at 17, and likewise returns to 17. A number can only follow one path forward, so a number that reaches 1 never reaches 13, and a number that reaches 13 never reaches 17. The three backward trees share no numbers at all."
   },
   {
    "t": 400,
    "x": "Yet 5 is not a Wieferich number, and 1, 13, and 17 are all admissible. So by Theorem A, each of the three trees contains infinitely many multiples of 11, infinitely many members of every pattern, and still they never share a single number. This is like the rational and irrational numbers, which are both found in every interval of the real line, yet never overlap."
   },
   {
    "t": 425,
    "x": "# Three limits"
   },
   {
    "t": 427,
    "x": "First, Theorem A is about presence, not proportion. It says each pattern contains infinitely many tree members, but not what share of the numbers they make up. That share could be essentially zero."
   },
   {
    "t": 440,
    "x": "Second, Theorem A says the same thing for $3x + 1$ as for $5x + 1$, even though $5x + 1$ has several loops. So it cannot tell a world where the Collatz conjecture is true from one where it is false. For $3x + 1$, this fact about the tree of 1 was already known; the news is the full family of rules."
   },
   {
    "t": 461,
    "x": "Third, Theorem A describes where numbers come from, not where they go. Given the number 27, it cannot say whether 27 reaches 1. What the theorem does settle is this: no rule based on remainders can ever show that some numbers fail to reach the target. Any such attempt must look at something else."
   },
   {
    "t": 480,
    "x": "# Finally, the open question"
   },
   {
    "t": 482,
    "x": "Within the tree itself, does each residue class get its fair share? For a modulus $m$, does each remainder hold about $1/m$-th of the tree? The question must be asked inside the tree, not across all numbers. Under $5x + 1$, most numbers are believed to grow forever, so the tree of 1 probably makes up almost none of the number line."
   },
   {
    "t": 503,
    "x": "This resembles a famous open problem about $\\pi$. Everyone believes each digit of $\\pi$ appears one tenth of the time, but no one has even proved that the digit 7 appears infinitely often. These are different kinds of objects, so the comparison is only an analogy."
   },
   {
    "t": 518,
    "x": "But in one sense, the backward trees are now better understood: having infinitely many members in every pattern has been proved. The fair share question remains open for both."
   }
  ]
 }
];

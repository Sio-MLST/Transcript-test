// Transcript data for the narration MP3 (filename is set in index.html <audio src>).
// Format (same for future transcripts):
//   who:   "Cruz" = main thread, plays continuously
//          "Koda" = aside card, skipped unless clicked (label sets the card tag)
//   start: segment start in ms
//   paras: strings, or { t: seconds, x: text } for exact paragraph timing.
//          "# " prefix = heading; $...$ / $$...$$ = KaTeX; <em> allowed.
window.SEGMENTS = [
 {
  "who": "Cruz",
  "start": 0,
  "paras": [
   {
    "t": 0,
    "x": "# The Collatz Conjecture."
   },
   {
    "t": 2,
    "x": "# What Remains."
   },
   {
    "t": 5,
    "x": "Take any positive whole number. If it’s even, halve it. If it’s odd, triple it and add one. Then do the same thing again, and keep going. The conjecture says that no matter where you start, you eventually reach one."
   },
   {
    "t": 22,
    "x": "It takes ten seconds to state, and it has resisted proof for nearly a century. That alone isn’t unusual; plenty of problems are hard. What’s striking about this one is the shape of the progress. Over fifty years, mathematicians have proved real theorems about it, some of them deep. And yet every one of them stops just short, each in its own specific way."
   },
   {
    "t": 45,
    "x": "So that’s the question I want to follow here. Not just what has been proved, but why it all stops where it does. I think there’s a single answer, and it has to do with direction. By the end, I want to be able to say exactly what a proof would need, in terms precise enough that you could check a claimed proof against it."
   },
   {
    "t": 64,
    "x": "Along the way there will be tangents. Each one is announced, and each one ends by returning to the main thread. Nothing in the main thread depends on them, so if you skip them, you lose detail, not the argument."
   },
   {
    "t": 76,
    "x": "# Two directions"
   },
   {
    "t": 79,
    "x": "There are two ways to look at this problem."
   },
   {
    "t": 82,
    "x": "The first is forward. You pick a starting number and follow its orbit: halve, triple and add one, halve again. The conjecture is a forward statement. It says every orbit, followed far enough, arrives at one."
   },
   {
    "t": 96,
    "x": "The second is backward. You start at one and ask which numbers lead to it. One comes from two. Two comes from four. Four comes from eight, and also from one, which is the familiar loop. Sixteen comes from thirty-two, and also from five, since $3 \\cdot 5 + 1 = 16$. Keep going, and these predecessors form a tree that branches downward without end."
   },
   {
    "t": 122,
    "x": "The conjecture, in these terms, says the backward tree from one contains every positive integer. The forward view asks whether any orbit escapes. The backward view asks whether the tree misses anything. Those are the same question, but the tools that work in one direction don’t easily cross over to the other."
   },
   {
    "t": 143,
    "x": "That is the thread. Each result we meet looks in one direction or the other, and each time, I’ll ask the same two things: which direction it sees, and what it can’t see from there."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 155000,
  "paras": [
   {
    "t": 155,
    "x": "# Multiples of three"
   },
   {
    "t": 159,
    "x": "The tree has one structural feature that will come back later. Whenever you triple an odd number and add one, the result leaves a remainder of one when divided by three: $3n+1 \\equiv 1 \\pmod 3$. So no odd step ever lands on a multiple of three. A multiple of three has no odd predecessor at all; it can only be reached by halving, which means the tree above it is a single chain of doublings, and nothing else."
   },
   {
    "t": 183,
    "x": "That’s a restriction on where a branch can be rooted, not on what grows from it. Further along, the branches pass through multiples of three freely. This is why several results we’ll meet are stated for targets not divisible by three. The restriction falls on the root, and only on the root."
   },
   {
    "t": 200,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 202000,
  "paras": [
   {
    "t": 202,
    "x": "# Part one. Cycles."
   },
   {
    "t": 205,
    "x": "Start forward, with the most concrete way for the conjecture to fail: a loop. A cycle of numbers, other than $1 \\to 4 \\to 2 \\to 1$, that returns to where it started and never reaches one."
   },
   {
    "t": 218,
    "x": "Going once around such a loop, you multiply by three at every odd step and divide by two at every halving, and you end up exactly where you began. For that to balance, the number of halvings, divided by the number of odd steps, has to sit just above $\\log_2 3 \\approx 1.585$."
   },
   {
    "t": 238,
    "x": "The key quantity is how close the balance comes to being exact. Take the number of halvings times $\\log 2$, and subtract the number of odd steps times $\\log 3$. What’s left is a small positive gap, called $\\Lambda$."
   },
   {
    "t": 255,
    "x": "An elementary inequality then says that the smallest number in the cycle must be less than the number of odd steps divided by $3\\Lambda$. So if $\\Lambda$ can’t be too small, the cycle’s smallest member is forced to be small. And small numbers have been checked by computer, with no new cycle among them."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 276000,
  "paras": [
   {
    "t": 276,
    "x": "# The cycle identity"
   },
   {
    "t": 279,
    "x": "Here is the exact equation behind that balance. Work with the shortcut map, which takes an odd number, triples it, adds one, and removes every factor of two at once. Suppose a cycle has $k$ odd elements. Let $a_i$ be the number of factors of two removed at step $i$, let $K = \\sum a_i$, and let $A_j = \\sum_{i<j} a_i$."
   },
   {
    "t": 309,
    "x": "Then $$n_0\\,(2^K - 3^k) = \\sum_{j=0}^{k-1} 3^{\\,k-1-j}\\, 2^{A_j}.$$ The right-hand side is positive, so the bracket on the left must be positive too. That is where the condition comes from: $K/k > \\log_2 3$."
   },
   {
    "t": 337,
    "x": "The same equation can be read three ways. As an exact relation among integers, it is a Diophantine problem. With logarithms taken, it becomes a statement about real magnitudes, which is where $\\Lambda$ and the inequality on the smallest element come from. And the third reading asks how closely powers of two and three can approximate each other at all, which is the subject of the next part of the main thread."
   },
   {
    "t": 361,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 363000,
  "paras": [
   {
    "t": 363,
    "x": "The guarantee about $\\Lambda$ comes from Alan Baker’s theory of linear forms in logarithms, which measures how closely powers of two and three can approximate each other. In 1995, Laurent, Mignotte, and Nesterenko gave a sharp version for two logarithms. Roughly, $\\log \\Lambda \\ge -C\\,(\\log K)^2$ for a fixed constant $C$. Combined with the inequality, that gives an explicit ceiling on the smallest member of any cycle of a given length."
   },
   {
    "t": 394,
    "x": "This has ruled out large families of cycles. In 1977, Ray Steiner proved that the only cycle with a single local minimum is the trivial one. John Simons and Benne de Weger then classified cycles by their number of local minima. In 2005, combining Baker-type estimates with lattice reduction, they excluded every non-trivial cycle with up to 68. In 2023, Christian Hercher pushed that to 91, and later published a correction."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 428000,
  "paras": [
   {
    "t": 428,
    "x": "# Counting local minima"
   },
   {
    "t": 431,
    "x": "Why count local minima rather than length? A local minimum is where an orbit stops falling and starts rising. Simons and de Weger called a cycle with exactly $m$ of them an $m$-cycle. Between two minima, a cycle climbs through a run of odd steps and then descends through a run of halvings. So $m$ measures how many separate rise-and-fall episodes the cycle contains."
   },
   {
    "t": 456,
    "x": "That’s the right measure of difficulty, because each episode contributes its own term to the linear form. With one episode, Steiner’s case, there are two logarithms, and the sharp two-logarithm bounds apply directly. As $m$ grows, the problem needs more logarithms at once, and the constants get worse. The exclusions at 68 and 91 are the points where lattice reduction and the verified computational range could still close the gap."
   },
   {
    "t": 482,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 484000,
  "paras": [
   {
    "t": 484,
    "x": "# Where it stops"
   },
   {
    "t": 486,
    "x": "These results lean on computation, so the excluded range grows as the verified range of numbers grows. But the real limit is structural. Once the number of local minima grows along with the length of the cycle, the argument needs bounds involving many logarithms at once. The constants in those bounds grow so quickly that the ceiling ends up far above anything that has been checked, and the contradiction disappears."
   },
   {
    "t": 514,
    "x": "A recent formalization by André Hallqvist, which we’ll come back to, adds a no-go result here. It shows that certain kinds of modular equations can’t serve as obstructions to cycles. That excludes no cycles by itself, but it narrows down which strategies could."
   },
   {
    "t": 531,
    "x": "So the forward view, used one orbit-shape at a time, closes off simple loops but not complicated ones. And it says nothing about the other way to fail, an orbit that simply grows forever. To see past that, you need a method that doesn’t inspect orbits individually. The natural move is to turn around."
   },
   {
    "t": 552,
    "x": "# Part two. Measuring the tree."
   },
   {
    "t": 555,
    "x": "Look backward. If you can’t follow every orbit forward, perhaps you can show the tree from one is large."
   },
   {
    "t": 562,
    "x": "The standard measure is a count: how many numbers up to some size $x$ are known to reach one. That count is written $\\pi(x)$. In 1978, Richard Crandall showed that it grows at least like $x$ raised to some positive power, and the history since then is a series of improvements to that power."
   },
   {
    "t": 582,
    "x": "In 1989, Ilia Krasikov introduced systems of difference inequalities and reached an exponent of $0.43$. Günther Wirsching enlarged the system and reached $0.48$. David Applegate and Jeffrey Lagarias got to $0.65$ with a computer-assisted tree search, and then to $0.81$ by applying nonlinear programming to Krasikov’s inequalities. In 2003, Krasikov and Lagarias together proved the bound that still stands in the refereed literature: for all large enough $x$, $\\pi(x) \\ge x^{0.84}$."
   },
   {
    "t": 621,
    "x": "# Where it stops"
   },
   {
    "t": 624,
    "x": "That bound measures the size of the tree, not its share of the integers. Any exponent below one, however close it gets, still allows the numbers reaching one to be a vanishing fraction of all numbers."
   },
   {
    "t": 637,
    "x": "What’s really wanted is a positive lower density. That means that at every scale, the numbers reaching one make up at least some fixed fraction of the whole."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 647000,
  "paras": [
   {
    "t": 647,
    "x": "# Why “lower”"
   },
   {
    "t": 651,
    "x": "Formally, the lower natural density is $$\\liminf_{x\\to\\infty} \\frac{\\pi(x)}{x}.$$ The limit inferior is used because the ordinary limit may not exist. The ratio could rise and fall forever, never settling. The limit inferior is the lowest level the ratio keeps returning to."
   },
   {
    "t": 669,
    "x": "A positive lower density means the fraction never sinks below a fixed floor, at any sufficiently large scale. That is strictly more than a positive upper density, which would only require the fraction to be large along some favourable sequence of scales. A set can be dense at some scales and sparse at others, and only the lower version rules that out."
   },
   {
    "t": 695,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 698000,
  "paras": [
   {
    "t": 698,
    "x": "Recent preprints haven’t moved the refereed frontier. A preprint by Chao Liu, from December 2025, reportedly announced an exponent of $0.946$ in its first version. The second version proves only $0.3227$, below Krasikov’s result from 1989. In July of this year, Lech Mazur announced a Lean-checked bound with exponent $0.9$, for targets not divisible by three. That hasn’t been refereed."
   },
   {
    "t": 728,
    "x": "So the tree is provably large. But counting, on its own terms, keeps producing exponents below one, and an exponent below one can’t become a fraction. The backward view has measured the tree’s size and stopped at the question of its share. To get a share, something has to say how much of the number line typical orbits actually cover. That is a forward question again."
   },
   {
    "t": 755,
    "x": "# Part three. Coming down."
   },
   {
    "t": 758,
    "x": "Back to the forward direction, but with a different goal. Instead of excluding bad orbits one type at a time, these results ask what a typical orbit does."
   },
   {
    "t": 768,
    "x": "The starting point is a simple average. After an odd step, the number of halvings that follow is, on average, two. So a typical odd step multiplies by three and then divides by about four. Three quarters is less than one, so on average, orbits shrink. That downward drift is the heart of every result in this part, and it will turn out to be the heart of the whole story."
   },
   {
    "t": 793,
    "x": "In 1976, Riho Terras proved that almost every number eventually drops below its starting value, where “almost every” means natural density one. In 1994, Ivan Korec strengthened this. For any exponent above $\\log 3 / \\log 4 \\approx 0.7925$, almost every number $n$ eventually falls below $n$ raised to that power."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 820000,
  "paras": [
   {
    "t": 820,
    "x": "# Where Korec’s number comes from"
   },
   {
    "t": 823,
    "x": "$\\log 3 / \\log 4$ is the drift, written as an exponent. Each odd step multiplies by three, and on average its halvings divide by four. After the first few typical rounds, a number $n$ has been multiplied by three some number of times and divided by four the same number of times, on average."
   },
   {
    "t": 843,
    "x": "Look at it on a logarithmic scale. Multiplying by three adds $\\log 3$; dividing by four subtracts $\\log 4$. The ratio of those two is exactly the fraction of $n$’s size, in logarithmic terms, that survives one typical round. So Korec’s exponent is the downward drift, stated as a power. Any power above it is a level that typical orbits get below."
   },
   {
    "t": 870,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 872000,
  "paras": [
   {
    "t": 872,
    "x": "In 2022, Terence Tao proved something much stronger. Pick any function that grows to infinity, however slowly. Then almost every orbit eventually falls below that function of its starting value."
   },
   {
    "t": 886,
    "x": "# Where it stops"
   },
   {
    "t": 888,
    "x": "There are two qualifications, and both matter."
   },
   {
    "t": 891,
    "x": "The first is that Tao’s “almost every” is measured in logarithmic density, not natural density. Natural density counts every number equally. Logarithmic density gives larger numbers less weight. Natural density one implies logarithmic density one, but not the other way around. Tao noted that upgrading to natural density seems plausible, but he didn’t prove it."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 916000,
  "paras": [
   {
    "t": 916,
    "x": "# Logarithmic density"
   },
   {
    "t": 920,
    "x": "Logarithmic density weights each number $n$ by $1/n$, and normalizes by $\\sum_{n \\le x} 1/n \\approx \\log x$. Under this weighting, a block of numbers near a million counts for far less than a block of the same length near a hundred. The large numbers are damped."
   },
   {
    "t": 939,
    "x": "That damping is what allowed Tao’s argument to settle down. His proof tracks a first-passage random variable, roughly the state of an orbit the first time it crosses a given level, and shows that its distribution stabilises. The logarithmic weighting makes this stabilisation available. Under natural density, with every number counted equally, the argument doesn’t close."
   },
   {
    "t": 962,
    "x": "And the gap between the two densities is real. A set can have logarithmic density one while its natural density doesn’t exist at all, because its ratio keeps oscillating."
   },
   {
    "t": 972,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 974000,
  "paras": [
   {
    "t": 974,
    "x": "Two lines of preprints from this year claim that upgrade. In July, Mazur claimed descent below every growing threshold, in natural density and within a logarithmic number of steps, with a Lean formalization. In October, I. A. Shaik revised a preprint claiming polylogarithmic descent in natural density. Neither has been refereed."
   },
   {
    "t": 997,
    "x": "The second qualification holds even if those claims are right. Coming down is not the same as arriving. An orbit can fall far below its start and still, in principle, climb again or enter a cycle. These results say typical orbits get small. They don’t say typical orbits reach one, and they say nothing about every orbit."
   },
   {
    "t": 1018,
    "x": "So now we have two partial pictures, facing opposite ways. The backward tree is large, but not provably a fixed share. Forward orbits typically come down, but not provably all the way. The obvious hope is that the two could be joined. Before trying that, it helps to see how far the backward picture alone can be pushed."
   },
   {
    "t": 1039,
    "x": "# Part four. The tree reaches everywhere."
   },
   {
    "t": 1042,
    "x": "Earlier this month, André Hallqvist released a Lean 4 formalization that pushes the backward picture much further. It’s called <em>Effective Remainder Everywhere</em>."
   },
   {
    "t": 1051,
    "x": "Fix a target that isn’t divisible by three. Fix any modulus, and any remainder with respect to that modulus. Hallqvist proves that some number with that remainder reaches the target, and he gives an explicit bound on how large that number needs to be. So every remainder class contains predecessors of the target, including the classes divisible by three, which the target itself had to avoid. From the point of view of remainders, the backward tree has no blind spots at all. The proof uses only Lean’s core library and sits in a public repository. It hasn’t been peer reviewed."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 1086000,
  "paras": [
   {
    "t": 1086,
    "x": "# How the proof divides the modulus"
   },
   {
    "t": 1090,
    "x": "The argument splits the modulus into two pieces. One piece is made of the powers of two and three. The other is everything coprime to six."
   },
   {
    "t": 1099,
    "x": "The powers of two and three are handled through parity words of the shortcut map: the sequence of odd and even steps an orbit takes. Prescribing that sequence controls the remainder modulo powers of two and three directly."
   },
   {
    "t": 1116,
    "x": "The part coprime to six is handled differently, through the fibres of the backward closure, meaning the sets of predecessors grouped by remainder. A minimal-period argument then shows that translation by one acts as a stabilizer. Informally, shifting a remainder class by one doesn’t change whether it is hit, so if one class is reached, they all are."
   },
   {
    "t": 1142,
    "x": "This result is about the ordinary map, with every halving counted. Much of the literature, including the cycle arguments from Part one, uses the shortcut that strips out the halvings and tracks only how one odd number leads to the next. For many questions, that loses nothing. Here, it loses the mechanism. Even numbers are part of what has to be reached, and the halvings carry the powers of two that the argument works with."
   },
   {
    "t": 1169,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 1171000,
  "paras": [
   {
    "t": 1171,
    "x": "The bound is enormous. Call the modulus $N$. The guaranteed predecessor is at most $w \\cdot 2^{2^{48N^4}}$, where $w$ is the target. That’s a double exponential."
   },
   {
    "t": 1187,
    "x": "A small example shows how much room there is. Take the target eleven, and ask for a predecessor divisible by seven. Seven itself works: $7 \\to 22 \\to 11$. The theorem, by contrast, only promises a predecessor below roughly $10^{10^{34692}}$."
   },
   {
    "t": 1209,
    "x": "This is best read as a first bound. It comes from a general construction with a lot of slack, and it can almost certainly be brought down. What exists today is a finite, explicit guarantee for every modulus and every remainder, where before there was none."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 1227000,
  "paras": [
   {
    "t": 1227,
    "x": "# How far the bound might come down"
   },
   {
    "t": 1232,
    "x": "A more ambitious possibility is that the techniques behind Mazur’s density results, which we’ll meet shortly, could be carried into Hallqvist’s framework. If so, the double exponential might come down to something like an ordinary exponential, with a polynomial in the exponent. It would still be astronomical, but considerably smaller."
   },
   {
    "t": 1255,
    "x": "That’s speculation. The two approaches are built differently, and combining them would be real mathematical work."
   },
   {
    "t": 1263,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 1265000,
  "paras": [
   {
    "t": 1265,
    "x": "# A different map"
   },
   {
    "t": 1268,
    "x": "So the backward tree is complete, at least as far as remainders can tell. Here, the story turns. The question is no longer how much the backward tree contains, but whether that could ever be enough."
   },
   {
    "t": 1280,
    "x": "Hallqvist also proved the same result for the $5x+1$ map, where odd numbers are multiplied by five instead of three. The construction carries over. So the backward tree of $5x+1$ reaches every remainder just as thoroughly."
   },
   {
    "t": 1295,
    "x": "But going forward, $5x+1$ is a different world. It has at least three separate cycles, containing 1, 13, and 17. And some of its orbits appear to grow forever. You can see why from the same average as before. A typical odd step now multiplies by five and divides by about four. Five quarters is more than one, so the drift points upward instead of down."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 1322000,
  "paras": [
   {
    "t": 1322,
    "x": "# The $5x+1$ bound"
   },
   {
    "t": 1326,
    "x": "For $5x+1$, the guaranteed predecessor is at most $w \\cdot 2^{2^{105N^5}}$. It is again a double exponential, now with a larger top exponent, $105N^5$ instead of $48N^4$. The known cycles have smallest odd elements 1, 13, and 17."
   },
   {
    "t": 1354,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 1356000,
  "paras": [
   {
    "t": 1356,
    "x": "Put those two facts side by side. Two maps can have backward trees with exactly the same reach into every remainder class, and completely opposite forward behaviour. The backward property is real, but it can’t tell those two maps apart. And the conjecture is a statement about exactly the difference between them."
   },
   {
    "t": 1376,
    "x": "This gives us a test. Call it the $5x+1$ test. Any argument that would work just as well for $5x+1$ cannot prove the conjecture, because $5x+1$ has cycles other than one, and the argument would prove something false. The backward tree passes that test perfectly, which is exactly why it can’t be enough. The downward drift fails it. So whatever real content the problem has must run through the drift."
   },
   {
    "t": 1404,
    "x": "# Part five. Crossing over."
   },
   {
    "t": 1407,
    "x": "That brings us to the most ambitious claims of this year, which try to do exactly that: use the drift to make the backward tree carry weight."
   },
   {
    "t": 1415,
    "x": "In September, Mazur released a manuscript with a Lean formalization. It claims an explicit positive constant such that, for every large enough bound, at least that fraction of the numbers below the bound reach one. They do so within about $10.46 \\log n$ steps, counting every ordinary step. A companion preprint extends this to any fixed target not divisible by three, without assuming that the target itself reaches one."
   },
   {
    "t": 1443,
    "x": "The method shows the bridge clearly. Mazur starts from a single number that is known to reach one, and builds the tree backward from it, keeping only branches whose shape is typical. Then he uses the downward drift of $3x+1$ to show that these branches are plentiful enough, at every scale, to fill a fixed fraction of the integers. It is a backward construction, made to carry weight by a forward statistic. And that statistic is exactly the one that fails the $5x+1$ test, which is why the construction doesn’t transfer."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 1478000,
  "paras": [
   {
    "t": 1478,
    "x": "# The seed"
   },
   {
    "t": 1483,
    "x": "The single starting number in Mazur’s construction comes from a simple family: $R = (4^m - 1)/3$. Then $3R + 1 = 4^m$ is a power of four, so a single odd step followed by halvings takes $R$ straight to one."
   },
   {
    "t": 1504,
    "x": "The construction needs a seed in a particular remainder class modulo a power of three, chosen by averaging so that its backward tree has enough weight. The family supplies one, because as the power of four runs through a full period, these numbers pass through every remainder class modulo that power of three. So some member lands in the favourable class, and it is already known to reach one in one step."
   },
   {
    "t": 1528,
    "x": "This is why the result doesn’t assume anything about convergence beyond that one seed. Everything else is built backward from a number whose fate is settled."
   },
   {
    "t": 1541,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 1544000,
  "paras": [
   {
    "t": 1544,
    "x": "I. A. Shaik claims positive lower density of convergence at any rate above $3 / \\log(4/3) \\approx 10.43$ steps per unit of logarithm. And in October, Kelvin Lau made Mazur’s construction fully explicit. Below any bound, at least that bound divided by a fixed tower of twos, rounded down, of the odd numbers reach one in the same number of steps."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 1571000,
  "paras": [
   {
    "t": 1571,
    "x": "# Counting every step"
   },
   {
    "t": 1576,
    "x": "The $10.46$ counts every application of the ordinary map. Each tripling counts as one step, and each halving counts as one step. In the shortcut map, an odd step and all its halvings are merged into one. Mazur’s time bound deliberately does not do that."
   },
   {
    "t": 1588,
    "x": "So the constant has two parts in its derivation. First, the number of odd steps along a selected orbit is bounded by a multiple of the logarithm of the starting number. Then the full record of halvings, including the last step from the seed down to one, converts that into ordinary steps. The rounding is generous, so $10.46$ is a certified ceiling, not an estimate of typical behaviour."
   },
   {
    "t": 1624,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 1626000,
  "paras": [
   {
    "t": 1626,
    "x": "# Where it stops"
   },
   {
    "t": 1628,
    "x": "The tower in Lau’s bound is $2^{2^{2^{163}}}$. Below that height, the count rounds down to zero, so the statement only says something about numbers beyond any imaginable scale."
   },
   {
    "t": 1643,
    "x": "That’s part of a wider pattern. Several of this year’s results, many produced with substantial help from AI systems, establish bounds that didn’t exist before, but the numbers are astronomical. Mazur’s explicit constants are given by long arithmetic recipes, and he says plainly that they aren’t numerically usable. Hallqvist’s double exponential belongs to the same family. Each shows that a bound exists. Making it reasonable is a separate task, and it’s still open."
   },
   {
    "t": 1672,
    "x": "The standing of these claims needs the same care. Mazur’s work was developed with AI agents, and Lau’s was found and formalized with an automated prover. A compiled Lean proof establishes something narrow and exact: every step follows from the definitions as they were written down. If a formalization encodes density, or reachability, or step counts in a way that differs subtly from the standard meaning, the proof still compiles, but it certifies a different theorem. So there are three separate checks: verification by machine, a human audit of what was actually stated, and archival peer review. For these preprints, only the first is complete. None of them has been refereed."
   }
  ]
 },
 {
  "who": "Koda",
  "label": "Tangent",
  "start": 1715000,
  "paras": [
   {
    "t": 1715,
    "x": "# What Lean actually checks"
   },
   {
    "t": 1719,
    "x": "Lean checks each deduction against the encoded definitions and the axioms in use. For these projects, those are typically propositional extensionality, classical choice, and quotient soundness, all standard. Mazur reports no admitted proofs and no project-specific axioms, and Hallqvist’s formalization uses only Lean’s core library."
   },
   {
    "t": 1742,
    "x": "What Lean cannot check is whether the formal statement says what the paper says. If density were defined with the wrong limit, or a step count with the wrong convention, the proof would compile without complaint. One automated system checking another’s output is not peer review. That correspondence is a question for human readers."
   },
   {
    "t": 1762,
    "x": "Back to the main thread."
   }
  ]
 },
 {
  "who": "Cruz",
  "start": 1764000,
  "paras": [
   {
    "t": 1764,
    "x": "And even if all of it holds, a positive fraction is still not everything. The bridge carries some of the integers across, not all of them."
   },
   {
    "t": 1772,
    "x": "# What remains"
   },
   {
    "t": 1775,
    "x": "So, back to the question we started with. Why does every approach stop just short?"
   },
   {
    "t": 1780,
    "x": "Because each one sees from one direction, and each direction has a blind spot of its own. The cycle methods see forward, but only loops of limited complexity. The counting methods see backward, and measure the tree’s size but not its share. The descent methods see forward through an average, and averages describe typical orbits, never every orbit. Hallqvist’s theorem sees the backward tree completely, at the level of remainders, and the $5x+1$ map shows that completeness of that kind decides nothing. Mazur’s construction joins a backward tree to a forward average, which is why it gets further than either alone, and why what it gets is a fraction rather than the whole."
   },
   {
    "t": 1821,
    "x": "The $5x+1$ test sorts all of this. The backward structure passes it, so the backward structure can’t be the proof. The drift fails it, so the drift is where the content lives. But the drift is an average, and an average leaves room for exceptions."
   },
   {
    "t": 1839,
    "x": "That lets us state what a proof needs, in the precise terms I promised at the start. It needs an ingredient that distinguishes $3x+1$ from $5x+1$, and that holds for every orbit, not just most of them. Either a forward argument that rules out every exception to the drift, or a backward property strong enough that $5x+1$ demonstrably lacks it."
   },
   {
    "t": 1864,
    "x": "Nothing known today is either. But the shape of the problem has changed. Fifty years ago, the conjecture was a ten-second statement with no clear place to push. Now the backward structure is well understood, forward behaviour is understood on average, and the two have been joined, at least in preprint, across a fixed fraction of the integers."
   },
   {
    "t": 1888,
    "x": "The gap that remains is no longer vague. It is the difference between almost every orbit and every orbit. That is the same ten-second statement we began with, but now we know exactly which word in it carries the weight. <em>Every.</em>"
   }
  ]
 }
];

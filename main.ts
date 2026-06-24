import { formatDate } from "./utils/formatDate.js";
import { timeAgo } from "./utils/timeAgo.js";
import { truncate } from "./utils/truncate.js";
import { slugify } from "./utils/slugify.js";
import { groupBy } from "./utils/groupBy.js";
import { sortBy } from "./utils/sortBy.js";
import { unique } from "./utils/unique.js";
import { formatINR } from "./utils/formatINR.js";

console.log("=== formatDate ===");
console.log(formatDate("2026-06-19"), "→ expected: 19 Jun 2026");
console.log(formatDate("2026-01-05", "en-US"), "→ expected: Jan 5, 2026");
console.log(formatDate("2026-12-25"), "→ expected: 25 Dec 2026");
console.log(formatDate("2025-03-01", "de-DE"), "→ expected: 1.3.2025");

console.log("\n=== timeAgo ===");
const now = Date.now();
const dayMs = 86400000;
const hourMs = 3600000;
console.log(timeAgo(new Date(now - 2 * dayMs)), "→ expected: 2 days ago");
console.log(timeAgo(new Date(now - 3 * hourMs)), "→ expected: 3 hours ago");
console.log(timeAgo(new Date(now - 600000)), "→ expected: 10 mins ago");
console.log(timeAgo(new Date(now - 60000)), "→ expected: Just now");

console.log("\n=== truncate ===");
console.log(truncate("Hello world", 5), "→ expected: Hello...");
console.log(truncate("Short", 10), "→ expected: Short");
console.log(truncate("Exact length", 12), "→ expected: Exact length");
console.log(truncate("", 3), "→ expected: ");

console.log("\n=== slugify ===");
console.log(slugify("Hello World"), "→ expected: hello-world");
console.log(slugify("  What's up?  "), "→ expected: whats-up");
console.log(slugify("Hello   World"), "→ expected: hello-world");
console.log(
  slugify("Special & Characters!"),
  "→ expected: special--characters",
);

console.log("\n=== groupBy ===");
const items = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "student" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "faculty" },
];
console.log(groupBy(items, (i) => i.role));
console.log(
  "expected: { admin: [Alice, Charlie], student: [Bob], faculty: [David] }",
);

console.log("\n=== sortBy ===");
const nums = [3, 1, 4, 1, 5, 9];
console.log(
  sortBy(nums, (n) => n),
  "→ expected: [1, 1, 3, 4, 5, 9]",
);
console.log(
  sortBy(nums, (n) => n, "desc"),
  "→ expected: [9, 5, 4, 3, 1, 1]",
);
const named = [{ n: "Zara" }, { n: "Amit" }, { n: "Bob" }];
console.log(
  sortBy(named, (x) => x.n),
  "→ expected: [{ Amit }, { Bob }, { Zara }]",
);

console.log("\n=== unique ===");
console.log(unique([1, 2, 2, 3, 1, 4]), "→ expected: [1, 2, 3, 4]");
console.log(unique(["a", "b", "a", "c"]), "→ expected: [a, b, c]");
console.log(unique([]), "→ expected: []");
console.log(unique([5]), "→ expected: [5]");

console.log("\n=== formatINR ===");
console.log(formatINR(1234567), "→ expected: ₹12,34,567");
console.log(formatINR(1234.56), "→ expected: ₹1,234.56");
console.log(formatINR(100), "→ expected: ₹100");
console.log(formatINR(0), "→ expected: ₹0");
console.log(formatINR(987654321), "→ expected: ₹98,76,54,321");

console.log("\n=== debounce / throttle ===");
console.log("Manual test: open index.html in browser with console open.");
console.log(
  "debounce: resize window rapidly — function fires once after 300ms pause.",
);
console.log(
  "throttle: scroll rapidly — function fires at most once per 200ms.",
);

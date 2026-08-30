// 🧠 JavaScript Event Loop

// (with Microtask vs Macrotask)
// 👉 Beginner-friendly explanation

// 1️⃣ First: What problem does the Event Loop solve?

// JavaScript has:

// ❗ Only ONE Call Stack

// That means:

// JS can do one thing at a time

// But browsers / Node need to handle:

// timers

// API calls

// user clicks

// 👉 Event Loop is the mechanism that lets JS do async work without blocking.

// 2️⃣ The 4 main parts (MEMORIZE THESE)
// 1. Call Stack
// 2. Web APIs (Browser / Node)
// 3. Task Queues
//    - Macrotask Queue
//    - Microtask Queue
// 4. Event Loop


// We’ll go one by one.

// 3️⃣ Call Stack (Where code runs)

// Executes synchronous code

// One function at a time

// LIFO (Last In First Out)

// Example:

// console.log("A");
// console.log("B");


// Stack:

// | console.log("B") |
// | console.log("A") |

// 4️⃣ Web APIs (Background helpers)

// Browser / Node provides these:

// setTimeout

// fetch

// DOM events

// promises handling

// JS sends async work here.

// Example:

// setTimeout(() => {
//   console.log("Timer");
// }, 1000);


// Timer runs outside the call stack.

// 5️⃣ Task Queues (WAITING AREA)

// When async work finishes, callbacks wait in queues.

// There are 2 queues:
// 🟡 1. Macrotask Queue (NORMAL queue)

// Contains:

// setTimeout

// setInterval

// setImmediate

// DOM events

// Example:

// setTimeout(() => console.log("Timeout"), 0);

// 🔵 2. Microtask Queue (HIGH priority)

// Contains:

// Promise.then

// Promise.catch

// Promise.finally

// queueMicrotask

// Example:

// Promise.resolve().then(() => console.log("Promise"));

// 6️⃣ Event Loop (THE BOSS)

// The Event Loop constantly checks:

// Is Call Stack empty?
//    YES →
//        Run ALL Microtasks
//        Then run ONE Macrotask
//    NO →
//        Wait


// ⚠️ Microtasks ALWAYS run before macrotasks.

// 7️⃣ FULL DIAGRAM (IMPORTANT)
//         ┌──────────────┐
//         │   Call Stack │
//         └──────▲───────┘
//                │
//         ┌──────┴───────┐
//         │  Event Loop  │
//         └──────▲───────┘
//                │
//    ┌───────────┴───────────┐
//    │                       │
// ┌──┴─────────┐     ┌───────┴────────┐
// │ Microtask  │     │ Macrotask      │
// │ Queue      │     │ Queue          │
// │ (Promise)  │     │ (setTimeout)   │
// └────────────┘     └────────────────┘

// 8️⃣ Step-by-step Example (VERY IMPORTANT)
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");

// Execution steps
// Step 1: Sync code → Call Stack
// Start
// End

// Step 2: Promise → Microtask Queue
// Promise

// Step 3: setTimeout → Macrotask Queue
// Timeout

// ✅ Final Output
// Start
// End
// Promise
// Timeout

// 9️⃣ WHY Microtask runs first (IMPORTANT)

// Because:

// Promises represent important state changes

// JS guarantees they run before timers

// 🔟 Another Example (multiple microtasks)
// console.log("A");

// Promise.resolve().then(() => console.log("B"));
// Promise.resolve().then(() => console.log("C"));

// setTimeout(() => console.log("D"), 0);

// console.log("E");

// Output:
// A
// E
// B
// C
// D

// 1️⃣1️⃣ Mental Model (SUPER SIMPLE)

// Think like this:

// Call Stack → Doing work

// Microtask Queue → Urgent work

// Macrotask Queue → Normal work

// Event Loop → Manager

// 1️⃣2️⃣ Java Comparison (FOR YOU)
// JavaScript	Java
// Call Stack	Thread stack
// Event Loop	Executor
// Microtask	Completion callbacks
// Macrotask	Scheduled tasks
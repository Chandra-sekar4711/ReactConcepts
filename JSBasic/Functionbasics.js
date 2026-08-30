//Hoisting
//Hoisting is JavaScript’s behavior of moving declarations to the top of their scope before code execution.
m1();  //--->calls in normal function
//m2();  //---->call error -->no hoisting


//create an function
function m1()
{
    console.log("Normal function");
    
}

const m2 = function ()
{
    console.log("normal function stored in variable");
    
}

const arrowfun = () =>{ console.log("Arrow function");
}

//can set defaul parameter 

function greet(name = "Guest") {
  console.log("Hello", name);
}

greet("chandrasekar");
greet();

console.log("//***************************************     HIGHER ORDER FUNCTION  *************************** */");
//A Higher-Order Function is a function that takes one or more functions as arguments or returns a function.

// 1)Accpt fun as argument
function hf1(fun1)
{
    fun1();
}

function fun1()
{
 console.log("2");
}

const result = hf1(fun1)

//Return Function as A  argument along with closure 

const m3 = function (start)
{
      const add = (end) =>{
         return start+end;
     }
     return add;
}

const res = m3(2);
const res11 = res(2);
console.log(res11);


console.log("//***********************************     CLOSURE ****************************************/");

//A closure is when a function remembers variables from its outer scope, even after the outer function has finished executing.
function multiplier(factor) {
  return function (num) {
    return num * factor;
  }
}

const double = multiplier(2);
console.log(double(5)); // 10


//Why not just pass both numbers every time?

function add(a, b) {
  return a + b;
}

console.log(add(2, 5)); // 7
// ✅ Works fine.

// But closures add a layer of power:

// You can pre-configure a function with some data

// Then reuse it multiple times without repeating the configuration

// Example:

const double1 = multiplier(2);
const triple = multiplier(3);

console.log(double1(5)); // 10 
console.log(double1(7)); // 14
console.log(triple(5)); // 15


console.log("*********************************  CALL BACK FUNCTION  **************************************");

//A callback function is a function that is passed as an argument to another function and is executed later, usually after some operation completes.
//Correct — callbacks exist specifically to handle "notify me later" for async work. Normal functions don't need this at all; they just return directly like Java.
//Example 1 

function greet1(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {                              // sayBye is a callback function 
    console.log("Goodbye!");
}

greet1("John", sayBye);


//Example 2 uses in asyn way 

console.log("Star");

setTimeout(function(){console.log("printed After 2 Sec")},2000);  // ==>here function is  a callback function

console.log("End");

// ### JavaScript Event Loop — Simple Notes



// ### JavaScript Async + Event Loop — Simple Notes

// * Normal JavaScript code runs on the **JS thread**.
// * When an **async operation** starts, the actual waiting/work is handled by the **runtime/environment** (browser or Node.js). Don't think of every async operation as literally creating a new JS thread.
// * JavaScript does **not wait** for the async operation. It continues executing other code.
// * When an async operation finishes, its **callback becomes ready** and is placed into the appropriate **queue**.
// * The **Event Loop** keeps checking whether the JS thread is free and whether callbacks/tasks are ready.
// * If the JS thread is free, the Event Loop allows a ready callback/task to run on the JS thread.
// * If the JS thread is busy, the callback/task waits until the JS thread becomes free.
// * If multiple async operations finish at different times, their callbacks can become ready in a different order from the order in which they started.

// ### Simple flow

```text
Normal JS
   ↓
Start async operation
   ↓
JS continues running
   ↓
Async operation finishes
   ↓
Callback/task becomes ready
   ↓
Queue
   ↓
Event Loop checks
   ↓
Is JS thread free?
   ↓
YES
   ↓
Run callback on JS thread
```

// ### Important

```text
Async operation ≠ automatically a new JavaScript thread

JavaScript execution → JS thread

Async work/waiting → handled by Browser/Node.js runtime

Callback execution → comes back to JS thread
```

// ### Easy sentence to remember

**"JavaScript starts the async work, continues running, and when the async work is ready, the Event Loop eventually brings the callback/task back to the JS thread when it is free."**


```text
JS Thread        Async/Runtime        Callback Queue
   |                   |                    |
   |-- start async --> |                    |
   |                   |-- task running --> |
   |                   |                    |
   |  JS is free       |                    |
   |                   |-- still running   |
   |                   |-- still running   |
   |                   |                    |
   |                   |-- task finished -->|
   |                                        |
   |<----------- callback ------------------|
   |                                        |
   |-- execute callback ------------------->|
```

// ### Important

// A callback runs only when **both** are true:

```text
1. Async task is finished / callback is ready
2. JS thread is free
```

// If async task is still running:

```text
JS thread = FREE
Async task = NOT FINISHED

→ Callback waits
```

// If async task is finished but JS is busy:

```text
JS thread = BUSY
Async task = FINISHED

→ Callback waits
```

// If both are ready:

```text
JS thread = FREE
Async task = FINISHED

→ Event Loop sends callback to JS thread
→ Callback executes
```

// ### Key idea

// **Event Loop does not wait for the async task.**

// It keeps checking:

```text
"Is the callback ready?"
        +
"Is the JS thread free?"
        ↓
      YES
        ↓
   Run callback
```


console.log("*********************************  PROMISE (Resolve,Reject) **************************************");
//return inside .then() does NOT mean “return to caller”
//It means “pass value to next .then()”

//we have callback function(Paasing async fun for later execution) but it is not good coz it is called callback hell so we use promise to avoid callback hell.That is the reason for Promise /

function checkage(age)
{
    return new Promise((resolve,reject)=>
    {
         if(age>18)
         {
           resolve("ready to vote");
            
         }
         else{
            reject("Under Age");
            
         }
    })
}

//.then() and .catch() always return a Promise,
//never the actual value.
checkage(30).then(n =>{ console.log(n); return n}).then(n1=>{console.log(n1); return n1}).catch(reject=> console.log(reject));


 console.log("********************************  //Async and Await  ******************************************");
 console.log("******** Async & Await ********");

/*
IMPORTANT:
- Async function ALWAYS returns a Promise
- Returned value is automatically wrapped using Promise.resolve(value--> 10)
*/

async function f1(number) {
  if (number > 10) {
    return 10;     // Promise.resolve(10)
  } else {
    return 0;      // Promise.resolve(0)
  }
}

f1(12)
  .then(n => console.log(n))
  .catch(err => console.log(err));


// JavaScript is Single-Threaded
// await pauses ONLY the async function, NOT the main thread

async function run() {
  console.log("1");

  const a = await stepA();
  console.log("2", a);

  const b = await stepB();   //==>Here await is useless coz await always waits for promise not for timeout
     console.log("3", b);    //  so that functionStepB  must be asyn so that it return promise and await is useful


  
}

run();
console.log("END");


async function stepA() {
  console.log("A-start");

  setTimeout(100000);    //it doent not delay anything and it doesnt return promise  but overall StepA is async so it return promise definitely
  console.log("A-end");
  return "RESULT_A";
}

 function stepB() {
   setTimeout(100000); 
}


/*
fetch() returns a Promise IMMEDIATELY (receipt), not the result.
await does NOT stop fetch().
await pauses ONLY the async function until the Promise resolves.
Other code continues executing.
*/


// ❌ SLOW (SEQUENTIAL ASYNC)
async function slow() {
  await fetchA();
  await fetchB();
  await fetchC();
  // Total time = A + B + C
}


// ✅ FAST (PARALLEL ASYNC)
async function fast() {
  const p1 = fetchA();
  const p2 = fetchB();
  const p3 = fetchC();

  await p1;
  await p2;
  await p3;
  // Total time = max(A, B, C)
}


// First-class functions means:

// Functions are treated like any other value (like numbers, strings, or objects).

// If a language supports first-class functions, then you can:

// ✅ Store a function in a variable.
// ✅ Pass a function as an argument.
// ✅ Return a function from another function.
// ✅ Store a function in an object or array.

// JavaScript supports all of these, so functions are first-class


// ===================================================================
// ===================================================================
// ===================================================================

// # Promise and Async/Await Understanding Notes

// ## 1. Promise

// A **Promise** is a JavaScript object/container that represents the future result of an asynchronous operation.

// A Promise can have three states:

// 1. **Pending**

//    * Operation is still running.

// 2. **Fulfilled (Resolved)**

//    * Operation completed successfully.
//    * Contains the final value.

// 3. **Rejected**

//    * Operation failed.
//    * Contains the error reason.

// Example:

// ```javascript
// function getUser() {

//     return new Promise((resolve, reject) => {

//         let success = true;

//         if(success) {
//             resolve("John");
//         }
//         else {
//             reject("User not found");
//         }

//     });

// }
// ```

// Consume Promise:

// ```javascript
// getUser()
// .then(user => {
//     console.log(user);
// })
// .catch(error => {
//     console.log(error);
// });
// ```

// Flow:

// ```
// resolve(value)
//       |
//       ↓
//    .then()

// reject(error)
//       |
//       ↓
//    .catch()
// ```

// ---

// # 2. Promise in Real Applications

// In real applications, we usually do not manually create Promises everywhere.

// Most asynchronous APIs already return Promises.

// Examples:

// ```javascript
// fetch("/users")

// axios.get("/users")

// database calls
// ```

// These methods internally return Promises.

// We manually create Promises only when we create our own asynchronous operation.

// ---

// # 3. Problem with Promise Chaining

// Multiple asynchronous calls using `.then()` can become difficult to read.

// Example:

// ```javascript
// getUser()
// .then(user => getOrders(user))
// .then(order => getPayment(order))
// .catch(error => console.log(error));
// ```

// ---

// # 4. Async/Await

// `async/await` is a cleaner syntax to work with Promises.

// The above code becomes:

// ```javascript
// async function process(){

//     try {

//         const user = await getUser();

//         const order = await getOrders(user);

//         const payment = await getPayment(order);

//     }
//     catch(error){

//         console.log(error);

//     }

// }
// ```

// Important:

// * Async/await does not replace Promises.
// * Async/await works on top of Promises.

// Internally:

// ```
// Promise
//    |
//    ↓
// .then() / .catch()


// async/await
//    |
//    ↓
// Promise internally
// ```

// ---

// # 5. Async Function Always Returns Promise

// Any function declared with `async` always returns a Promise.

// Example:

// ```javascript
// async function test(){

//     return 10;

// }
// ```

// JavaScript internally converts it to:

// ```javascript
// function test(){

//     return Promise.resolve(10);

// }
// ```

// So:

// ```javascript
// const result = test();
// ```

// contains:

// ```
// result
//  |
//  ↓
// Promise
//  |
//  ↓
// 10
// ```

// Not directly:

// ```
// result = 10
// ```

// ---

// # 6. Async Function Calling Another Async Function   [[[[[****************************Important******************************]]]]]

// Example:

// ```javascript
// async function getUser(){

//     return "John";

// }


// async function run(){

//     const user = await getUser();

//     return user;

// }
// ```

// Execution flow:

// ## Step 1

// Calling:

// ```javascript
// getUser()
// ```

// returns:

// ```
// Promise
//  |
//  ↓
// "John"
// ```

// because `getUser()` is async.

// ---

// ## Step 2

// Inside `run()`:

// ```javascript
// const user = await getUser();
// ```

// Before await:

// ```
// getUser()
//       |
//       ↓
// Promise("John")
// ```

// After await:

// ```
// user = "John"
// ```

// `await` extracts the resolved value from the Promise.

// ---

// ## Step 3

// Return from async function:

// ```javascript
// return user;
// ```

// Since `run()` is async:

// JavaScript converts:

// ```javascript
// return "John";
// ```

// into:

// ```javascript
// return Promise.resolve("John");
// ```

// Therefore:

// ```javascript
// run()
// ```

// returns:

// ```
// Promise("John")
// ```

// ---

// # 7. Important Difference: With and Without Await

// Without await:

// ```javascript
// const user = getUser();
// ```

// Result:

// ```
// user = Promise("John")
// ```

// Because we receive the Promise object.

// ---

// With await:

// ```javascript
// const user = await getUser();
// ```

// Result:

// ```
// user = "John"
// ```

// Because await extracts the value from the Promise.

// ---

// # 8. Important Rule

// Only the function marked with `async` automatically returns a Promise.

// Example:

// ```javascript
// function normal(){

//     return "John";

// }
// ```

// Returns:

// ```
// "John"
// ```

// ---

// ```javascript
// async function asyncFunction(){

//     return "John";

// }
// ```

// Returns:

// ```
// Promise("John")
// ```



// *********************************************************************
// CREATION OF OBJECTS
// *********************************************************************

// Object literal
let obj1 = {
  name: "chandrasekar",
  age: 26,
  job: "Software engineer"
};

// Object with method (normal function → uses `this`)
let obj2 = {
  name1: "Rajasekar",
  Job: "Teacher",
  Fun: function () {
    return `My name is ${this.name1} working as ${this.Job}`;
  }
};

// Object constructor
const obj3 = new Object();
obj3.laptop = "Hp";
obj3.Address = "Madurai";
obj3.pno = 9786807273;
obj3.favcolor = ["blue", "green", "red"];

// *********************************************************************
// ACCESS OBJECT PROPERTIES
// *********************************************************************

console.log(obj1.name);          // chandrasekar

const res = obj2.Fun();
console.log(res);

console.log(obj3.favcolor);

// *********************************************************************
// UPDATE / ADD PROPERTY
// *********************************************************************

// If key exists → value updated
obj3.laptop = "APPLE";

// If key does not exist → new entry added
obj3.price = 300000;

console.log(obj3);

// *********************************************************************
// DELETE PROPERTY
// *********************************************************************

delete obj3.Address;
console.log(obj3);

// *********************************************************************
// DESTRUCTURING
// *********************************************************************

const obj4 = {
  color: ["red", "Blue"],
  Job: ["Doctor", "Software engineer"],
  salary: {
    firstsalary: 20000,
    Highsalary: 1000000
  }
};

const {color,Job,salary} = obj4;

console.log(Job[1]);        // Software engineer
console.log(salary.Highsalary,salary.firstsalary);  // 20000

// *********************************************************************
// OBJECT MERGING USING SPREAD OPERATOR
// *********************************************************************
// A shallow copy creates a new object, but it does not fully duplicate nested objects.
// Primitive values → copied by value
// Objects / arrays (nested) → copied by reference
// So both the original and copied object share the same nested object in memory.

const ob1 = { pg: "balaji pg" ,color:{name:"red"}};
const ob2 = { rent: 10000 };

const obres = { ...ob1, ...ob2 }; // SHALLOW COPY

obres.pg = "telugu";
obres.color.name = "blue"

console.log(obres);
console.log(ob1.pg); // "balaji pg" ✅ original NOT affected coz primitive data copied by value 
console.log(ob1.color.name); //blue affected -->Object /Array copied by reference

// ❗ IMPORTANT
// Spread operator creates a SHALLOW COPY
// - Top-level properties are copied by value
// - Nested objects are copied by reference  -->so object referece affcts the original data

// *********************************************************************
// CONST OBJECT BEHAVIOR
// *********************************************************************

// `const` does NOT mean object is immutable
// It only means variable reference cannot be reassigned

const obb1 = { School: "Yuva Bharathi" };
obb1.School = "Vijay vidhayalaya"; // ✅ allowed
console.log(obb1);

// obb1 = { School: "Sri Joyathi vidhyalaya" }; // ❌ NOT allowed

// *********************************************************************
// DEEP COPY
// *********************************************************************

const obj11 = { name: "John", address: { city: "NY" } };
const obj22 = structuredClone(obj11);

obj22.address.city = "LA";

console.log(obj11.address.city); // NY ✅ original NOT affected

// Primitive copy → value copied
// Object copy → reference copied(but in java it is also called value (value means address of he abj abc123))
// structuredClone → true deep copy

// *********************************************************************
// GETTERS AND SETTERS (ENCAPSULATION + VALIDATION)
// *********************************************************************

// ❌ WITHOUT SETTER → no validation
const userA = {
  age: 25
};

userA.age = -5;       // allowed ❌
userA.age = "hello";  // allowed ❌

// ✅ WITH GETTER & SETTER
const userB = {
  _age: 25, // convention: underscore = internal property

  get age() {
    return this._age;
  },

  set age(value) {
    if (typeof value !== "number") {
      throw new Error("Age must be a number");
    }
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
};

userB.age = 30;       // ✅ valid
// userB.age = -5;    // ❌ Error
// userB.age = "30";  // ❌ Error

// *********************************************************************
// ================================
// `this` IN JAVASCRIPT
// ================================

// 🔑 IMPORTANT BASICS
// ------------------
// Objects do NOT create scope
// Only functions and blocks (let / const) create scope
//
// `this` is NOT scope
// `this` is a runtime reference to an object

// *********************************************************************
// 1) NORMAL FUNCTION
// *********************************************************************

// In a normal function:
// - `this` is determined at CALL TIME
// - `this` refers to the object that calls the function

const user1 = {
  name: "John",
  showName: function () {
    console.log(this.name); // John ✅
  }
};

user1.showName();

// ❌ Without `this`
const user2 = {
  name: "John",
  showName: function () {
    console.log(name); // ReferenceError ❌
  }
};

// Objects do NOT create scope
// JavaScript actually sees:
//
// const user2 = { name: "John" };
// function showName() {
//   console.log(name);
// }

// *********************************************************************
// CORRECT MENTAL MODEL
// *********************************************************************

// object {
//   key: value,
//   key: function reference
// }

// *********************************************************************
// 2) ARROW FUNCTION
// *********************************************************************

// Arrow functions:
// - Do NOT have their own `this`
// - `this` is captured from where the arrow is CREATED
// - CALLER does NOT matter

// --------------------------------------------------
// Arrow as object method ❌
// --------------------------------------------------

const user3 = {
  name: "John",
  show: () => {
    console.log(this.name);
  }
};

//user3.show(); // undefined ❌

// Why?
// - Arrow ignores user3
// - Captures `this` from global scope
// - window.name ≠ user3.name

// --------------------------------------------------
// Arrow inside NORMAL function ✅
// --------------------------------------------------

const user4 = {
  name: "John",
  show() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

user4.show(); // John ✅

// Why?
// - show() is a normal function
// - Called as user4.show() → this === user4
// - Arrow CAPTURES that `this`
// - Arrow uses it forever

// Arrow functions do NOT have their own `this`.
// `this` is NOT decided by who calls the function.
// Arrow functions CAPTURE `this` from where they are CREATED.

// --------------------------------------------------
// Arrow in global scope
// --------------------------------------------------

const arrow = () => {
  console.log(this);
};

arrow(); // window (browser) | {} (Node.js)

// *********************************************************************
// FINAL SUMMARY (MEMORIZE)
// *********************************************************************

// Normal Function:
// - `this` is dynamic
// - Decided by CALLER
// - user.fun() → this === user
//
// Arrow Function:
// - `this` is lexical
// - Decided at CREATION time
// - Caller does NOT matter
//
// Objects do NOT create scope
// `this` is NOT scope
// `this` is a runtime object reference


//=========================================================================


const a = [{name:"chandrasekar",age:27},{name:"rajasekar",age:25}]
const key = Object.keys(a);
console.log(key);
const value = Object.values(a);
console.log(value);
const entry = Object.entries(a);
console.log(entry);



// function Header({ name, address, empl }) {
//   const a = [
//     { name: 'chandrasekar', age: 27 },
//     { name: 'rajasekar', age: 25 },
//   ];

//   return (
//     <>
//       <h1>Header {name}</h1>
//       <h1>{address}</h1>
//       <h1>
//         {empl.map((n) => (
//           <h1 key={n.name}>
//             {n.name}
//             {n.age}
//           </h1>
//         ))}
//       </h1>
//       <h1>
//         {a.map((data, index) => (
//           <div key={index}>
//             {Object.entries(data).map(([key, value]) => {
//               <h1 key={key}>
//                 {key}
//                 {value}
//               </h1>;
//             })}
//           </div>
//         ))}
//       </h1>
//     </>
//   );
// }

// export default Header;

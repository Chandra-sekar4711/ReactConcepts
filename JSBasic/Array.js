// ***************************   Array  ************************************

//Creating Array
let a = [1,2,3,4,5,6,7];
console.log(a);

let a1 = new Array(11,22,33);
console.log(a1);

let a2 = new Array(5);
a2[0] = 100;
a2[1] = 200;
a2[2] = 300;
a2[3]={name:"chandrasekar",age:26}
a2[4]="winner"
console.log(a2);


//CRUD in Arrays

let arr = ["chandrasekar","rajasekar","balaji"]; //push ===> add element at last
arr.push("periyasami");
arr.push("Chitra");
arr.push("Shiva");
console.log(arr);

arr.unshift("shivs");
console.log(arr);   //unshift ===>  add element at first

arr.shift();   //Shift -->remove element at first
console.log(arr);

arr.pop();   //Pop -->remove element at Last
console.log(arr);

console.log(arr[arr.length-1]);  //get element in array

//delete item using splice
var t = [101,102,103,110,105]; 
t.splice(3,1)   //3 -->position , 1-->no of element to delete
console.log(t);

//update using splice
t.splice(3,0,104);
console.log(t);

// *****************   Array Destructure[left side Rest Operator ] *************
//Good question. This will not work:
//const [...rest, first] = arr1;

const [a11,b,...rem] = arr ;
console.log(a11);

const [q,w,e,r,tt=0] = t;
console.log(q,w,e,r,tt);

// *****************   Array Destructure [Right side Spread Operator] *************

//it is shallow copy cause it copies only the reference of the array not the value of the array
//"If spread (...) is only a shallow copy, why use it? Why not directly use the . operator to update the value?"
//The answer: In React, we usually should not directly modify the existing object. We create a new object using spread so React can detect the change.
//No, { ...user } itself does not store the reference of user.
//it creates a new object and copies the properties from user into that new object.
const spredoperator = [...arr,1,2,3]
console.log(spredoperator);


const arr1 = [1, 2, 3];
const [first] = arr1;
//first = 100; // ❌ ERROR! Cannot reassign const
//const arr1 = [1, 2, 3];
//const [first] = arr1; means ===>  const first = arr1[0];
//first will contain only the first element, which is 1.

// But this works:
let [first1] = arr1;
first1 = 100; // ✅ OK, but doesn't change arr
console.log(first1); // [1, 2, 3] unchanged

//Iterating Array
const aobj = ["one","two","three"]
aobj.forEach(n=>console.log(n));

for(var i in aobj)
{
    console.log(i+"printed");
    
}

//Array of Objects 
var aobjs = [{id:1,name:"chandrasekar"},{id:2,name:"Raja"},{id:3,name:"Balaji"}]
var aobjsres = aobjs.map(n=>{return n.name.concat("Periyasami")})
console.log(aobjsres);


//=====================================================================


// "Java Streams are lazy and pipeline-based, so each element passes through map, filter, 
// and then the terminal operation before the next element is processed. 
// JavaScript array methods like map() and filter() are eager; map() first creates a new array, 
// and then filter() processes that new array."










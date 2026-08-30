// *************************************    let vat and const    ********************************************** 

var a=10; //global scope  means functional scope we can use var inside function anywhere and it is reassignable 
if(true)
{
    var a=30;
    console.log(a);   
}
console.log(a);

let b=100
if (true) {     //let block scope inside function
   let b=1000;
    console.log(b);
}
  console.log(b);
  console.log(b=10);
  
  const c = 101;  //block scope same as let but value cannot be changed 
  if (true) { 
    console.log(c);
  }
  console.log(c);
  //console.log(c=102);

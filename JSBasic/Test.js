
const a = [10,20,30,40,50,60,70];
console.log(a);

const data = [
  {
    name: "Chandra",
    skills: {"course":"Rect","Price":10000}
  },
  {
    name: "Balaji",
    skills: {"course":"Java","Price":20000}
  }
];

data.forEach(n=>{
    Object.entries(n.skills).forEach(([key,value])=>{console.log(key);
    })
});










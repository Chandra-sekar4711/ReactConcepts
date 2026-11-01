const arr = [10, 20, 30, 40, 50];
arr.forEach(n=>console.log(n)
)

const users = [
  { name: "Chandra", age: 27 },
  { name: "Balaji", age: 30 },
  { name: "Ravi", age: 25 },
  { name: "Kumar", age: 35 }
];

users.forEach(n=>console.log(n.name)
);

const fil = users.filter(n=>n.age>25)
console.log(fil);

const user = {
  name: "Chandra",
  age: 27,
  city: "Chennai"
};


var val = Object.values(user);
console.log( val);

user.address = "Guindy";
console.log(user);

user.age = 28;
console.log(user);

var keyy = Object.keys(user);
console.log(keyy);
console.log("***********************************");

var entries = Object.entries(user);
console.log(entries);


Object.entries(user).forEach(([key,value])=>{console.log(key)});


const userdetails = {
  name: "Chandra",
  details: {
    age: 27,
    city: "Chennai",
    department: "IT"
  }
};

let {age,city,department} = userdetails.details;
console.log(city);

const company = {
  name: "ABC",
  employees: [
    {
      name: "Chandra",
      skills: ["Java", "React"]
    },
    {
      name: "Balaji",
      skills: ["Java", "Angular"]
    }
  ]
};
console.log("********************");

var val = company.employees.map(n=>{return Object.values(n)});
console.log(val);


const companyy = {
  name: "TechCorp",
  departments: [
    {
      name: "IT",
      employees: [
        {
          name: "Chandra",
          skills: ["Java", "React"]
        }
      ]
    },
    {
      name: "HR",
      employees: [
        {
          name: "Bala",
          skills: ["Recruitment", "Communication"]
        }
      ]
    }
  ]
};

var result = companyy.departments.map(n=>Object.values(n.employees.map(n1=>n1)));
result.forEach(n => {
  n.forEach(n1 => {
    console.log(n1.name);
  });
});


import axios from "axios";
import { useEffect, useState } from "react";
import {Table} from "./Table";

export function Header(prop) {
  const [state, setState] = useState(0);
  
  const [data1, setName] = useState({ name: "", username: 0,email:"" });
  console.log(data1);
  
  const [fetscheddata, setfetscheddata] = useState([]);
  console.log(fetscheddata);

  const { name, age, city } = prop.obj;
  console.log("printing");

  function handleChange(event) {
    const {name,value} = event.target;
    setName({ ...data1, [name]: value});
  }

  const savedata = (data1) => {
     var response = axios.post("https://jsonplaceholder.typicode.com/users",data1).then((response)=>{
      console.log(response);
       setfetscheddata((prev) => [...prev, response.data]);
    
    })
  }
  

  useEffect(() => {
    console.log("useEffect called");
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setfetscheddata(response.data);
    });
  }, [state]);

  return (
    <>
      {prop.arr.map((n) => n)}
      <div>{name}</div>
      {prop.userData.map((n, key) => {
        return (
          <div key={key}>
            {Object.values(n).map((value, index) => (
              <span key={index}>{value} </span>
            ))}
          </div>
        );
      })}

      <button onClick={() => setState(state + 1)}>Click Me</button>

      <div>
        <h3>Name:</h3>
        <input
           name="name"
          placeholder={"name"}
          value={data1.Name}
          onChange={(e) => handleChange(e)}
        />
         <h3>Age:</h3>
        <input
        name="username"
          placeholder={"username"}
          value={data1.Age}
          onChange={(e) => handleChange(e)}
        />
         <h3>Job:</h3>
        <input
          name="email"
          placeholder={"email"}
          value={data1.Job}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={()=>savedata(data1)}>Submit</button>
      </div>

        <Table data={fetscheddata} />
    </>
  );
}

import React, { useRef } from "react";
import { MainPage } from "./MainPage";
import { useState, useEffect, useContext } from "react";
import { Props } from "../Components/Props";
import Events from "../Components/Events";
import Table from "../Components/Table";
import Reducers from "../Components/Reducers.jsx";
import axios from "axios";
import { Form } from "react-router-dom";
import { contextdata } from "./MainPage.jsx";
import UseReferenceExample from "../Components/UseReferenceExample.jsx";

const Home = ({ children }) => {
  let arr = ["chandra","Raja","Balaji"];
  let obj = {name:"mano",age:20}
  let City = "Chennai";

  let [data,setdata] = useState({FirstName:"",LastName:"",Address:""})

  const onclickhandler = (e) =>{
      e.preventDefault();         
     console.log(data);
     setdata({FirstName:"",LastName:"",Address:""})

  }

   function onchangehandler(e)
  {
         const {name,value}  = e.target;
          setdata(prev => ({ ...prev, [name]: value })); 
           
  }

  return (
    <>
    <form onSubmit={onclickhandler}>
    <div>
             <label>FirstName : </label>
            <input type="text" style={{  border: "1px solid #ccc",}} name="FirstName" value={data.FirstName} onChange={((e)=>onchangehandler(e))}></input>
    </div>
    <div>
      <label>LastName : </label>
       <input type="text" style={{  border: "1px solid #ccc",}} name="LastName" value={data.LastName}  onChange={((e)=>onchangehandler(e))}></input>
    </div>
    <div>
      <label>Address : </label>
       <input  type="text" style={{  border: "1px solid #ccc",}} name="Address" value={data.Address}  onChange={((e)=>onchangehandler(e))}></input>
       
    </div>
       <Card arr={arr} obj={obj} city={City}><button type="submit">Click Me</button></Card>
    </form>
    <UseReferenceExample></UseReferenceExample>
    </>
  );
};

export { Home };

export const Card = (props) => {
  const {arr,obj,city,children} = props;
  return(
    <>
        {arr.map((n,id)=><h1 key={id}>{n}</h1>)}
        {Object.entries(obj).map(([keys,value])=>{return <h1 key={keys}>{keys}:{value}</h1>})}
        {city}
        <div> {children}</div>
       
    </>
  )

}

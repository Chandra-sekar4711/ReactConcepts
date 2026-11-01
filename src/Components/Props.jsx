import React from "react";
//we can pass string,bool, number, array, object, function as props to child component
//also we can pass props as a single object (child always receive prop in format of object) and destructure it in child component
//this is example of the above mentioned concepts
// //{
//     data:string,
//     arr:array,
//     obj:object
// }
//and destructuring the prop object in child component to get the values of data,arr,obj

function Props(prop) {
  console.log("Props component rendered");

  const { data, arr, obj, fun, children } = prop;

  const newChild = React.cloneElement(children, {
    onClick: fun,
  });

  console.log("array =>", arr);
  console.log("data =>" + data);
  console.log("obj =>", obj);

  return (
    <>
      <h2>{data}</h2>
      {arr.map((values) => (
        <p key={values}>{values}</p>
      ))}
      {Object.values(obj).map((value, index) => {
        return <p key={index}>Obj{value}</p>;
      })}
      {Object.entries(obj).map(([keys, value]) => {
        return (
          <p key={keys}>
            {keys}: {value}
          </p>
        );
      })}
      {newChild}
      <h1>
        ******************************************************************
      </h1>
    </>
  );
}

export { Props };

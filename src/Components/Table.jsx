import React from 'react';
import { useContext } from 'react';
import { contextdata } from '../Pages/MainPage'


export default function Table(prop) {

    const data = [];
    const {responsedata} = prop;
    console.log("Table component rendered");

    return (
        <>
        {data && <p>Welcome, {data}!</p>}
        <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                   
                </tr>
            </thead>

            <tbody>
                {
                    Object.entries(responsedata).map(([key,value])=>{
                        return(
                            <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h1>******************************************************************</h1>     
        </> 

    );
}
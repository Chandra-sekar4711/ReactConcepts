import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Header } from './Components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const arr = ["Boy","Girl,","Man","Woman"];
  const obj = {"name":"John", "age":30, "city":"New York"};
  const userData = [
    {id:1, name:"John", age:30},
    {id:2, name:"Jane", age:25},
    {id:3, name:"Bob", age:35},
    {id:4, name:"Alice", age:28}
  ];

  return (
   <>
   <Header arr={arr} obj={obj} userData={userData}/>
   </>
  )
}

export default App

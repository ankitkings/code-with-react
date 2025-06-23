import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title = {"Serolina"} name= {"Dhruv"} content={"THis is first cards. THis is first cardsTHis is first cardsTHis is first cardsTHis is first cardsTHis is first cardsTHis is first cardsTHis is first cardsTHis is first cards"}/>
      <Card title = {"Aarju"} name= {"AAshi"} content={"THis is first cards. THis is first cardsTHis is first cardsTHis is first cardsTHis is second cardsTHis is second cardsTHis is second cardsTHis is second cardsTHis is second cards"}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App

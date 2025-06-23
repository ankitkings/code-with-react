import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function IncreaseCount(){
    if (count<20) setCount(count+1)
  }


  function DecreaseCount(){
    if (count>0) setCount(count-1)
  }
  return (
    <>
      <div className="card">
        <p>count is {count}</p>
        <button onClick= {IncreaseCount}>
          INCREASE
        </button>
        <button onClick= {DecreaseCount}>
          DECREASE
        </button>
      </div>
    </>
  )
}

export default App

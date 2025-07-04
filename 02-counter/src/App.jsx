import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    // console.log(`value added ${Math.random()}`)
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

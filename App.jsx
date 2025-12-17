import { useState } from 'react'
import './App.css'
function App() {
  //utilizing the useState hook for
  //  updating the values in react application
  const [count, setCount] = useState(0)
  return (
    <>
    <div id="box">
      <h1>Counter Application</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount((count+1))}>Increase</button>
      <button id="decrease" onClick={()=>setCount((count-1))}>Decrease</button>
      <button id="reset"onClick={()=>setCount(0)}>Reset</button>
    </div>
    </>
  )
}
export default App

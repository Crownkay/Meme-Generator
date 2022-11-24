import React, {useState} from "react"
import Count from "./Count"

export default function Counter(){
  const [answer, setAnswer] = useState(0)

  function increment(){
    setAnswer(prevAnswer => prevAnswer + 1)
  }
  function decrement(){
    setAnswer(prevAnswer => prevAnswer - 1)
  }
  return (
    <div>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <Count number={answer} />
    </div>
  )
}
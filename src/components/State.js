import React, {useState} from "react"

function State(){
 const [count, setCount] = useState(0)
  function handlePlus(){
    setCount( prevCount => prevCount + 1) 
  }
  function handleMinus(){
    setCount( prevCount => prevCount - 1) 
  }
  function handleReset(){
    setCount("0") 
  }

  const isGoingOut = true
  let date = new Date()
  let hour = date.toLocaleTimeString();
  let time = date.getHours()
  let today = date.toDateString()

  let answer 

  answer = time < 12 ? "Yes" : "No"

  return (
    <div className="state">
      <h2>Welcome today is {today}</h2>
      <h3>Do you feel like going out</h3>
      <p>{answer} the time is {hour}</p>
      <h3>{count}</h3>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default State;
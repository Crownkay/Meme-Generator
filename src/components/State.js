import React, {useState} from "react"

function State(){
  const [thingsArray, SetThingsArray] = useState(["Thing 1", "Thing 2"])
  function addItem (){
    SetThingsArray(prevThingsArray => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
  }
  const thingsElems = thingsArray.map(item => <p key = {item}>{item}</p>)
  return (
    <div>
      <button onClick={addItem}>Add item</button>
      {thingsElems}
    </div>
  )
}

export default State
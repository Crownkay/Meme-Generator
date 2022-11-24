import React,{useState} from "react";

export default function State(){
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

  function addItem(){
    setThingsArray(prevThings =>{
      return [...prevThings, `Thing ${prevThings.length + 1}`]
    })
  }

  const thingsElem = thingsArray.map(things => <p key = {things}>{things}</p>)

  return (
    <>
      <button onClick={addItem}>Add Item</button>
      {thingsElem}
    </>
  )
}
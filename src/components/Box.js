import React, { useState } from "react";
import Items from "../boxes";
import Boxes from "./Boxes";

export default function Box(props) {
  const [square, setSquare] = useState(Items);
  function toggle(id){
    setSquare(prevSquare => {
      return prevSquare.map((square) =>{
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squareElem = square.map((item) => {
    return (
      <Boxes key={item.id} on={item.on} handleClick={()=>toggle(item.id)} />
    );
  });
  return <main>{squareElem}</main>;
}

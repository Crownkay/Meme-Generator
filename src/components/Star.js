import React from "react"

export default function Star(props){

  return (
    <>
     <img src={props.isFilled} onClick={props.handleClick} alt="/" width="50px" height="50px" />
    </>
  )
}
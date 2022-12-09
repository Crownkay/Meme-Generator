import React from "react";

export default function Boxes(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  
  return <div className="box" style={styles} onClick={props.handleClick}></div>;
}
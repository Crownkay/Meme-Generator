import React, { useState } from "react";

export default function Joker(props) {
  const [isShown, setIsShown] = useState(false);

  function toggle() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      {<button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>}
      <hr />
    </div>
  );
}

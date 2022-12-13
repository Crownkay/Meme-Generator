import React, { useState, useEffect } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      console.log("effect rendered");
    },
    [count]
  );

  return (
    <div>
      <h3>Count {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
}

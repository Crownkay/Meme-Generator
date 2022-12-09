import React, { useState } from "react";

export default function AddItem() {
  const [thingsArr, setThingsArr] = useState([]);

  function addItem() {
    setThingsArr((prevThings) => [
      ...prevThings,
      `Thing ${prevThings.length + 1}`,
    ]);
  }
  const thingsElem = thingsArr.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <>
      <button onClick={addItem}>Add Things</button>
      {thingsElem}
    </>
  );
}

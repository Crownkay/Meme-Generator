import React, {useState} from "react";
import TrackWindow from "./TrackWindow";

function WindowTracker() {
  const [show, setShow] = useState(true)

  function handleToggle(){
    setShow(prevShow => !prevShow)
  }


  return (
    <div className="windowTracker-container">
      <button className="windowTracker-container_button"
      onClick={handleToggle}
      >
        Toggle WindowTracker
      </button>
      {show && <TrackWindow />}
    </div>
  );
}

export default WindowTracker;

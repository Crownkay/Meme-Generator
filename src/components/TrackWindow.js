import React, { useState, useEffect } from "react";

function TrackWindow() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    // clean up function
    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return <h1>Window width: {windowWidth}</h1>;
}

export default TrackWindow;

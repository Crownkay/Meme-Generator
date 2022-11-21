import React, {useState} from "react";
import memeData from "../memeData"

function Input() {
  const [memeImg, setMemeImg] = useState("");
  function getMemeImg(){
    const memesArray = memeData.data.meme
    const randomNumber = Math.floor(Math.random() * memesArray.length)
   setMemeImg(memesArray[randomNumber].url)
  }

  return (
    <section >
      <p>{memeImg}</p>
      <div className="form">
        <input className="input--text" type="text" placeholder="shut up" />
        <input className="input--text" type="text" placeholder="take the money" />
      <button className="input--button" onClick={getMemeImg}>Get a new meme image 🖼 </button>
      </div>
      <div className="meme--img">
        <img src={memeImg} alt="/"/>
      </div>
      
    </section>
  );
}

export default Input;

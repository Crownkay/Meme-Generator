import React, {useState} from "react";
import memeData from "../memeData"

function Input() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })

  const [allMemeImage, setAllMemeImage] = useState(memeData)
  // const [memeImg, setMemeImg] = useState("");
  function getMemeImg(){
    const memesArray = memeData.data.meme
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
   setMeme(prevMeme =>{
    return ({
      ...prevMeme, randomImage: url
    })
   })
  }

  return (
    <section >
      <div className="form">
        <input className="input--text" type="text" placeholder="shut up" />
        <input className="input--text" type="text" placeholder="take the money" />
      <button className="input--button" onClick={getMemeImg}>Get a new meme image 🖼 </button>
      </div>
      <div className="meme--img">
        <img src={meme.randomImage} alt="/"/>
      </div>
      
    </section>
  );
}

export default Input;

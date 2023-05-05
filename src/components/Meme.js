import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [memeText, setMemeText] = useState({ top: "", bottom: "" });
  const [allMemeImages, setAllMemeImages] = useState(memesData);
  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  console.log(memeText);

  const handleTextChange = (type) => {
    return ({ target: { value } }) => {
      //
      setMemeText((v) => ({
        ...v,
        [type]: value,
      }));
    };
  };

  // const handleNumChange = (type) => {
  //   return ({ target: { value } }) => {
  //     setMemeNum((v) => ({
  //       ...v,
  //       [type]: value,
  //     }));
  //   };
  // };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-inputs"
          placeholder="Top text"
          value={memeText.top}
          onChange={handleTextChange("top")}
        />

        <input
          type="text"
          className="form-inputs"
          placeholder="Bottom text"
          value={memeText.bottom}
          onChange={handleTextChange("bottom")}
        />

        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>

        <img src={meme.randomImage} className="meme-image" alt="" />
      </div>
    </main>
  );
}

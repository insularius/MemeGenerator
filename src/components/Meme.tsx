import React, { FormEvent, useState } from "react";
import memesData from "../memesData";

export default function Meme(this: any) {
  const [meme, setMeme] = useState({
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

  const handleTextChange = (type: "top" | "bottom") => {
    return ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setMemeText((a) => ({
        ...a,
        [type]: value,
      }));
    };
  };

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    console.log(memeText);
  };

  const handleReset = () => {
    setMemeText({
      top: "",
      bottom: "",
    });
  };

  return (
    <main>
      <form onSubmit={handleSumbit} noValidate>
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
          <button className="form-button" onClick={handleReset}>
            Clear
          </button>
          <button className="form-button">Sumbit</button>
          <button className="form-button" onClick={getMemeImage}>
            Get a new meme image
          </button>
          <div className="meme-container">
            <div className="text-top">{memeText.top}</div>
            <img src={meme.randomImage} className="meme-image" alt="" />
            <div className="text-bottom">{memeText.bottom}</div>
          </div>
        </div>
      </form>
    </main>
  );
}

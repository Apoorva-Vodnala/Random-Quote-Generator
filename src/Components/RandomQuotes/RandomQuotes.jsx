import React, { useState } from "react";
import "./RandomQuotes.css";
import reload1 from "../Assets/reload1.png";
import twitter1 from "../Assets/twitter1.png";
const RandomQuotes = () => {
  let quotes = [];
  


  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Geothe",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };
  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };


  loadQuotes();
  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <img
              src={reload1}
              onClick={() => {
                random();
              }}
              alt=""
            />
            <img
              src={twitter1}
              onClick={() => {
                twitter();
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuotes;

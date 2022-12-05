import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "0️⃣": "zero",
  "😊": "smiling",
  "1️⃣": "one",
  "😳": "disbelief",
  "2️⃣": "two",
  "😔": "sad",
  "3️⃣": "three",
  "❤️": "love",
  "4️⃣": "four",
  "😑": "annoyance",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiOnClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
            onClick={() => emojiOnClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

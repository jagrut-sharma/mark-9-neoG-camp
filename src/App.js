import "./styles.css";
import React, { useState } from "react";

const songsDB = {
  Chill: [
    { song: "Zinda", movie: "Lootera" },

    { song: "Kun Faaya Kun", movie: "Rockstar" },

    { song: "Kya Karoon", movie: "Wake up Sid" }
  ],

  Romantic: [
    { song: "Te Amo", movie: "Dum Maaro Dum" },

    { song: "Saiyyan", movie: "Jhoomo re" },

    { song: "Ek ajnabee haseena se", movie: "Ajnabee" }
  ],

  Travel: [
    { song: "Dil Dhadakne Do", movie: "Zindagi Na Milegi Dobara" },

    { song: "Travel Medley", movie: "2 Strings" },

    { song: "Chala Jaata hoon", movie: "Mere Jeevan Saathi" }
  ],

  Fun: [
    { song: "Buddhu Sa Man", movie: "Kapoor & Sons" },

    { song: "Dil Chahta Hai", movie: "Dil Chahta Hai" },

    { song: "Hai Junoon", movie: "New York" }
  ],

  Sad: [
    { song: "Channa Mereya", movie: "Ae Dil Hai Mushkil" },

    { song: "Tujhse Naraz Nahi Zindagi", movie: "Masoom" },

    { song: "Hum Na Samjhe The", movie: "Gardish" }
  ]
};

const songsMood = Object.keys(songsDB);
console.log(songsMood);

export default function App() {
  const [mood, setMood] = useState("Chill");

  function clickHandler(button) {
    console.log(button);
  }

  return (
    <div className="App">
      <h1 className="title">🎧 Sweet Music 🎼</h1>
      <p className="para">
        Here is some of the greatest music to listen to based on your mood:
      </p>
      <main>
        {songsMood.map((mood) => (
          <button className="btn" key={mood} onClick={() => clickHandler(mood)}>
            {mood}
          </button>
        ))}
      </main>

      <div className="container">
        <p></p>
      </div>
    </div>
  );
}

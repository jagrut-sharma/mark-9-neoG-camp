import "./styles.css";
import React, { useState } from "react";

const songsDB = {
  Chill: [
    {
      song: "Zinda",
      singer: "Amit Trivedi",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/vlSm-Lootera.jpg",
      link: "https://www.youtube.com/watch?v=OWtDLQY_p4Y"
    },

    {
      song: "Kun Faaya Kun",
      singer: "Javed Ali & Mohit Chauhan",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/U2_n-Rockstar.jpg",
      link: "https://www.youtube.com/watch?v=0RDI9CMilhk"
    },

    {
      song: "Kya Karoon",
      singer: "Clinton Cerejo",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/rNbf-Wake+up+sid.jpg",
      link: "https://www.youtube.com/watch?v=fLSzQSeZ-ZY"
    }
  ],

  Romantic: [
    {
      song: "Te Amo",
      singer: "Ash King",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/hK52-Dum+maaro+dum.jpg",
      link: "https://www.youtube.com/watch?v=9Ugw2b7HvVI"
    },

    {
      song: "Saiyyan",
      singer: "Kailash Kher",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/IXgV-Kailasa-jhoomo_re.jpg",
      link: "https://www.youtube.com/watch?v=TuUVVKVdZm4"
    },

    {
      song: "Ek ajnabee haseena",
      singer: "Gaurav Dagaonkar",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/sfNv-jnabee.jpg",
      link: "https://www.youtube.com/watch?v=e5BbHPHpbvE"
    }
  ],

  Travel: [
    {
      song: "Dil Dhadakne Do",
      singer: "Farhan Akhtar",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/CmUr-ZNMD.jpg",
      link: "https://www.youtube.com/watch?v=PyTaSNvflM0"
    },

    {
      song: "Travel Medley",
      singer: "2 Strings",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/a-_q-travel+medley.jpg",
      link: "https://www.youtube.com/watch?v=2QrOWaWS4tw"
    },

    {
      song: "Chala Jaata hoon",
      singer: "Sanam",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/1nXo-Mere+Jeevan+Saathi.jpg",
      link: "https://www.youtube.com/watch?v=jrOIZA-G-z4"
    }
  ],

  Fun: [
    {
      song: "Buddhu Sa Man",
      singer: "Armaan Malik",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/fGha-Kapoor+and+Sons.jpg",
      link: "https://www.youtube.com/watch?v=Zo4WsI14s3g"
    },

    {
      song: "Dil Chahta Hai",
      singer: "Shankar Mahadevan",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/PEmT-Dil+Chahta+Hai.jpg",
      link: "https://www.youtube.com/watch?v=HoDgYV1NzAI"
    },

    {
      song: "Hai Junoon",
      singer: "KK",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/CTGf-New_york.jpg",
      link: "https://www.youtube.com/watch?v=_hEgNwyHlAU"
    }
  ],

  Sad: [
    {
      song: "Channa Mereya",
      singer: "Arijit Singh",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/72g--Ae+dil+hai+mushkil.jpg",
      link: "https://www.youtube.com/watch?v=bzSTpdcs-EI"
    },

    {
      song: "Tujhse Naraz Nahi",
      singer: "Lata Mangeshkar",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/-zpL-masoom.jpg",
      link: "https://www.youtube.com/watch?v=b04C6hKGLXA"
    },

    {
      song: "Hum Na Samjhe The",
      singer: "SP Balasubrahmanyam",
      image:
        "https://uploads.codesandbox.io/uploads/user/f37537a7-d74e-4eed-91a0-6f8ae84d66b0/uz49-gardish-1.jpg",
      link: "hhttps://www.youtube.com/watch?v=lqwMs3Swcls"
    }
  ]
};

const songsMood = Object.keys(songsDB);
// console.log(songsMood);

export default function App() {
  const [mood, setMood] = useState("Chill");

  function clickHandler(mood) {
    setMood(mood);
  }

  return (
    <div className="App">
      <h1 className="title">🎧 Sweet Music 🎼</h1>
      <p className="para">
        Here is some of the greatest music to listen to based on your mood:
      </p>
      <p style={{ fontSize: "smaller" }}>Click on the songs to listen</p>
      <main>
        {songsMood.map((mood) => (
          <button className="btn" key={mood} onClick={() => clickHandler(mood)}>
            {mood}
          </button>
        ))}
      </main>

      <section className="container-primary">
        {songsDB[mood].map((currentSong) => (
          <div className="container-secondary">
            <a
              className="link"
              target="_blank"
              href={currentSong.link}
              rel="noreferrer"
              key={currentSong.song}
            >
              <div className="container-tertiary">
                <img className="poster" src={currentSong.image} alt="" />
                <p>
                  <span>Song Name:</span> {currentSong.song}
                </p>
                <p>
                  <span>Singer:</span> {currentSong.singer}
                </p>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

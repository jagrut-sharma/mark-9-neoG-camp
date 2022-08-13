import "./styles.css";

export default function App() {
  function clickHandler(button) {
    console.log(button);
  }

  return (
    <div className="App">
      <h1 className="title">
        <span>🎧</span> Sweet Music <span>🎼</span>
      </h1>
      <p className="para">Here is some of the great music to listen to:</p>
      <button
        style={{ cursor: "pointer" }}
        className="btn"
        onClick={() => clickHandler("chill")}
      >
        Chill
      </button>
      <button
        style={{ cursor: "pointer" }}
        className="btn"
        onClick={() => clickHandler("romantic")}
      >
        Romantic
      </button>
      <button
        style={{ cursor: "pointer" }}
        className="btn"
        onClick={() => clickHandler("travel")}
      >
        Travel
      </button>
      <button
        style={{ cursor: "pointer" }}
        className="btn"
        onClick={() => clickHandler("sad")}
      >
        Sad
      </button>
      <button
        style={{ cursor: "pointer" }}
        className="btn"
        onClick={() => clickHandler("fun")}
      >
        Fun
      </button>

      <div className="container">
        <p></p>
      </div>
    </div>
  );
}

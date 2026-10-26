// src/App.jsx
import "./App.css";

import discordLogo from "./assets/discord-logo-white.png";

import menuIcon from "./assets/menu-icon.png";

//import heroImage from "./assets/hero.png";

import discordBackground from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={discordLogo} alt="Discord Logo" className="logo" />

        <img src={menuIcon} alt="Menu" className="menu-icon" />
      </header>

      <main className="hero">
        <h1>IMAGINE A PLACE...</h1>

        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <div className="buttons">
          <button className="download-button">Download for Mac</button>

          <button className="browser-button">
            Open Discord in your browser
          </button>
        </div>

        <img
          src={discordBackground}
          alt="Discord Characters"
          className="discord-background"
        />
      </main>
    </div>
  );
}
export default App;

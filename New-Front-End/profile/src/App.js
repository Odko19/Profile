import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react-dom";

function App() {
  useEffect(() => {
    fetch("https://profile-back-end-v1.herokuapp.com/models/description")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <div className="back">
      <Header />
      <main>
        <div className="content">
          <div className="content-header">
            <h1 id="home">Hello.... I'm Full stack developer</h1>
          </div>
        </div>
        <div className="content">
          <div className="content-header">
            <h1 id="portfolio">portfolio</h1>
          </div>
        </div>
        <div className="content">
          <div className="content-header">
            <h1 id="contact">contact</h1>
          </div>
        </div>
        <div className="content">
          <div className="content-header">
            <h1 id="about">about</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

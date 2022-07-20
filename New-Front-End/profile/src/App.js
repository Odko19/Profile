import "./App.css";
import Header from "./components/Header";
import Skill from "./components/Skill";
import { useEffect, useState } from "react";
import HorizontalScroll from "react-scroll-horizontal";

function App() {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    fetch("https://profile-back-end-v1.herokuapp.com/models/description")
      .then((res) => res.json())
      .then((res) => setDesc(res));
  }, []);

  return (
    <div className="back">
      <Header />
      <main>
        <div className="content">
          <div className="content-header home" id="HOME">
            {desc.map((text) => {
              return <h1 className="font-title top">{text.data}</h1>;
            })}
          </div>
        </div>
        <div className="content">
          <div id="ABOUT">
            <Skill />
          </div>
        </div>
        <div className="content">
          <div className="content-header" id="PROJECT">
            <h1>contact</h1>
          </div>
        </div>
        <div className="content">
          <div className="content-header" id="about">
            <h1>about</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

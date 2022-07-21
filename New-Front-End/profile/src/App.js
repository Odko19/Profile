import "./App.css";
import Header from "./components/Header";
import Skill from "./components/Skill";
import About from "./components/About";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

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
            {desc.map((text, i) => {
              return (
                <h1 className="fontH1" key={i}>
                  {text.data}
                </h1>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div id="ABOUT">
            <Skill />
          </div>
        </div>
        <div className="content ">
          <div id="PROJECT">
            <About />
          </div>
        </div>
        <div className="content">
          <div id="about">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

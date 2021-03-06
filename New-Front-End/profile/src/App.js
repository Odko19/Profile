import "./App.css";
import Header from "./components/Header";
import Skill from "./components/Skill";
import About from "./components/About";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    fetch("https://profile-back-end-v1.herokuapp.com/models/description")
      .then((res) => res.json())
      .then((res) => setDesc(res));
  }, []);

  return desc ? (
    <div className="back">
      <div>
        <Header />
        <main>
          <div className="content">
            <div className="content-header home" id="HOME">
              {desc.map((text, i) => {
                return (
                  <h1 key={i} className="animate-charcter">
                    {text.data}
                  </h1>
                );
              })}
            </div>
          </div>

          <div className="content">
            <div id="SKILL">
              <Skill />
            </div>
          </div>
          <div className="content ">
            <div id="ABOUT">
              <About />
            </div>
          </div>
          <div className="content">
            <div id="CONTACT">
              <Contact />
            </div>
          </div>
        </main>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default App;

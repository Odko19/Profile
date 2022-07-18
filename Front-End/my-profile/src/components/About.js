import "../style/about.css";
import { useEffect, useState } from "react";

function About() {
  const [about, setAbout] = useState([]);
  const [major, setMajor] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/models/about")
      .then((res) => res.json())
      .then((res) => setAbout(res));
    fetch("http://localhost:3000/models/major")
      .then((res) => res.json())
      .then((res) => setMajor(res));
    fetch("http://localhost:3000/models/experience")
      .then((res) => res.json())
      .then((res) => setExperience(res));
  }, []);

  return (
    <div className="App back-cover">
      <div className="back-color ">
        <div className=" p-3 container minHeight text-white">
          <div className="flex">
            <div>
              <img
                src="http://localhost:3000/image/image.svg"
                alt=""
                className="image-width"
              />
            </div>
            <div>
              <p>
                <span className="fontTag"> &#60;h4&#62;</span>
                <span className="upper"> Танилцуулга</span>
                <span className="fontTag"> &#60;/h4&#62;</span>
              </p>
              <table>
                {about &&
                  about.map((name, i) => {
                    return (
                      <thead key={i}>
                        <tr>
                          <td>{name.data}</td>
                        </tr>
                      </thead>
                    );
                  })}
              </table>
              <p>
                <span className="fontTag"> &#60;h4&#62;</span>
                <span className="upper"> Боловсрол</span>
                <span className="fontTag"> &#60;/h4&#62;</span>
              </p>
              <table>
                {major &&
                  major.map((name, i) => {
                    return (
                      <thead key={i}>
                        <tr>
                          <td> {name.data}</td>
                        </tr>
                      </thead>
                    );
                  })}
              </table>

              <p>
                <span className="fontTag"> &#60;h4&#62;</span>
                <span className="upper"> Туршлага</span>
                <span className="fontTag"> &#60;/h4&#62;</span>
              </p>
              <table>
                <thead>
                  <tr>
                    <td> {experience.data}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

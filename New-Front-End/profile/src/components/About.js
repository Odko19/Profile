import "../style/about.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

function About() {
  const [about, setAbout] = useState([]);
  const [major, setMajor] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("https://profile-back-end-v1.herokuapp.com/models/about")
      .then((res) => res.json())
      .then((res) => setAbout(res));
    fetch("https://profile-back-end-v1.herokuapp.com/models/major")
      .then((res) => res.json())
      .then((res) => setMajor(res));
    fetch("https://profile-back-end-v1.herokuapp.com/models/experience")
      .then((res) => res.json())
      .then((res) => setExperience(res));
  }, []);

  return (
    <div className="about">
      <div className="back1 ">
        <div className="text">
          <div>
            <img
              src="https://profile-back-end-v1.herokuapp.com/image/image.svg"
              alt=""
              className="image-width"
            />
          </div>
          <div className="info">
            <h4>Танилцуулга</h4>
            <ul>
              {about &&
                about.map((name, i) => {
                  return (
                    <li>
                      <td>{name.data}</td>
                    </li>
                  );
                })}
            </ul>
            <h4>Танилцуулга</h4>
            <ul>
              {major &&
                major.map((name, i) => {
                  return (
                    <li>
                      <td>{name.data}</td>
                    </li>
                  );
                })}
            </ul>
            <h4>Танилцуулга</h4>
            <ul>
              <li>
                <td>{experience.data}</td>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

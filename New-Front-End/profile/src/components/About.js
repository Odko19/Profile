import "../style/about.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

function About() {
  const [about, setAbout] = useState([]);
  const [major, setMajor] = useState([]);
  const [experience, setExperience] = useState([]);
  console.log(about);
  console.log(major);
  console.log(experience);
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
          <p>Танилцуулга</p>
          <table>
            {about &&
              about.map((name, i) => {
                return (
                  <tr>
                    <td>{name.data}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;

import "../style/about.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

function About() {
  const [about, setAbout] = useState([]);
  const [major, setMajor] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("https://profile-create-back-end-v2.herokuapp.com/profile/about")
      .then((res) => res.json())
      .then((res) => setAbout(res));
    fetch("https://profile-create-back-end-v2.herokuapp.com/profile/major")
      .then((res) => res.json())
      .then((res) => setMajor(res));
    fetch("https://profile-create-back-end-v2.herokuapp.com/profile/experience")
      .then((res) => res.json())
      .then((res) => setExperience(res));
  }, []);

  return (
    <div className="about">
      <div className="back1 ">
        <div className="text">
          <div>
            <img
              src="https://profile-create-back-end-v2.herokuapp.com/image/image.svg"
              alt=""
              className="image-width"
            />
          </div>
          <div className="info">
            <h4>Танилцуулага</h4>
            <table>
              {about &&
                about.map((name, i) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <td>{name.data}</td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
            <h4>Боловсрол</h4>
            <table>
              {major &&
                major.map((name, i) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <td>{name.data}</td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
            <h4>ТУршлага</h4>
            <table>
              <tbody>
                <tr>
                  <td>{experience.data}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

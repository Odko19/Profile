import "../style/skill.css";
import { useEffect, useState } from "react";

function Skill() {
  const [skill, setSkill] = useState([]);
  console.log(skill);
  useEffect(() => {
    fetch("https://profile-create-back-end-v2.herokuapp.com/profile/skill")
      .then((res) => res.json())
      .then((res) => setSkill(res));
  }, []);
  return (
    <div className="height container">
      <div className="row">
        {skill.data &&
          skill.data.map((a) => {
            return (
              <div className="card">
                <div className="box1">{a}</div>
              </div>
            );
          })}
      </div>
      <div className="row">
        {skill.data1 &&
          skill.data1.map((a) => {
            return (
              <div className="card">
                <div className="box2">{a}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Skill;

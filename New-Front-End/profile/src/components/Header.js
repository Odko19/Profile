import "../style/header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

function Header() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://profile-back-end-v1.herokuapp.com/models/category")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);
  const ballStyle = {
    border: "2px solid grey",
  };

  const ballStyle1 = {
    border: "2px solid red",
  };

  return (
    <header>
      <div className="container flex-header">
        {category.map((menu, i) => {
          return (
            <li key={i}>
              <Link activeClass="active" to={`${menu.category}`} smooth spy>
                {menu.category}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="container">
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Header;

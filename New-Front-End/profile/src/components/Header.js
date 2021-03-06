import "../style/header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

function Header() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://profile-create-back-end-v2.herokuapp.com/profile/category")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);

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

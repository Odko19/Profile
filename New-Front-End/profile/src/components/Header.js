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
  console.log(category);
  return (
    <header>
      <div className="container flex-header">
        {category.map((menu, i) => {
          return (
            <li key={i}>
              <Link
                activeClass="active"
                to={`${menu.category}`}
                smooth={true}
                offset={200}
                duration={500}
              >
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

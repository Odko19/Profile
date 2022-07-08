import "../style/header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/profile/category")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);
  function handler(e) {
    return setSelect(e.target.outerText);
  }

  const style = {
    c1: {
      color: "black",
    },
    c2: {
      color: "white",
    },
  };
  return (
    <div className="p-3 back">
      <div className="container text-white">
        <ul>
          {category &&
            category.map((cate, i) => {
              return (
                <li key={i}>
                  <Link
                    to={`${cate.category}`}
                    onClick={handler}
                    style={
                      `<p>${cate.category}</p>` === select ? style.c1 : style.c2
                    }
                  >
                    <span className="fontTag">&#60;p&#62;</span>
                    {cate.category}
                    <span className="fontTag">&#60;/p&#62;</span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Header;

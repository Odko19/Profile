import "../style/header.css";
import { Link, animateScroll as scroll } from "react-scroll";

const menuItems = [
  {
    id: 1,
    title: "home",
  },
  {
    id: 2,
    title: "portfolio",
  },
  {
    id: 3,
    title: "contact",
  },
  {
    id: 4,
    title: "about",
  },
];

function Header() {
  return (
    <header>
      <div className="container flex-header">
        <ul className="m-0">
          {menuItems.map((menu) => {
            return (
              <li>
                <Link
                  activeClass="active"
                  to={`${menu.title}`}
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container">
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Header;

import "./navigation.css";
import { useState } from "react";
function Navigation() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <nav className={color ? "sticky" : ""}>
      {/* <div className="logo">
        <img src="./logo.png" alt="logo" />
      </div> */}
      {/* <ul className="nav_menu">
        <li className="nav_menu__list">
          <a href="#" className="nav_menu__link">
            Home
          </a>
        </li>
        <li className="nav_menu__list">
          <a href="#" className="nav_menu__link">
            Services
          </a>
        </li>
        <li className="nav_menu__list">
          <a href="#" className="nav_menu__link">
            Features
          </a>
        </li>
        <li className="nav_menu__list">
          <a href="#" className="nav_menu__link">
            About
          </a>
        </li>
        <li className="nav_menu__list">
          <a href="#" className="nav_menu__link">
            Contact
          </a>
        </li>
      </ul> */}
      <div></div>
    </nav>
  );
}
export default Navigation;

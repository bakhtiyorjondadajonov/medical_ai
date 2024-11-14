import "./navigation.css";
function Navigation() {
  return (
    <nav>
      <div className="logo">LOGO</div>
      <ul className="nav_menu">
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
      </ul>
    </nav>
  );
}
export default Navigation;

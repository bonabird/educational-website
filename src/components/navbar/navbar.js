import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/cat.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    window.removeEventListener("resize", showButton);
  }, []);

  return (
    <header className="header">
      <nav className="nav-container container">
        <NavLink to="/home" className="nav-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/exercises"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Exercises
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

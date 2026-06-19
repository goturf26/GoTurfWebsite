import { useState } from "react";
import "./navbar.css";
import cricket from "../../assets/cricket1.jpg";
import goturfpng from "../../assets/logowh.png";

function Navbar() {
  const [hidei, setHidei] = useState(false);

  const hide = () => {
    setHidei(!hidei);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    setHidei(false);
  };

  return (
    <>
      <header className="header">
        <img src={goturfpng} className="logo" alt="GoTurf Logo" />

        <nav className="navbar">
          <img
            className="icon"
            src={cricket}
            onClick={hide}
            alt="menu"
          />

          <ul className={`menu ${hidei ? "active" : ""}`}>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("turf")}>Turf</li>
            <li onClick={() => scrollToSection("tournament")}>Tournament</li>
            <li onClick={() => scrollToSection("footer")}>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
import { useState } from "react";
import "./navbar.css";
import cricket from "../../assets/cricket1.jpg";
import goturfpng from "../../assets/logowh.png";

function Navbar() {
  const [hidei, setHidei] = useState(false);

  const hide = () => {
    setHidei(!hidei);
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
            <li><a href="#home">Home</a></li>
            <li><a href="#turf">Turf</a></li>
            <li><a href="#tournament">Tournament</a></li>
            <li><a href="#footer">Contact us</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
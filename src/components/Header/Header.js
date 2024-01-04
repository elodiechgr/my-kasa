import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/About">À propos</Link>
      </div>
    </nav>
  );
}

export default Header;

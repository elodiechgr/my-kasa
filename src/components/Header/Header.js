import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <div className="nav-links">
        <NavLink to="/" end className="nav-link">
          Accueil
        </NavLink>
        <NavLink to="/About" className="nav-link">
          À propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;

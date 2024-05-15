import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-blanc.png";
import "./Footer.scss";

function Footer() {
  return (
    <nav className="footer-nav">
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <div className="text-footer">
        <p>© 2020 My Kasa. All rights reserved</p>
      </div>
    </nav>
  );
}

export default Footer;

import React from "react";
import "../styles/App.css";

const Header = () => (
  <div className="header">
    <img src={process.env.PUBLIC_URL + "/background3.jpg.png"} alt="Background" />
  </div>
);

export default Header;

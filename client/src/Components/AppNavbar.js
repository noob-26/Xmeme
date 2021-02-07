import React from "react";
import './AppNavbar.css'

const AppNavbar = () => {
  return (
    <div className="nav">
      <div className="logo">XMEME</div>

      <div className="buttons">
        <button className="nav__button btn1">Swagger</button>
        <button className="nav__button btn2">Create Meme</button>
      </div>
    </div>
  );
};

export default AppNavbar;

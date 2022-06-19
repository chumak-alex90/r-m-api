import React from "react";
import rick from "../img/rick.png";
import morty from "../img/morty.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h2>Rick & Morty API</h2>
        <img src={rick} alt="" />
        <img src={morty} alt="" />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import logo from "../../img/NetflixLogo.png";
import { LuSearch } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="wrapper">
      <div className="left">
        <img src={logo} alt="Netflix" />
        <div className="menu">
          <button className="nav-button">Start</button>
          <button className="nav-button">Shows</button>
          <button className="nav-button">Movies</button>
          <button className="nav-button">New</button>
          <button className="nav-button">My List</button>
        </div>
      </div>
      <div className="right">
        <div className="icon">
          <LuSearch size={24} />
        </div>
        <div className="icon">
          <FaRegBell size={24} />
        </div>
      </div>
    </div>
  );
}

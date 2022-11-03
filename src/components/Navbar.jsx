import React from "react";
import image from "../assets/film.gif";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" nav-bar ">
        <div className=" left">
          <img src={image} alt="film-gif" style={{ width: 80 }} />
          <a href="https://github.com/B-Oz/movie-app">React Movie App</a>
        </div>
        <div className="right">
          <NavLink className="link" to="/login">
            Login
          </NavLink>
          <NavLink className="link">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

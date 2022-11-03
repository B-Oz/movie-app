import React from "react";
import image from "../assets/film.gif";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className=" nav ">
          <div className=" left">
            <img src={image} alt="film-gif" style={{ width: 80 }} />
            <a
              className="navbar-brand d-inline-block align-middle"
              href="https://github.com/B-Oz/movie-app"
            >
              React Movie App
            </a>
          </div>
          <div className="right">
            <NavLink className="nav-link">Login</NavLink>
            <NavLink className="nav-link">Register</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

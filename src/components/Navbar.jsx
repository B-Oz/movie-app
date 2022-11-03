import React from "react";
import image from "../assets/film.gif";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid nav-left d-flex flex-row">
          <a className="navbar-brand " href="https://github.com/B-Oz/movie-app">
            <img
              src={image}
              alt="film-gif"
              style={{ width: 80 }}
              className="d-inline-block align-text-top"
            />
            React Movie App
          </a>
          <div className="d-flex  flex-column justify-content-end">
            <button className="btn">Login</button>
            <button className="btn">Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { PiSealQuestionFill } from "react-icons/pi";
import "./navbar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Left side: Main Navigation Links */}
      <div className="navbar-left">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/calculator" className="nav-link">Calorie Calculator</Link>
          </li>
          <li className="nav-item">
            <Link to="/workoutplan" className="nav-link">Workout Plan</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">User</Link>
          </li>
        </ul>
      </div>

      {/* Right side: Header Links */}
      <div className="navbar-right">
        <ul className="header-links">
          <li className="header-link-item">
            <Link to="/login" className="header-link">
              <IoMdContact /> Login
            </Link>
          </li>
          <li className="header-link-item">
            <Link to="/about" className="header-link">
              <PiSealQuestionFill /> How Works Mutation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

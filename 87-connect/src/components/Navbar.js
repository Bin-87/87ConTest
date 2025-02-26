// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaBell, FaEnvelope } from "react-icons/fa";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          87-Connect
        </Link>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-icon">
          <FaHome />
        </Link>
        <Link to="/help" className="nav-icon">
          <FaQuestionCircle />
        </Link>
        <Link to="/notifications" className="nav-icon">
          <FaBell />
        </Link>
        <Link to="/messages" className="nav-icon">
          <FaEnvelope />
        </Link>
        <Link to="/profile" className="profile-link">
          <img src={user.profileImg} alt="Profile" className="profile-img" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

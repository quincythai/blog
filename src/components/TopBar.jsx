import React from "react";
import { Link } from 'react-router-dom';
import logo from '/gilgamesh_sideways.jpeg';
import '../styles/TopBar.css'

const TopBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo">Gilgamesh News</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/DiegoPage" className="link">The Lock In</Link>
          </li>
          <li>
            <Link to="/JQPage" className="link">The Interview</Link>
          </li>
          <li>
            <Link to="/QuincyPage" className="link">The Method</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TopBar;

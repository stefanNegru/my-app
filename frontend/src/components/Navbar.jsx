import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <Link to="/">
          <h1>For you</h1>
        </Link>
      </div>
      <div>
        <Link to="/">
          <h1>Following</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

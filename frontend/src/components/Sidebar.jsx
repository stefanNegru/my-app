import React from "react";
import "./Sidebar.css";
import { IoHome } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon">
        <Link to="/">
          <IoHome size="30px" color="white" />
        </Link>
      </div>
      <div className="icon">
        <CiSearch size="30px" color="white" />
      </div>
      <div className="icon">
        <IoMdNotificationsOutline size="30px" color="white" />
      </div>
      <div className="icon">
        <FaRegMessage size="30px" color="white" />
      </div>
      <div className="icon">
        <Link to="/profile">
          <CiUser size="30px" color="white" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

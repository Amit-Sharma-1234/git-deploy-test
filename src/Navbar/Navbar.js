import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="header">
      <div className="nav">
        <h1>LOGO</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
        <form action="">
          <input type="text" placeholder="Search Here" name="" id="" />
        </form>
      </div>
    </div>
  );
};

export default Navbar;

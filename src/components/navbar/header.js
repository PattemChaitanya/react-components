import React from "react";
import "./header.css";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div class="main">
      <nav class="navbar">
        <p>Css</p>
        <p>Css</p>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;

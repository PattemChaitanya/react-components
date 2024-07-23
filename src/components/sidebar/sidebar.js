import React from "react";
import { Outlet } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <aside>
        <a href="/">home</a>
        <a href="/drop">drop</a>
        <p>aside</p>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;

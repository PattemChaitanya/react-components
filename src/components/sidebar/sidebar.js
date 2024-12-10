import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./sidebar.css";
import { newMenu } from "../../constants/sidebarConstants";

const Sidebar = () => {
  return (
    <div className="main-container">
      <aside>
        <Link to="/" className="sidebar_left_header">
          Home
        </Link>
        {newMenu.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isActive ? "sidebar_left_para active" : "sidebar_left_para"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;

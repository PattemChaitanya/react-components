import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./sidebar.css";
import { homeScreenCards } from "../../constants/sidebarConstants";

const Sidebar = () => {
  return (
    <div className="main-container">
      <aside>
        <Link
          to="/all-components"
          className="sidebar_left_header sidebar_left_para_header"
        >
          All Components
        </Link>
        {homeScreenCards.map((item, itemIndex) => (
          <React.Fragment key={itemIndex}>
            <p className="sidebar_left_para_header">{item.title}</p>
            {item.components.map((component, index) => (
              <NavLink
                to={component.path}
                key={index}
                className={({ isActive }) =>
                  isActive ? "sidebar_left_para active" : "sidebar_left_para"
                }
              >
                {component.title}
              </NavLink>
            ))}
          </React.Fragment>
        ))}
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;

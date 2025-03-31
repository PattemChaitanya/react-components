import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./sidebar.css";
import { homeScreenCards } from "../../constants/sidebarConstants";

const Sidebar = () => {
  return (
    <div className="main-container">
      <aside aria-label="Component Navigation">
        <Link
          to="/all-components"
          className="sidebar_left_header sidebar_left_para_header"
        >
          All Components
        </Link>
        {homeScreenCards.map((item, itemIndex) => (
          <React.Fragment key={itemIndex}>
            <h2 className="sidebar_left_para_header transition-color">{item.title}</h2>
              <ul aria-label={`${item.title} Navigation`} style={{ display: "flex", flexDirection: "column", gap: "8px", margin: 0, padding: 0, listStyle: "none" }}>
                {item.components.map((component, index) => (
                    <NavLink
                      component={"li"}
                      to={component.path}
                      key={index}
                      className={({ isActive }) =>
                        isActive ? "sidebar_left_para active" : "sidebar_left_para"
                      }
                    >
                      {component.title}
                    </NavLink>
                ))}
              </ul>
          </React.Fragment>
        ))}
      </aside>
      <main id="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;

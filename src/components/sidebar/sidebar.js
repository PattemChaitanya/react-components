import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./sidebar.css";
import { components, newMenu } from "../../constants/sidebarConstants";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <div className="main-container">
      <aside>
        {pathname === "components" ? (
          components.map((item, index) => (
            <Link to={item.to} key={index} className="sidebar_left_para">
              {item.title}
            </Link>
          ))
        ) : (
          <>
            <Link to="/" className="sidebar_left_header">
              Home
            </Link>
            {newMenu.map((item, index) => (
              <Link to={item.path} key={index} className="sidebar_left_para">
                {item.title}
              </Link>
            ))}
          </>
        )}
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;

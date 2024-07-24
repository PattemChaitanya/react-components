import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./sidebar.css";
import { menu, components } from "../../constants/sidebarConstants";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <div className="sidebar">
      <aside>
        {pathname === "components" ? (
          components.map((item, index) => (
            <Link to={item.to} key={index}>
              {item.title}
            </Link>
          ))
        ) : (
          <>
            <Link to="/">Home</Link>
            {menu.map((item, index) => (
              <Link to={item.path} key={index}>
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

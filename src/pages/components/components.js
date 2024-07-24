import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { components } from "../../constants/sidebarConstants";
import Card from "../../components/cards/card";

const Components = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  return (
    <div>
      {pathname.length === 2 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to={-1}>Back</Link>
          <div className="card-box">
            {components.map((item, index) => (
              <Card to={item.to} title={item.title} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Components;

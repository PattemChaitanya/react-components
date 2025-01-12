import React from "react";
import HelmetComponent from "../helmet/helmet";

const Layout = ({ title, description, children }) => {
  return (
    <HelmetComponent title={title} description={description}>
      <div className="main-main-container">
        <div className="scroll-wrapper">
          <div className="page-layout">{children}</div>
        </div>
      </div>
    </HelmetComponent>
  );
};

export default Layout;

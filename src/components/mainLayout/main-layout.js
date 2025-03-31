import React from "react";
import HelmetComponent from "../helmet/helmet";

const Layout = ({ title, description, children }) => {
  return (
    <HelmetComponent title={title} description={description}>
      <div className="main-main-container" role="region" aria-label={title || "Main content"}>
        <div className="scroll-wrapper">
          <article className="page-layout">
            {children}
          </article>
        </div>
      </div>
    </HelmetComponent>
  );
};

export default Layout;

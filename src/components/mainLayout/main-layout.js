import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={`${description} component from scratch`}
        />
      </Helmet>
      <div className="main-main-container">
        <div className="scroll-wrapper">
          <div className="page-layout">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;

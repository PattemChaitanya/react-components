import React from "react";
import HelmetComponent from "../helmet/helmet";

const LayoutComponent = ({ title, description, keywords, children }) => {
  return (
    <HelmetComponent
      title={title}
      description={description}
      keywords={keywords}
    >
      <div className="main-main-container">
        <div className="scroll-wrapper-component">
          <div className="page-layout">{children}</div>
        </div>
      </div>
    </HelmetComponent>
  );
};

export default LayoutComponent;

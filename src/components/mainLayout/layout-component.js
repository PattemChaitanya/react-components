import React from "react";
import HelmetComponent from "../helmet/helmet";

const LayoutComponent = ({ title, description, keywords, children }) => {
  return (
    <HelmetComponent
      title={title}
      description={description}
      keywords={keywords}
    >
      <div className="main-main-container" role="region" aria-label={title || "Main content"}>
        <div className="scroll-wrapper-component">
          <article className="page-layout">
            {children}
          </article>
        </div>
      </div>
    </HelmetComponent>
  );
};

export default LayoutComponent;

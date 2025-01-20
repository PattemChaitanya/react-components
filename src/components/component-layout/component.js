import React from "react";
import ComponentLayout from "./component-layout";
import ComponentRight from "./component-right";

const ComponentBlock = ({ jsonObject }) => {
  return (
    <>
      <ComponentLayout jsonObject={jsonObject} />
      <ComponentRight
        pageTitle={jsonObject.pageTitle}
        links={jsonObject.links}
      />
    </>
  );
};

export default ComponentBlock;

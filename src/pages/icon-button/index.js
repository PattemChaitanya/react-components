import React from "react";
import ComponentBlock from "../../components/component-layout/component";
import { iconButtonData } from "./icon-button-data";

const IconButton = () => {
  const jsonObject = {
    ...iconButtonData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default IconButton;

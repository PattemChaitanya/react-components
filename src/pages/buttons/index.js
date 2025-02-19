import React from "react";
import { jsonToButtonData } from "./button-data";
import ComponentBlock from "../../components/component-layout/component";

const Buttons = () => {
  const jsonObject = {
    ...jsonToButtonData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default Buttons;

import React from "react";
import { radioData } from "./radio-button-data";
import ComponentBlock from "../../components/component-layout/component";

const RadioButton = () => {
  const jsonObject = {
    ...radioData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default RadioButton;

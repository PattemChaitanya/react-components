import React from "react";
import { checkboxData } from "./check-box-data";
import ComponentBlock from "../../components/component-layout/component";

const CheckBox = () => {
  const jsonObject = {
    ...checkboxData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default CheckBox;

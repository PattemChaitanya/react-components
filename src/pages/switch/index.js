import React from "react";
import { switchData } from "./switch-data";
import ComponentBlock from "../../components/component-layout/component";

const Switch = () => {
  const jsonObject = {
    ...switchData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default Switch;

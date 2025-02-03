import React from "react";
import { buttonGroupData } from "./button-group-data";
import ComponentExample from "../../components/component-layout/component-example";

const ButtonGroup = () => {
  const jsonObject = {
    ...buttonGroupData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default ButtonGroup;

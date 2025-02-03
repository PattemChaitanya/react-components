import React from "react";
import { dropDownData } from "./drop-downs-data";
import ComponentExample from "../../components/component-layout/component-example";

const DropDowns = () => {
  const jsonObject = {
    ...dropDownData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default DropDowns;

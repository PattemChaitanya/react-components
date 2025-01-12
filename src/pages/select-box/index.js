import React from "react";
import { selectData } from "./select-box-data";
import ComponentBlock from "../../components/component-layout/component";

const SelectBox = () => {
  const jsonObject = {
    ...selectData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default SelectBox;

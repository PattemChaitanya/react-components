import React from "react";
import { textFieldData } from "./textField-data";
import ComponentBlock from "../../components/component-layout/component";

const TextField = () => {
  const jsonObject = {
    ...textFieldData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default TextField;

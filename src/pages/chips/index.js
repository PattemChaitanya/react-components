import React from "react";
import ComponentBlock from "../../components/component-layout/component";
import { chipsData } from "./chips-data";

const Chips = () => {
  const jsonObject = {
    ...chipsData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default Chips;
    
import React from "react";
import { caursoulData } from "./caursoul-data";
import ComponentExample from "../../components/component-layout/component-example";

const Caursoul = () => {
  const jsonObject = {
    ...caursoulData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Caursoul;

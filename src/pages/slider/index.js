import React from "react";
import ComponentBlock from "../../components/component-layout/component";
import { switchData } from "./slider-data";

const Slider = () => {
  const jsonObject = {
    ...switchData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default Slider;

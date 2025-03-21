import React from "react";
import ComponentBlock from "../../components/component-layout/component";
import { sliderData } from "./slider-data";

const Slider = () => {
  const jsonObject = {
    ...sliderData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default Slider;

import React from "react";
import { flexBoxData } from "./flexbox-data";
import ComponentExample from "../../components/component-layout/component-example";

const Flexbox = () => {
  const jsonObject = {
    ...flexBoxData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Flexbox;

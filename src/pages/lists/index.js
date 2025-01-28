import React from "react";
import ComponentBlock from "../../components/component-layout/component";
import { listsData } from "./lists-data";

const Lists = () => {
  const jsonObject = {
    ...listsData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default Lists;
    
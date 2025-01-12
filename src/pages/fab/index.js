import React from "react";
import { fabData } from "./fab-data";
import ComponentBlock from "../../components/component-layout/component";

const Fab = () => {
  const jsonObject = {
    ...fabData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default Fab;

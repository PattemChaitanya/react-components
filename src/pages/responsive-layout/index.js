import React from "react";
import { responsiveData } from "./responsive-layout-data";
import ComponentExample from "../../components/component-layout/component-example";

const ResponsiveLayout = () => {
  const jsonObject = {
    ...responsiveData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default ResponsiveLayout;

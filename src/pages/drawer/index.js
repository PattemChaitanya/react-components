import React from "react";
import { sideNavData } from "./drawer-data";
import ComponentExample from "../../components/component-layout/component-example";

const Drawer = () => {
  const jsonObject = {
    ...sideNavData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Drawer;

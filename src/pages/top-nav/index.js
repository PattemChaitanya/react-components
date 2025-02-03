import React from "react";
import { topNavData } from "./top-nav-data";
import ComponentExample from "../../components/component-layout/component-example";

const TopNavigation = () => {
  const jsonObject = {
    ...topNavData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default TopNavigation;

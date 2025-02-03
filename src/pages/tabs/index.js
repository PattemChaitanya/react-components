import React from "react";
import { tabsData } from "./tabs-data";
import ComponentExample from "../../components/component-layout/component-example";

const Tabs = () => {
  const jsonObject = {
    ...tabsData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Tabs;

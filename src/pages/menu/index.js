import React from "react";
import ComponentBlock from "../../components/component-layout/component";
import { menuData } from "./menu-data";

const Menu = () => {
  const jsonObject = {
    ...menuData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default Menu;
    
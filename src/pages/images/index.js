import React from "react";
import { imagesData } from "./imagesData";
import ComponentExample from "../../components/component-layout/component-example";

const Images = () => {
  const jsonObject = {
    ...imagesData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Images;

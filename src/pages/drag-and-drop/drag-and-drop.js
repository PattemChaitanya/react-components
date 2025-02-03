import React from "react";
import "./drag-and-drop.css";
import { dragandDropData } from "./drag-and-drop-data";
import ComponentExample from "../../components/component-layout/component-example";

const DragAndDrop = () => {
  const jsonObject = {
    ...dragandDropData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default DragAndDrop;

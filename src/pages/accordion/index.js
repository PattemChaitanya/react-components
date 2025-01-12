import React from "react";
import { accrodionData } from "./accordionData";
import ComponentBlock from "../../components/component-layout/component";

const Accordion = () => {
  const jsonObject = {
    ...accrodionData,
  };

  return <ComponentBlock jsonObject={jsonObject} />;
};

export default Accordion;

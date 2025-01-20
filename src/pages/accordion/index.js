import React from "react";
import { accrodionData } from "./accordionData";
import ComponentExample from "../../components/component-layout/component-example";

const Accordion = () => {
  const jsonObject = {
    ...accrodionData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Accordion;

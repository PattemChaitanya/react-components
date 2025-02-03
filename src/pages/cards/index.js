import React from "react";
import { cardData } from "./card-data";
import ComponentExample from "../../components/component-layout/component-example";

const Cards = () => {
  const jsonObject = {
    ...cardData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Cards;

import React from "react";
import { avatarData } from "../accordion/accordionData";
import ComponentExample from "../../components/component-layout/component-example";

const Avatar = () => {
  const jsonObject = {
    ...avatarData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Avatar;

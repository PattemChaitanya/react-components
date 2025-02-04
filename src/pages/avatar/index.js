import React from "react";
import ComponentExample from "../../components/component-layout/component-example";
import { avatarData } from "./avatar-data";

const Avatar = () => {
  const jsonObject = {
    ...avatarData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Avatar;

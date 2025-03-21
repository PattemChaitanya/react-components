import React from "react";
import { tableData } from "./tableData";
import ComponentExample from "../../components/component-layout/component-example";

const Table = () => {
  const jsonObject = {
    ...tableData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Table;

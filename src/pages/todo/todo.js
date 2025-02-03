import React from "react";
import "./todo.css";
import { todoData } from "./todoListData";
import ComponentExample from "../../components/component-layout/component-example";

const Todo = () => {
  const jsonObject = {
    ...todoData,
  };

  return <ComponentExample jsonObject={jsonObject} />;
};

export default Todo;

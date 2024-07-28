import React from "react";
import "./todo.css";
import { Link } from "react-router-dom";
import CodeSnippet from "../../components/codeSnippet/codeSnippet";
import { todoListData } from "./todoListData";

const Todo = () => {
  return (
    <p className="homeText">
      <Link to={-1}>Back</Link>
      <br />
      {todoListData.map((item) => (
        <>
          {item.component}
          <CodeSnippet code={item.toDisplay} />
        </>
      ))}
    </p>
  );
};

export default Todo;
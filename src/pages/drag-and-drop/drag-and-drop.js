import React from "react";
import "./drag-and-drop.css";
import { Link } from "react-router-dom";
import { jsonToDisplay } from "./code-snippet-display"
import CodeSnippet from "../../components/codeSnippet/codeSnippet";

const DragAndDrop = () => {
  return (
    <p className="homeText">
      <Link to={-1}>Back</Link>
      <br />
      {jsonToDisplay.map((item) => (
        <>
          {item.component}
          <CodeSnippet code={item.toDisplay} />
        </>
      ))}
    </p>
  );
};

export default DragAndDrop;
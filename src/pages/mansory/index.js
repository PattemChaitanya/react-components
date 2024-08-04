import React from "react";
import { Link } from "react-router-dom";
import { jsonToDisplay } from "./mansoryData"
import CodeSnippet from "../../components/codeSnippet/codeSnippet";

const index = () => {
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

export default index;
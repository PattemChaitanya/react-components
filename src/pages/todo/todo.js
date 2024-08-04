import React, { useState } from "react";
import "./todo.css";
import { Link } from "react-router-dom";
import CodeSnippet from "../../components/codeSnippet/codeSnippet";
import { jsonToDisplay } from "./todoListData";
import Layout from "../../components/mainLayout/main-layout";
import InteractiveUi from "../../components/interactiveUi/interactiveUi";

const Todo = () => {
  const [openIndexes, setOpenIndexes] = useState(jsonToDisplay.map(() => false));

  const handleOpen = (index) => {
    setOpenIndexes(openIndexes.map((item, idx) => idx === index ? !item : item));
  }
  return (
    <Layout title="Table" description={"Table"}>
      <>
      <Link to={-1}>Back</Link>
      <br />
        {jsonToDisplay.map((item, index) => (
          <InteractiveUi>
            <div key={index} style={{ padding: "10px" }}>
              {item.component}
            </div>
            <CodeSnippet code={item.toDisplay} open={openIndexes} handleOpen={handleOpen} index={index} />
          </InteractiveUi>
        ))}
      </>
    </Layout>
  );
};

export default Todo;
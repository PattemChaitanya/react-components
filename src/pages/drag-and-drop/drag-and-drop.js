import React, { useState } from "react";
import "./drag-and-drop.css";
import { Link } from "react-router-dom";
import { jsonToDisplay } from "./code-snippet-display"
import CodeSnippet from "../../components/codeSnippet/codeSnippet";
import Layout from "../../components/mainLayout/main-layout";
import InteractiveUi from "../../components/interactiveUi/interactiveUi";

const DragAndDrop = () => {
  const [openIndexes, setOpenIndexes] = useState(jsonToDisplay.map(() => false));

  const handleOpen = (index) => {
    setOpenIndexes(openIndexes.map((item, idx) => idx === index ? !item : item));
  }

  return (
    <Layout title="Drag and Drop" description={"Drag and Drop"}>
      <>
      <Link to={-1}>Back</Link>
      <br />
        {jsonToDisplay.map((item, index) => (
          <InteractiveUi>
            <div style={{ padding: "10px" }} key={index}>
              {item.component}</div>
            <CodeSnippet code={item.toDisplay} open={openIndexes} handleOpen={handleOpen} index={index} />
          </InteractiveUi>
        ))}
      </>
    </Layout>
  );
};

export default DragAndDrop;
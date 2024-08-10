import React, { useState } from "react";
import "./drag-and-drop.css";
import { jsonToDisplay } from "./drag-and-drop-data";
import CodeSnippet from "../../components/codeSnippet/codeSnippet";
import Layout from "../../components/mainLayout/main-layout";
import InteractiveUi from "../../components/interactiveUi/interactiveUi";

const DragAndDrop = () => {
  const [openIndexes, setOpenIndexes] = useState(
    jsonToDisplay.map(() => false)
  );

  const handleOpen = (index) => {
    setOpenIndexes(
      openIndexes.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <Layout title="Drag and Drop" description={"Drag and Drop"}>
      {jsonToDisplay.map((item, index) => (
        <div key={index} className="gap-each-section">
          <h2>{item.title}</h2>
          <p>{item.subTitle}</p>
          <InteractiveUi>
            <div style={{ padding: "10px" }} key={index}>
              {item.component}
            </div>
            <CodeSnippet
              code={item.toDisplay}
              open={openIndexes}
              handleOpen={handleOpen}
              index={index}
            />
          </InteractiveUi>
        </div>
      ))}
    </Layout>
  );
};

export default DragAndDrop;

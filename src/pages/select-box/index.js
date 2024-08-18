import React, { useState } from "react";
import { jsonToPageDisplay } from "./select-box-data";
import CodeSnippet from "../../components/codeSnippet/codeSnippet";
import InteractiveUi from "../../components/interactiveUi/interactiveUi";
import Layout from "../../components/mainLayout/main-layout";

const SelectBox = () => {
  const [openIndexes, setOpenIndexes] = useState(
    jsonToPageDisplay.jsonToDisplay.map((item) => item.open)
  );

  const handleOpen = (index) => {
    setOpenIndexes(
      openIndexes.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <Layout title="SelectBox" description={"SelectBox"}>
      <h2>{jsonToPageDisplay?.pageTitle}</h2>
      <p>{jsonToPageDisplay?.description}</p>
      <div
        style={{
          witdh: "100%",
          height: "1px",
          background: "#292929",
          opacity: "0.5",
        }}
      />
      {jsonToPageDisplay?.jsonToDisplay?.map((item, index) => (
        <div key={index} className="gap-each-section">
          <h2>{item.title}</h2>
          <p>{item.subTitle}</p>
          <InteractiveUi>
            <div
              style={{
                padding: "10px",
                marginInline: "auto",
              }}
            >
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

export default SelectBox;

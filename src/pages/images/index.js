import React, { useState } from "react";
import { jsonToPageDisplay } from "./imagesData";
import CodeSnippet from "../../components/codeSnippet/codeSnippet";
import InteractiveUi from "../../components/interactiveUi/interactiveUi";
import Layout from "../../components/mainLayout/main-layout";

const Images = () => {
  const [openIndexes, setOpenIndexes] = useState(
    jsonToPageDisplay?.jsonToDisplay.map((item) => item.open)
  );

  const handleOpen = (index) => {
    setOpenIndexes(
      openIndexes.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <>
      <Layout title="Images" description={"Images"}>
        <h2>{jsonToPageDisplay?.pageTitle}</h2>
        <p>{jsonToPageDisplay?.description}</p>
        <div className="underline" />
        {jsonToPageDisplay.jsonToDisplay.map((item, index) => (
          <InteractiveUi>
            <div key={index} style={{ padding: "10px" }}>
              {item.component}
            </div>
            <CodeSnippet
              code={item.toDisplay}
              open={openIndexes}
              handleOpen={handleOpen}
              index={index}
            />
          </InteractiveUi>
        ))}
      </Layout>
      <section className="sidebar-right">
        <div className="scroll-wrapper">
          <p style={{ fontSize: "11px" }}>On this page:</p>
          <p style={{ fontSize: "24px", fontWeight: 700, margin: "10px 0" }}>
            Material Theming
          </p>
          <ul>
            <li>
              <p>Reference</p>
              <ul>
                <li>Typeface</li>
                <li>Palette</li>
              </ul>
            </li>
            <li>
              <p>System</p>
              <ul>
                <li>Color</li>
                <li>Typography</li>
                <li>Shape</li>
                <li>Motion</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Images;

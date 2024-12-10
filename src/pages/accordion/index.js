import React, { useState } from "react";
import CodeSnippet from "../../components/codeSnippet/codeSnippet";
import { jsonToPageDisplay } from "./accordionData";
import Layout from "../../components/mainLayout/main-layout";
import InteractiveUi from "../../components/interactiveUi/interactiveUi";

const Accordion = () => {
  const [openIndexes, setOpenIndexes] = useState(
    jsonToPageDisplay.jsonToDisplay.map((item) => item.open)
  );

  const handleOpen = (index) => {
    setOpenIndexes(
      openIndexes.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <>
      <Layout title="Accordion" description={"Accordion"}>
        <h2>{jsonToPageDisplay?.pageTitle}</h2>
        <p>{jsonToPageDisplay?.description}</p>
        <div className="underline" />
        {jsonToPageDisplay?.jsonToDisplay.map((item, index) => (
          <div key={index} className="gap-each-section" id={item.id}>
            <h2>{item.title}</h2>
            <p>{item.subTitle}</p>
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
          </div>
        ))}
      </Layout>
      <section className="sidebar-right">
        <div className="scroll-wrapper">
          <p style={{ fontSize: "11px" }}>On this page:</p>
          <p style={{ fontSize: "24px", fontWeight: 700, margin: "10px 0" }}>
            Accordion
          </p>
          {/* <ul> */}
          {/* <li>
              <p>Reference</p> */}
          <ul>
            <a href="#basic">
              <li>Basic</li>
            </a>
            <a href="#one_open_accordion">
              <li>One Open Accordion</li>
            </a>
            <a href="#full_width_accordion">
              <li>Full Width Accordion</li>
            </a>
          </ul>
          {/* </li> */}
          {/* </ul> */}
        </div>
      </section>
    </>
  );
};

export default Accordion;

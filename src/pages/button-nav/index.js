import React, { useState } from "react";
import { jsonToDisplay } from "./bottom-nav-data";
import CodeSnippet from "../../components/codeSnippet/codeSnippet";
import InteractiveUi from "../../components/interactiveUi/interactiveUi";
import Layout from "../../components/mainLayout/main-layout";

const BottomNavigation = () => {
  const [openIndexes, setOpenIndexes] = useState(
    jsonToDisplay.map((item) => item.open)
  );

  const handleOpen = (index) => {
    setOpenIndexes(
      openIndexes.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <Layout title="Bottom Navgiation" description={"Bottom Navgiation"}>
      {jsonToDisplay.map((item, index) => (
        <div key={index} className="gap-each-section">
          <h2>{item.title}</h2>
          <p>{item.subTitle}</p>
          <InteractiveUi>
            <div style={{ padding: "10px" }}>{item.component}</div>
            <CodeSnippet
              code={item.toDisplay}
              open={openIndexes}
              handleOpen={handleOpen}
              index={index}
            />
          </InteractiveUi>
        </div>
      ))}
      {/* <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="#4CAF50" />
          <text x="50%" y="50%" fill="white" font-size="45" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle" alignment-baseline="middle">RC</text>
        </svg>
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="#4CAF50" />
          <text x="50%" y="50%" fill="white" font-size="45" font-family="'Grey Qo', serif" font-weight="bold" text-anchor="middle" alignment-baseline="middle">RC</text>
        </svg> */}
    </Layout>
  );
};

export default BottomNavigation;

import React, { useEffect, useState } from "react";
import ComponentRight from "./component-right";
import LayoutComponent from "../mainLayout/layout-component";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";

const ComponentExample = ({ jsonObject }) => {
  const {
    seoTitle,
    seoDescription,
    seoKeywords,
    pageTitle,
    pageDescription,
    types,
    examples: jsonToDisplay,
    references,
  } = jsonObject;

  const [isCopied, setIsCopied] = useState(
    jsonToDisplay.map((item) => item.open)
  );

  const handleCopy = (codeToCopy, index) => {
    setIsCopied(isCopied.map((item, idx) => (idx === index ? !item : item)));
    navigator.clipboard.writeText(codeToCopy);
  };

  useEffect(() => {
    if (isCopied.some((item) => item === true)) {
      setTimeout(() => {
        setIsCopied(isCopied.map((item) => (item === true ? !item : item)));
      }, 2000);
    }
  }, [isCopied]);

  return (
    <>
      <LayoutComponent
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
      >
        <div className="header_example_container">
          <h3 className="pageTitle">{pageTitle}</h3>
          {pageDescription.map((item) => (
            <p style={{ paddingBottom: "12px", lineHeight: "1.25rem" }}>
              {item}
            </p>
          ))}
        </div>
        <div className="component-layout-body-container">
          {Object.keys(types).length > 0 && (
            <div id="types" style={{}}>
              <h2>Types</h2>
              <ul>
                {types.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {jsonToDisplay?.map((item, index) => (
            <div key={index} className="gap-each-section" id={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>
                <strong>Usages:</strong> {item.usages}
              </p>
              <p>
                <strong>Purpose:</strong> {item.purpose}
              </p>
              <div className="component-layout-component">{item.component}</div>
              <div style={{ position: "relative" }}>
                <pre className="component-layout-code-block">
                  <code>{item.codeBlock}</code>
                </pre>
                {isCopied[index] ? (
                  <DoneIcon
                    sx={{
                      cursor: "pointer",
                      position: "absolute",
                      top: 10,
                      right: 20,
                    }}
                    onClick={() => handleCopy(item.codeBlock, index)}
                  />
                ) : (
                  <ContentCopyIcon
                    sx={{
                      cursor: "pointer",
                      position: "absolute",
                      top: 10,
                      right: 20,
                    }}
                    onClick={() => handleCopy(item.codeBlock, index)}
                  />
                )}
              </div>
            </div>
          ))}
          {Object.keys(references).length > 0 && (
            <div
              id="references"
              style={{
                marginBottom: "16px",
              }}
            >
              <h2>References</h2>
              <ul>
                {Object.entries(references).map(
                  ([referenceEntry, referenceValue]) => (
                    <li>
                      <a href={referenceValue} target="_blank" rel="noreferrer">
                        {referenceEntry}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </LayoutComponent>
      <ComponentRight
        pageTitle={jsonObject.pageTitle}
        links={jsonObject.links}
      />
    </>
  );
};

export default ComponentExample;

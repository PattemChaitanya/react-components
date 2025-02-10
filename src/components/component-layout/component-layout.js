import React, { useEffect, useState } from "react";
import LayoutComponent from "../mainLayout/layout-component";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import LiveDemo from "./live-demo";
import { Link } from "react-router-dom";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";

const ComponentLayout = ({ jsonObject }) => {
  const {
    seoTitle,
    seoDescription,
    seoKeywords,
    pageTitle,
    pageDescription,
    pageImage,
    types,
    interactiveDemo,
    accessibity,
    examples: jsonToDisplay,
    references,
    nextNavigation,
    previousNavigation,
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
    <LayoutComponent
      title={seoTitle}
      description={seoDescription}
      keywords={seoKeywords}
    >
      <div className="header_pattern">
        <div className="header_container header_container_left flex_center">
          <h4 className="pageTitle" style={{ flexShrink: 1 }}>
            {pageTitle}
          </h4>
          {pageDescription.map((item) => (
            <p style={{ paddingBottom: "12px", lineHeight: "1.25rem" }}>
              {item}
            </p>
          ))}
        </div>
        <div className="header_container header_container_right">
          <img
            src={pageImage}
            alt="hero-image"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
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
        {typeof interactiveDemo === "object" && (
          <LiveDemo demo={interactiveDemo} id="demo" />
        )}
        {typeof accessibity === "string" && accessibity.length > 0 && (
          <>
            <h2 id="accessibity">Accessibity</h2>
            <p>{accessibity}</p>
          </>
        )}
        {jsonToDisplay?.map((item, index) => (
          <div key={index} className="gap-each-section" id={item.id}>
            <h2>
              {/* <a href={item?.["id-link"]} className="link-hover"> */}
              {item.title}
              {/* </a> */}
            </h2>
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
                {item.codeBlock}
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
      <div className="main-footer-navigation">
        <Link
          to={previousNavigation?.link}
          className="back-to-components-link"
          style={{ visibility: previousNavigation === null && "hidden" }}
        >
          <DoubleArrowRoundedIcon style={{ transform: "rotate(180deg)" }} />
          {previousNavigation?.title}
        </Link>
        <Link
          to={nextNavigation?.link}
          className="back-to-components-link"
          style={{ visibility: nextNavigation === null && "hidden" }}
        >
          {nextNavigation?.title}
          <DoubleArrowRoundedIcon />
        </Link>
      </div>
    </LayoutComponent>
  );
};

export default ComponentLayout;

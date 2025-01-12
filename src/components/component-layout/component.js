import React from "react";
import ComponentLayout from "./component-layout";

const ComponentBlock = ({ jsonObject }) => {
  return (
    <>
      <ComponentLayout jsonObject={jsonObject} />
      <section className="sidebar-right">
        <div className="scroll-wrapper">
          <p style={{ fontSize: "11px" }}>On this page:</p>
          <p style={{ fontSize: "24px", fontWeight: 700, margin: "10px 0" }}>
            {jsonObject.pageTitle}
          </p>
          <ul>
            {Object.entries(jsonObject.links).map(([linkKey, linkvalue]) => {
              if (typeof linkvalue === "string") {
                return (
                  <li>
                    <a href={linkvalue}>{linkKey}</a>
                  </li>
                );
              } else if (typeof linkvalue === "object") {
                return (
                  <li>
                    <p>{linkKey}</p>
                    <ul>
                      {Object.entries(linkvalue).map(([itemKey, itemValue]) => (
                        <li>
                          <a href={itemValue}>{itemKey}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return 0;
            })}
            {/* <li>
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
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ComponentBlock;

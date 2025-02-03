import React from "react";

const ComponentRight = ({ pageTitle, links }) => {
  return (
    <section className="sidebar-right">
      <div className="scroll-wrapper">
        <p style={{ fontSize: "11px" }}>On this page:</p>
        <p style={{ fontSize: "24px", fontWeight: 700, margin: "10px 0" }}>
          {pageTitle}
        </p>
        <ul>
          {Object.entries(links).map(([linkKey, linkvalue]) => {
            if (typeof linkvalue === "string") {
              return (
                <li>
                  <a href={linkvalue} className="link-hover">
                    {linkKey}
                  </a>
                </li>
              );
            } else if (typeof linkvalue === "object") {
              return (
                <li>
                  <p>{linkKey}</p>
                  <ul>
                    {Object.entries(linkvalue).map(([itemKey, itemValue]) => (
                      <li>
                        <a href={itemValue} className="link-hover">
                          {itemKey}
                        </a>
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
  );
};

export default ComponentRight;

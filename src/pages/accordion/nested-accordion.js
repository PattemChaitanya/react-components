import React, { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

const accordionData = [
  {
    title: "Section 1",
    content: "Content for section 1.",
    childArray: [
      {
        title: "Subsection 1.1",
        content: "Content for subsection 1.1.",
      },
      {
        title: "Subsection 1.2",
        content: "Content for subsection 1.2.",
      },
    ],
  },
  {
    title: "Section 2",
    content: "Content for section 2.",
    childArray: null,
  },
];

const NestedAccordion = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  const [childActiveIndex, setChildActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChildToggle = (index) => {
    setChildActiveIndex(childActiveIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {accordionData.map((item, index) => (
        <div key={index} style={styles.section}>
          <div style={styles.title} onClick={() => handleToggle(index)}>
            {item.title}
            <span style={styles.icon}>
              {activeIndex === index ? (
                <ArrowDropUpRoundedIcon />
              ) : (
                <ArrowDropDownRoundedIcon />
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div style={styles.content}>
              <p>{item.content}</p>
              {item?.childArray?.map((child, childIndex) => (
                <div key={childIndex} style={styles.section}>
                  <div
                    style={styles.title}
                    onClick={() => handleChildToggle(childIndex)}
                  >
                    {child.title}
                    <span style={styles.icon}>
                      {childActiveIndex === childIndex ? (
                        <ArrowDropUpRoundedIcon />
                      ) : (
                        <ArrowDropDownRoundedIcon />
                      )}
                    </span>
                  </div>
                  {childActiveIndex === childIndex && (
                    <div style={styles.content}>
                      <p>{child.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    margin: "0 auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  section: {
    borderBottom: "1px solid #ddd",
  },
  title: {
    padding: "15px",
    backgroundColor: "#cecece",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    userSelect: "none",
    color: "#000",
  },
  content: {
    padding: "15px",
    backgroundColor: "#fff",
    color: "#292929",
  },
  icon: {
    marginLeft: "10px",
  },
};

export default NestedAccordion;

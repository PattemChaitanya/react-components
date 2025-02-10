import React, { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

const accordionData = [
  {
    title: "Section 1",
    content: "Content for section 1.",
    openIcon: <ArrowDropDownRoundedIcon />,
    closeIcon: <ArrowDropUpRoundedIcon />,
  },
  {
    title: "Section 2",
    content: "Content for section 2.",
    openIcon: <ArrowDropDownRoundedIcon />,
    closeIcon: <ArrowDropUpRoundedIcon />,
  },
  {
    title: "Section 3",
    content: "Content for section 3.",
    openIcon: <ArrowDropDownRoundedIcon />,
    closeIcon: <ArrowDropUpRoundedIcon />,
  },
];

const AccordionWithIcon = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {accordionData.map((item, index) => (
        <div key={index} style={styles.section}>
          <div style={styles.title} onClick={() => handleToggle(index)}>
            {item.title}
            <i style={styles.icon}>
              {activeIndex === index ? item["closeIcon"] : item["openIcon"]}
            </i>
          </div>
          {activeIndex === index && (
            <div style={styles.content}>{item.content}</div>
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

export default AccordionWithIcon;

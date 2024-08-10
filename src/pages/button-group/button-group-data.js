import HorizontalButtonGroup from "./horizontal-button-group";
import VerticalButtonGroup from "./vertical-button-group";

export const jsonToPageDisplay = {
  pageTitle: "Button group",
  description: "Grouping of buttons",
  jsonToDisplay: [
    {
      title: "Vertical button group",
      subTitle: "vertical button group",
      toDisplay: `import React from "react";

const buttonStyle = {
  width: "100%",
  border: "1px solid #ccc",
};

const styles = {
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    marginInline: "auto",
  },
  firstButtonStyle: {
    ...buttonStyle,
    borderRadius: "4px 4px 0 0",
    borderBottom: "none",
  },
  middleButtonStyle: {
    ...buttonStyle,
    borderRadius: "0",
    borderBottom: "none",
  },
  lastButtonStyle: {
    ...buttonStyle,
    borderRadius: "0 0 4px 4px",
  },
};

const VerticalButtonGroup = () => {
  return (
    <div style={styles.containerStyle}>
      <button type="button" style={styles.firstButtonStyle}>
        Button 1
      </button>
      <button type="button" style={styles.middleButtonStyle}>
        Button 2
      </button>
      <button type="button" style={styles.lastButtonStyle}>
        Button 3
      </button>
    </div>
  );
};

export default VerticalButtonGroup;
`,
      component: <VerticalButtonGroup />,
      open: false,
    },
    {
      title: "Horizontal button group",
      subTitle: "Horizontal button group",
      toDisplay: `import React from "react";

const buttonStyle = {
  width: "fit-content",
  border: "1px solid #ccc",
};

const styles = {
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
    marginInline: "auto",
  },
  firstButtonStyle: {
    ...buttonStyle,
    borderRadius: "4px 0 0 4px",
  },
  middleButtonStyle: {
    ...buttonStyle,
    borderRadius: "0",
    borderLeft: "none",
  },
  lastButtonStyle: {
    ...buttonStyle,
    borderRadius: "0 4px 4px 0",
    borderLeft: "none",
  },
};

const HorizontalButtonGroup = () => {
  return (
    <div style={styles.containerStyle}>
      <button type="button" style={styles.firstButtonStyle}>
        Button 1
      </button>
      <button type="button" style={styles.middleButtonStyle}>
        Button 2
      </button>
      <button type="button" style={styles.lastButtonStyle}>
        Button 3
      </button>
    </div>
  );
};

export default HorizontalButtonGroup;
`,
      component: <HorizontalButtonGroup />,
      open: false,
    },
  ],
};

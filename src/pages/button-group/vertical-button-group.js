import React from "react";

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

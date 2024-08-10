import React from "react";

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

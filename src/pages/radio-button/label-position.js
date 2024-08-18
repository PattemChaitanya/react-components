import React from "react";

const labelPositionStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "300px",
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
};

const LabelPosition = () => {
  return (
    <div style={labelPositionStyles.container}>
      <label style={labelPositionStyles.label}>Label Position</label>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <label htmlFor="left">Left</label>
          <input type="radio" id="left" name="labelPosition" value="left" />
        </div>
        <div style={{ display: "flex" }}>
          <input type="radio" id="right" name="labelPosition" value="right" />
          <label htmlFor="right">Right</label>
        </div>
        <div>
          <label htmlFor="top">Top</label>
          <input type="radio" id="top" name="labelPosition" value="top" />
        </div>
        <div>
          <input type="radio" id="bottom" name="labelPosition" value="bottom" />
          <label htmlFor="bottom">Bottom</label>
        </div>
      </form>
    </div>
  );
};

export default LabelPosition;

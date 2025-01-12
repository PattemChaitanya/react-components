import React from "react";

const simpleCheckBoxStyles = {
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
};

const SimpleCheckBox = () => {
  return (
    <div style={simpleCheckBoxStyles.container}>
      <h2>Simple Check-box</h2>
    </div>
  );
};

export default SimpleCheckBox;

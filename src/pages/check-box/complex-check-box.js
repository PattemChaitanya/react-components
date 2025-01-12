import React from "react";

const complexCheckBoxStyles = {
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

const ComplexCheckBox = () => {
  return (
    <div style={complexCheckBoxStyles.container}>
      <h2>Complex Check-box</h2>
    </div>
  );
};

export default ComplexCheckBox;

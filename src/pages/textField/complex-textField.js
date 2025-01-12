import React from "react";

const complexTextFieldStyles = {
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

const ComplexTextField = () => {
  return (
    <div style={complexTextFieldStyles.container}>
      <h2>Complex TextField</h2>
    </div>
  );
};

export default ComplexTextField;
    
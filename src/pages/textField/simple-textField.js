import React from "react";

const simpleTextFieldStyles = {
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

const SimpleTextField = () => {
  return (
    <div style={simpleTextFieldStyles.container}>
      <h2>Simple TextField</h2>
    </div>
  );
};

export default SimpleTextField;
    
import React from "react";

const complexSelectBoxStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "300px",
  },
};

const ComplexSelectBox = () => {
  return (
    <div style={complexSelectBoxStyles.container}>
      <h2>Complex SelectBox</h2>
    </div>
  );
};

export default ComplexSelectBox;
    
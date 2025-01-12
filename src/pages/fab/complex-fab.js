import React from "react";

const complexFabStyles = {
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

const ComplexFab = () => {
  return (
    <div style={complexFabStyles.container}>
      <h2>Complex Fab</h2>
    </div>
  );
};

export default ComplexFab;
    
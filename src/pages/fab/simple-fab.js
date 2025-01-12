import React from "react";

const simpleFabStyles = {
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

const SimpleFab = () => {
  return (
    <div style={simpleFabStyles.container}>
      <h2>Simple Fab</h2>
    </div>
  );
};

export default SimpleFab;
    
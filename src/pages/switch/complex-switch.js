import React from "react";

const complexSwitchStyles = {
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

const ComplexSwitch = () => {
  return (
    <div style={complexSwitchStyles.container}>
      <h2>Complex Switch</h2>
    </div>
  );
};

export default ComplexSwitch;
    
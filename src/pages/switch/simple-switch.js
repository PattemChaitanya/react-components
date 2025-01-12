import React from "react";

const simpleSwitchStyles = {
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

const SimpleSwitch = () => {
  return (
    <div style={simpleSwitchStyles.container}>
      <h2>Simple Switch</h2>
    </div>
  );
};

export default SimpleSwitch;
    
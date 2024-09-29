import React from "react";

const simpleDatepickerStyles = {
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

const SimpleDatepicker = () => {
  return (
    <div style={simpleDatepickerStyles.container}>
      <h2>Simple Datepicker</h2>
    </div>
  );
};

export default SimpleDatepicker;
    
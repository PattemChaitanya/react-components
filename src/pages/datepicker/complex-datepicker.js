import React from "react";

const complexDatepickerStyles = {
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

const ComplexDatepicker = () => {
  return (
    <div style={complexDatepickerStyles.container}>
      <h2>Complex Datepicker</h2>
    </div>
  );
};

export default ComplexDatepicker;
    
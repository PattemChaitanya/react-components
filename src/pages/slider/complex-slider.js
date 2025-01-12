import React from "react";

const complexSliderStyles = {
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

const ComplexSlider = () => {
  return (
    <div style={complexSliderStyles.container}>
      <h2>Complex Slider</h2>
    </div>
  );
};

export default ComplexSlider;
    
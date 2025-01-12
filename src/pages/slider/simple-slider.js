import React from "react";

const simpleSliderStyles = {
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

const SimpleSlider = () => {
  return (
    <div style={simpleSliderStyles.container}>
      <h2>Simple Slider</h2>
    </div>
  );
};

export default SimpleSlider;
    
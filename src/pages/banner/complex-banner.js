import React from "react";

const complexBannerStyles = {
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

const ComplexBanner = () => {
  return (
    <div style={complexBannerStyles.container}>
      <h2>Complex Banner</h2>
    </div>
  );
};

export default ComplexBanner;
    
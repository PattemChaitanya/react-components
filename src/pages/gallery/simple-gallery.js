import React from "react";

const simpleGalleryStyles = {
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

const SimpleGallery = () => {
  return (
    <div style={simpleGalleryStyles.container}>
      <h2>Simple Gallery</h2>
    </div>
  );
};

export default SimpleGallery;
    
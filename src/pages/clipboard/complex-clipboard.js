import React from "react";

const complexClipboardStyles = {
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

const ComplexClipboard = () => {
  return (
    <div style={complexClipboardStyles.container}>
      <h2>Complex Clipboard</h2>
    </div>
  );
};

export default ComplexClipboard;
    
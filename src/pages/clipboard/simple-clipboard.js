import React from "react";

const simpleClipboardStyles = {
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

const SimpleClipboard = () => {
  return (
    <div style={simpleClipboardStyles.container}>
      <h2>Simple Clipboard</h2>
    </div>
  );
};

export default SimpleClipboard;
    
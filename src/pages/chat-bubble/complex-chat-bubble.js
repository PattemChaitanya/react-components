import React from "react";

const complexChatBubbleStyles = {
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

const ComplexChatBubble = () => {
  return (
    <div style={complexChatBubbleStyles.container}>
      <h2>Complex Chat-bubble</h2>
    </div>
  );
};

export default ComplexChatBubble;

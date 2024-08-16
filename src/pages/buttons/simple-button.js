import React from "react";

const SimpleButton = () => {
  const styles = {
    base: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      margin: "5px",
    },
    primary: {
      backgroundColor: "#007bff",
      color: "white",
    },
    disabled: {
      backgroundColor: "#e0e0e0",
      color: "#9e9e9e",
      cursor: "not-allowed",
    },
    success: {
      backgroundColor: "#28a745",
      color: "white",
    },
  };

  return (
    <div>
      <button style={{ ...styles.base, ...styles.primary }}>Primary</button>
      <button style={{ ...styles.base, ...styles.disabled }} disabled>
        Disabled
      </button>
      <button style={{ ...styles.base, ...styles.success }}>Success</button>
    </div>
  );
};

export default SimpleButton;

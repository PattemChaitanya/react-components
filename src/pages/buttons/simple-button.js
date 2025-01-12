import React, { useState } from "react";

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
  // const [buttonStates, setButtonStates] = useState({
  //   isText: false,
  //   isFilled: false,
  //   isFilledTonal: false,
  //   isOutlined: false,
  // });
  const [isIconsRequired, setIsIconsRequired] = useState(false);
  console.log(isIconsRequired, "icons");

  return (
    <div style={{ height: "inherit", display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: "16px" }}>
        <button style={{ ...styles.base, ...styles.primary }}>Primary</button>
        <button style={{ ...styles.base, ...styles.disabled }} disabled>
          Disabled
        </button>
        <button style={{ ...styles.base, ...styles.success }}>Success</button>
      </div>
      <div
        style={{
          width: "150px",
          padding: "16px 8px",
          borderLeft: "1px solid black",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {[
          "Text button",
          "Filled button",
          "Filled Tonal button",
          "Outlined button",
        ].map((item, index) => (
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="radio"
              value={item}
              aria-label="button-types"
              label={item}
            />
            <p>{item}</p>
          </div>
        ))}
        <hr />
        {["With Icons", "Without Icons"].map((item, index) => (
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="radio"
              value={index === 0 ? true : false}
              aria-label="button-icons"
              label={item}
              onChange={() => setIsIconsRequired(index === 0 ? true : false)}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleButton;

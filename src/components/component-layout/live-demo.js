import React from "react";

const LiveDemo = ({ demo, id }) => {
  return (
    <div
      id={id}
      style={{ display: "flex", flexDirection: "column", gap: "12px" }}
    >
      <h2>Demo</h2>
      <div style={{ height: "300px", border: "1px solid black" }}>{demo}</div>
    </div>
  );
};

export default LiveDemo;

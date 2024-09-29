import React from "react";

const Avatar = (props) => {
  const { url, name, color } = props;
  const colors = ["#f1f1f1", "#efdcaa", "#cccbbb", "#8ba0a4"];
  const getRandomColors = () => Math.floor(Math.random() * 4);

  return (
    <div
      style={{
        width: "inherit",
        height: "inherit",
        borderRadius: "50%",
        background: color ?? colors[getRandomColors()],
      }}
    >
      {url ? (
        <img
          src={url}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "inherit",
          }}
        >
          {name.charAt(0).toUpperCase()}
        </p>
      )}
    </div>
  );
};

export default Avatar;

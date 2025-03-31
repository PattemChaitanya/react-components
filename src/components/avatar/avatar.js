import React from "react";

const Avatar = (props) => {
  const { url, name, color, size = 'medium', className = '' } = props;
  const colors = ["#f1f1f1", "#efdcaa", "#cccbbb", "#8ba0a4"];
  const getRandomColors = () => Math.floor(Math.random() * 4);
  
  // Creating an accessible description
  const ariaLabel = url ? `${name}'s profile picture` : `${name}'s avatar with initial ${name.charAt(0).toUpperCase()}`;

  return (
    <div
      className={`avatar ${size} ${className}`}
      style={{
        width: "inherit",
        height: "inherit",
        borderRadius: "50%",
        background: color ?? colors[getRandomColors()],
      }}
      role="img"
      aria-label={ariaLabel}
    >
      {url ? (
        <img
          src={url}
          alt={`${name}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
        />
      ) : (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "inherit",
            fontWeight: "bold",
            userSelect: "none",
          }}
          aria-hidden="true"
        >
          {name.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default Avatar;

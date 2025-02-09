import React, { useState } from "react";
import "./icon-button.css";
import {
  Refresh,
  FavoriteBorder,
  Favorite,
  Notifications,
} from "@mui/icons-material";

const IconButton = ({ Icon, onClick, label }) => {
  return (
    <i className="icon-button" onClick={onClick} aria-label={label}>
      <Icon fontSize="inherit" />
    </i>
  );
};

export const SimpleIconButton = () => {
  return (
    <div>
      <IconButton
        Icon={Refresh}
        onClick={() => alert("Refresh clicked!")}
        label="Refresh"
      />
    </div>
  );
};

export const ToggleIconButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <i
      className={`icon-button ${liked ? "active" : ""}`}
      onClick={() => setLiked(!liked)}
      aria-label="Toggle favorite"
    >
      {liked ? (
        <Favorite fontSize="inherit" />
      ) : (
        <FavoriteBorder fontSize="inherit" />
      )}
    </i>
  );
};

export const IconButtonWithBadge = ({ count }) => {
  return (
    <button className="icon-button">
      <i>
        <Notifications fontSize="inherit" />
      </i>
      {count > 0 && <span className="badge">{count > 99 ? "99+" : count}</span>}
    </button>
  );
};

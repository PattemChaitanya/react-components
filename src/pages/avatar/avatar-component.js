import React from "react";
import Flower1 from "../../assets/mansoryImages/1.jpg";
import Flower2 from "../../assets/mansoryImages/2.jpg";
import Flower3 from "../../assets/mansoryImages/3.jpg";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./avatar.css";

export const ImageAvatar = ({ alt = "component", size = "40px" }) => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      {[Flower1, Flower2, Flower3].map((item) => (
        <img
          src={item}
          alt={alt}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            objectFit: "cover",
          }}
          aria-label={alt}
        />
      ))}
    </div>
  );
};

export const TextAvatar = () => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {[..."Design"].map((letter, index) => (
        <span key={index} className="letter-avatar">
          {letter}
        </span>
      ))}
    </div>
  );
};

export const IconAvatar = ({ icon, size = "40px" }) => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      {[SettingsRoundedIcon, SearchRoundedIcon].map((IconComponent, index) => (
        <IconComponent
          key={index}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
};

export const GroupedAvatar = ({
  size = "40px",
  images = [Flower1, Flower3, Flower2],
}) => {
  return (
    <div style={{ display: "flex" }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Avatar"
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            objectFit: "cover",
            marginLeft: index === 0 ? 0 : "-20px",
          }}
        />
      ))}
    </div>
  );
};

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const simpleDrawerStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "60px",
    transition: "width 0.3s ease",
  },
  expanded: {
    width: "200px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    color: "#333",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
  icon: {
    marginRight: "15px",
    fontSize: "20px",
  },
  label: {
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  visible: {
    opacity: 1,
  },
  toggleButton: {
    alignSelf: "flex-end",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    marginBottom: "10px",
  },
};

const SimpleDrawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleDrawer = () => setIsExpanded(!isExpanded);

  const links = [
    { icon: <HomeIcon />, label: "Home" },
    { icon: <PersonIcon />, label: "Profile" },
    { icon: <SettingsIcon />, label: "Settings" },
    { icon: <MailIcon />, label: "Messages" },
  ];

  return (
    <div
      style={{
        ...simpleDrawerStyles.container,
        ...(isExpanded && simpleDrawerStyles.expanded),
      }}
    >
      <button style={simpleDrawerStyles.toggleButton} onClick={toggleDrawer}>
        {isExpanded ? <CloseIcon /> : <MenuIcon />}
      </button>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          style={simpleDrawerStyles.link}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <span style={simpleDrawerStyles.icon}>{link.icon}</span>
          <span
            style={{
              ...simpleDrawerStyles.label,
              ...(isExpanded && simpleDrawerStyles.visible),
              ...(hoveredLink === index &&
                !isExpanded &&
                simpleDrawerStyles.visible),
            }}
          >
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SimpleDrawer;

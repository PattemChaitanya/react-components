/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Notifications as NotificationsIcon,
  Bookmark as BookmarkIcon,
  ExitToApp as ExitToAppIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";

const complexDrawerStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "60px",
    height: "100%",
    transition:
      "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, color 0.3s ease",
    position: "relative",
    overflow: "hidden",
  },
  expanded: {
    width: "250px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    textDecoration: "none",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    borderRadius: "8px",
    marginBottom: "5px",
  },
  activeLink: {
    fontWeight: "bold",
  },
  icon: {
    marginRight: "15px",
    fontSize: "24px",
    transition: "color 0.3s ease",
  },
  label: {
    opacity: 0,
    transition: "opacity 0.3s ease, transform 0.3s ease",
    transform: "translateX(-20px)",
  },
  visible: {
    opacity: 1,
    transform: "translateX(0)",
  },
  toggleButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    zIndex: 10,
  },
  footer: {
    marginTop: "auto",
    borderTop: "1px solid",
    paddingTop: "10px",
  },
  notification: {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
  },
};

const ComplexDrawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDrawer = () => setIsExpanded(!isExpanded);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const links = [
    { icon: <HomeIcon />, label: "Home" },
    { icon: <PersonIcon />, label: "Profile" },
    { icon: <SettingsIcon />, label: "Settings" },
    { icon: <MailIcon />, label: "Messages" },
    { icon: <NotificationsIcon />, label: "Notifications" },
    { icon: <BookmarkIcon />, label: "Bookmarks" },
  ];

  const containerStyle = {
    ...complexDrawerStyles.container,
    ...(isExpanded && complexDrawerStyles.expanded),
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
  };

  const linkStyle = (index) => ({
    ...complexDrawerStyles.link,
    ...(activeLink === index && complexDrawerStyles.activeLink),
    backgroundColor:
      activeLink === index ? (isDarkMode ? "#555" : "#f0f0f0") : "transparent",
    color: isDarkMode ? "#fff" : "#333",
  });

  return (
    <div style={containerStyle}>
      <button style={complexDrawerStyles.toggleButton} onClick={toggleDrawer}>
        {isExpanded ? <CloseIcon /> : <MenuIcon />}
      </button>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          style={linkStyle(index)}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => setActiveLink(index)}
        >
          <span
            style={{
              ...complexDrawerStyles.icon,
              color: activeLink === index ? "#007bff" : "inherit",
            }}
          >
            {link.icon}
          </span>
          <span
            style={{
              ...complexDrawerStyles.label,
              ...(isExpanded && complexDrawerStyles.visible),
              ...(hoveredLink === index &&
                !isExpanded &&
                complexDrawerStyles.visible),
            }}
          >
            {link.label}
          </span>
        </a>
      ))}
      <div
        style={{
          ...complexDrawerStyles.footer,
          borderColor: isDarkMode ? "#555" : "#eaeaea",
        }}
      >
        <a href="#" style={complexDrawerStyles.link} onClick={toggleDarkMode}>
          <span style={complexDrawerStyles.icon}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </span>
          <span
            style={{
              ...complexDrawerStyles.label,
              ...(isExpanded && complexDrawerStyles.visible),
            }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </a>
        <a
          href="#"
          style={complexDrawerStyles.link}
          onClick={() => alert("Logging out...")}
        >
          <span style={complexDrawerStyles.icon}>
            <ExitToAppIcon />
          </span>
          <span
            style={{
              ...complexDrawerStyles.label,
              ...(isExpanded && complexDrawerStyles.visible),
            }}
          >
            Logout
          </span>
        </a>
      </div>
    </div>
  );
};

export default ComplexDrawer;

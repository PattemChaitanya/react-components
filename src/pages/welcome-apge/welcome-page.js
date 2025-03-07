/* eslint-disable no-restricted-globals */
import React from "react";
import "./welcome-page.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import useTheme from "../../hooks/useTheme";

const WelcomeSection = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hero">
      <i onClick={toggleTheme}>
        {theme === "light" ? <WbSunnyRoundedIcon /> : <DarkModeIcon />}
      </i>
      <div className="hero-container">
        <h1 className="hero-header-title">JSX to WEB</h1>
        <h1 className="hero-title">
          Start Building with React and Web Fundamentals
        </h1>
        <p className="hero-subtitle">
          Learn React from scratch, explore custom components, and master web
          fundamentals with hands-on examples.
        </p>

        <div className="hero-buttons">
          {/* <button
            className="welcome-btn primary"
            onClick={() => (window.location.href = "/")}
          >
            Beginner Guide
          </button> */}
          <button
            className="welcome-btn secondary"
            onClick={() => (window.location.href = "/all-components")}
          >
            Explore Components
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

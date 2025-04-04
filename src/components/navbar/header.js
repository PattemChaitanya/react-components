import React, { useState } from "react";
import "./header.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { homeScreenCards } from "../../constants/sidebarConstants";
import { IconButton } from "@mui/material";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();
  const { theme: mode, toggleTheme } = useTheme();

  const handleOpen = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="body-container">
      <header>
        <nav aria-label="Main Navigation">
          <div className="row-align-center">
            <div className="ham-menu">
              <IconButton 
                onClick={handleOpen} 
                aria-label={isOpenMenu ? "Close menu" : "Open menu"}
                aria-expanded={isOpenMenu}
                aria-controls="side-menu"
                aria-haspopup="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  className={`${mode === "dark" ? "light-mode" : "dark-mode"}`}
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
                    fill="currentColor"
                  ></path>
                </svg>
              </IconButton>
            </div>
            <div className="svg-logo">
              <IconButton 
                onClick={navigateHome} 
                aria-label="Home"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${mode === "dark" ? "light-mode" : "dark-mode"}`}
                  aria-hidden="true"
                  role="img"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                  />
                  <path
                    d="M25,70 L37,30 L50,55 L63,30 L75,70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                  />
                </svg>
              </IconButton>
            </div>
            <h1 className="nav-header-typo" onClick={navigateHome}>
              <span role="button" tabIndex="0" onKeyDown={(e) => {if (e.key === 'Enter') navigateHome();}}>
                JSX to Web
              </span>
            </h1>
          </div>
          <div className="row-align-center">
            <IconButton
              component="a"
              target="_blank"
              href="https://github.com/PattemChaitanya/react-components"
              aria-label="GitHub Repository"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className={`${mode === "dark" ? "light-mode" : "dark-mode"}`}
                aria-hidden="true"
                role="img"
              >
                <path
                  d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"
                  fill="currentColor"
                ></path>
              </svg>
            </IconButton>
            <button
              onClick={toggleTheme}
              style={{
                padding: "8px",
                cursor: "pointer",
                transition: "all 0.5s ease-in-out",
                background: "none",
                border: "none"
              }}
              aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {mode === "light" ? (
                <WbSunnyRoundedIcon
                  className={`light-mode-svg ${
                    mode === "dark" ? "light-mode-active" : "dark-mode-active"
                  }`}
                  aria-hidden="true"
                />
              ) : (
                <DarkModeIcon
                  className={`dark-mode-svg ${
                    mode === "light" ? "dark-mode-active" : "light-mode-active"
                  }`}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </nav>
      </header>
      <aside 
        id="side-menu"
        className={`sideMenu ${isOpenMenu ? "sideOpen" : ""}`}
        aria-hidden={!isOpenMenu}
        aria-label="Component Navigation"
      >
        <Link
          to="/all-components"
          className="sideMenu_left_header sidebar_left_para_header"
        >
          All Components
        </Link>        
        {/* {homeScreenCards.map((item, itemIndex) => (
          <React.Fragment key={itemIndex}>
            <h2 className="sidebar_left_para_header transition-color">
              {item.title}
            </h2>
            <nav aria-label={`${item.title} Navigation`}>
              <ul className="sidebar-nav-list" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {item.components.map((component, index) => (
                  <li key={index}>
                    <NavLink
                      to={component.path}
                      className={({ isActive }) =>
                        isActive ? "sideMenu_left_para active" : "sideMenu_left_para"
                      }
                      onClick={handleOpen}
                    >
                      {component.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </React.Fragment>
        ))} */}
        {homeScreenCards.map((item, itemIndex) => (
          <React.Fragment key={itemIndex}>
            <h2 className="sidebar_left_para_header transition-color">{item.title}</h2>
              <ul aria-label={`${item.title} Navigation`} style={{ display: "flex", flexDirection: "column", gap: "8px", margin: 0, padding: 0, listStyle: "none" }}>
                {item.components.map((component, index) => (
                    <NavLink
                      component={"li"}
                      to={component.path}
                      key={index}
                      className={({ isActive }) =>
                        isActive ? "sideMenu_left_para active" : "sideMenu_left_para"
                      }
                    >
                      {component.title}
                    </NavLink>
                ))}
              </ul>
          </React.Fragment>
        ))}
      </aside>
      {isOpenMenu && (
        <div 
          className="sideMenu-container" 
          onClick={handleOpen}
          role="presentation"
          aria-hidden="true"
        />
      )}
      <main id="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Header;

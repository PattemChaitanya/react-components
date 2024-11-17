import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import { components, newMenu } from "../../constants/sidebarConstants";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const width = window.innerWidth;
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname.split("/")[1];
  const [count, setCount] = useState(
    parseInt(window.localStorage.getItem("mode"), 10) || 0
  );
  const colorTheme = ["light", "dark"];

  useEffect(() => {
    const theme = colorTheme[count];
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("mode", count.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const updatingCount = () => {
    setCount((prevCount) => (prevCount + 1) % colorTheme.length);
  };

  const handleOpen = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const navigateHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (width > 480) {
      setIsOpenMenu(false);
    }
  }, [width]);

  return (
    <div className="body-container">
      <nav>
        <div className="row-align-center">
          <div className="ham-menu">
            <IconButton onClick={handleOpen}>
              <MenuRoundedIcon
                className={`mode-font ${
                  count === 1 ? "light-mode" : "dark-mode"
                }`}
              />
            </IconButton>
          </div>
          <div
            className={`svg-logo ${count === 1 ? "light-mode" : "dark-mode"}`}
          >
            <IconButton onClick={navigateHome}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className={`${count === 1 ? "light-mode" : "dark-mode"}`}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  stroke-width="6"
                  fill="none"
                />

                <path
                  d="M25,70 L37,30 L50,55 L63,30 L75,70"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="6"
                />
              </svg>
            </IconButton>
          </div>
          <h6 className="nav-header-typo" onClick={navigateHome}>
            Header
          </h6>
        </div>
        <div className="row-align-center">
          <IconButton>
            <GitHubIcon
              className={`mode-font ${
                count === 1 ? "light-mode" : "dark-mode"
              }`}
            />
          </IconButton>
          <IconButton onClick={updatingCount}>
            {count === 1 ? (
              <WbSunnyRoundedIcon className="mode-font light-mode" />
            ) : (
              <DarkModeIcon className="mode-font dark-mode" />
            )}
          </IconButton>
        </div>
        {isOpenMenu && (
          <div className="sideMenu">
            {pathname === "components" ? (
              components.map((item, index) => (
                <Link to={item.to} key={index}>
                  {item.title}
                </Link>
              ))
            ) : (
              <>
                <Link to="/">Home</Link>
                {newMenu.map((item, index) => (
                  <Link to={item.path} key={index} onClick={handleOpen}>
                    {item.title}
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
        {/* <div className="right-menu">
          <Link to="/">Features</Link>
          <Link to="/components">Component</Link>
        </div> */}

        {/* <button onClick={() => updatingCount()}>
            {colorTheme[count] === "light" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeIcon />
            )}
          </button> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, Outlet, useLocation } from "react-router-dom";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { components, newMenu } from "../../constants/sidebarConstants";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const width = window.innerWidth;
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  // const [count, setCount] = useState(
  //   parseInt(window.localStorage.getItem("mode"), 10) || 0
  // );
  // const colorTheme = ["light", "dark"];

  // useEffect(() => {
  //   const theme = colorTheme[count];
  //   document.body.setAttribute("data-theme", theme);
  //   window.localStorage.setItem("mode", count.toString());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [count]);

  // const updatingCount = () => {
  //   setCount((prevCount) => (prevCount + 1) % colorTheme.length);
  // };

  useEffect(() => {
    if (width > 480) {
      setIsOpenMenu(false);
    }
  }, [width]);

  console.log(width, "name width");

  return (
    <div className="main">
      <nav className="navbar">
        <p>Components</p>
        <div className="ham-menu">
          <IconButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <MenuRoundedIcon />
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
                  <Link to={item.path} key={index}>
                    {item.title}
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
        <div className="right-menu">
          <Link to="/">Features</Link>
          <Link to="/components">Component</Link>
        </div>

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

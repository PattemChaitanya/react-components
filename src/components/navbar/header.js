import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, Outlet } from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Header = () => {
  const [count, setCount] = useState(parseInt(window.localStorage.getItem("mode"), 10) || 0);
  const colorTheme = ["light", "dark"];

  useEffect(() => {
    const theme = colorTheme[count];
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("mode", count.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const updatingCount = () => {
    setCount(prevCount => (prevCount + 1) % colorTheme.length);
  };

  return (
    <div className="main">
      <nav className="navbar">

        <p>Components</p>
        <Link to="/">Features</Link>
        <Link to="/components">Component</Link>
        <button onClick={() => updatingCount()}>
          {colorTheme[count] === "light" ? <LightModeOutlinedIcon /> : <DarkModeIcon />}
        </button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;

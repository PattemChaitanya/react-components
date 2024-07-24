import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [count, setCount] = useState(0);
  const colorTheme = ["light", "dark", "blue", "green", "red"];

  useEffect(() => {
    if (count !== 0) {
      document.body.setAttribute("data-theme", colorTheme[count]);
    } else {
      document.body.removeAttribute("data-theme");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const updatingCount = () => {
    if (colorTheme.length - 1 === count) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="main">
      <nav className="navbar">
        <p>Css</p>
        <Link to="/">Features</Link>
        <Link to="/components">Component</Link>
        <button onClick={() => updatingCount()}> change theme</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;

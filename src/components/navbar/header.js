import React, { useEffect, useState } from "react";
import "./header.css";
import { Outlet } from "react-router-dom";

const Header = () => {
  const [count, setCount] = useState(0);
  const colorTheme = ["light", "dark", "blue", "green", "red"];

  useEffect(() => {
    if (count !== 0) {
      document.body.setAttribute("data-theme", colorTheme[count]);
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [count]);

  const updatingCount = () => {
    if (colorTheme.length - 1 === count) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div class="main">
      <nav class="navbar">
        <p>Css</p>
        <button onClick={() => updatingCount()}> change theme</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;

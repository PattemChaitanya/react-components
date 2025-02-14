import { useEffect, useState } from "react";

const useTheme = () => {
  let mode = window.localStorage.getItem("theme");
  let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    mode || (darkThemeMq && "dark") || "light"
  );

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    window.localStorage.setItem("theme", mode);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};
export default useTheme;

import React, { useEffect, useRef, useState } from "react";
import "./menu.css";

export const MegaMenu = ({ menuItems }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="mega-menu-wrapper">
      <div className="mega-menu">
        <ul className="mega-menu-list" onMouseLeave={() => setActiveMenu(null)}>
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className="mega-menu-item"
              onMouseEnter={() => setActiveMenu(index)}
            >
              {menu.label}
              {activeMenu === index && (
                <div className="mega-dropdown">
                  {menu.categories.map((category, catIndex) => (
                    <div key={catIndex} className="mega-column">
                      <h4 className="column-title">{category.title}</h4>
                      <ul>
                        {category.links.map((link, linkIndex) => (
                          <li key={linkIndex} className="mega-link">
                            <a href={link.url}>{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ContextMenu = ({ options }) => {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMenuPosition({
      x: event.target.offsetLeft,
      y: event.target.offsetHeight,
    });
    setMenuVisible(true);
  };

  return (
    <div className="context-container" onContextMenu={handleContextMenu}>
      <p>Right-click anywhere inside this box to open the context menu.</p>
      {isMenuVisible && (
        <ul
          ref={menuRef}
          className="context-menu"
          style={{ top: menuPosition.y, left: menuPosition.x }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="context-menu-item"
              onClick={option.onClick}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const NavigationMenu = ({ menuItems }) => {
  const [isLayout, setIsLayout] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      {(isSidebarOpen || isNavbarOpen) && (
        <>
          <nav className={`nav-menu ${isLayout}`}>
            {isLayout === "sidebar" && (
              <button
                className="toggle-btn"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? "☰ Close" : "☰ Open"}
              </button>
            )}
            <ul className={`menu-list ${isSidebarOpen ? "open" : "closed"}`}>
              {menuItems.map((item, index) => (
                <li key={index} className="menu-item">
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div
            style={{
              width: "100%",
              height: "100dvh",
              background: "rgba(0,0,0,0.4)",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
            }}
            onClick={() => {
              setSidebarOpen(false);
              setNavbarOpen(false);
            }}
          />
        </>
      )}
      <button
        className="toggle-btn"
        onClick={() => {
          setSidebarOpen(!isSidebarOpen);
          setNavbarOpen(false);
          setIsLayout("sidebar");
        }}
      >
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>
      <button
        className="toggle-btn"
        onClick={() => {
          setNavbarOpen(!isNavbarOpen);
          setSidebarOpen(false);
          setIsLayout("header");
        }}
      >
        {isNavbarOpen ? "Close" : "Open"} Navbar
      </button>
    </div>
  );
};

export const DropdownMenu = ({ options, label = "Menu" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {label} ▼
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item" onClick={option.onClick}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

import {
  ContextMenu,
  DropdownMenu,
  MegaMenu,
  NavigationMenu,
} from "./menu-component";

const menuContextData = {
  megaMenuItems: [
    {
      label: "Products",
      categories: [
        {
          title: "Electronics",
          links: [
            { label: "Laptops", url: "#" },
            { label: "Phones", url: "#" },
          ],
        },
        {
          title: "Home Appliances",
          links: [
            { label: "Refrigerators", url: "#" },
            { label: "Washing Machines", url: "#" },
          ],
        },
      ],
    },
    {
      label: "Services",
      categories: [
        {
          title: "Customer Support",
          links: [
            { label: "Help Center", url: "#" },
            { label: "Contact Us", url: "#" },
          ],
        },
        {
          title: "Repairs",
          links: [
            { label: "Schedule a Repair", url: "#" },
            { label: "Warranty Info", url: "#" },
          ],
        },
      ],
    },
  ],
  menuOptions: [
    { label: "Copy", onClick: () => alert("Copied!") },
    { label: "Paste", onClick: () => alert("Pasted!") },
    { label: "Delete", onClick: () => alert("Deleted!") },
  ],
  menuItems: [
    { label: "Home", url: "#" },
    { label: "About", url: "#" },
    { label: "Services", url: "#" },
    { label: "Contact", url: "#" },
  ],
  dropDownMenuOptions: [
    { label: "Profile", onClick: () => alert("Profile Clicked") },
    { label: "Settings", onClick: () => alert("Settings Clicked") },
    { label: "Logout", onClick: () => alert("Logged Out") },
  ],
};

export const menuData = {
  seoTitle: "Menu Component – A Complete Guide",
  seoDescription:
    "Learn how to design and implement menus – essential UI components for navigation, actions, and content organization in web applications.",
  seoKeywords: [
    "menu component",
    "UI menus",
    "material design menu",
    "dropdown menu",
    "context menu",
    "navigation menu",
    "mega menu",
  ],
  pageTitle: "Menu",
  pageDescription: [
    "Menus are dynamic UI components that provide navigation or action options to users.",
    "They enhance usability and content organization by grouping related actions or links in a compact interface.",
  ],
  pageImage: "https://material-web.dev/components/images/menu/hero.webp",
  types: ["Dropdown Menu", "Context Menu", "Navigation Menu", "Mega Menu"],
  interactiveDemo: "https://material-web.dev/components/menu#interactive-demo",
  accessibity:
    "Menus are designed to be accessible, with keyboard navigation, ARIA roles, and focus management for screen readers.",
  examples: [
    {
      component: <DropdownMenu options={menuContextData.dropDownMenuOptions} />,
      description:
        "A dropdown menu for displaying a list of actions or options when the user clicks a button.",
      id: "dropdown-menu",
      title: "Dropdown Menu for Actions",
      usages:
        "Use dropdown menus for showing a compact list of actions, such as account settings or filtering options.",
      purpose:
        "To group related actions in a collapsible format, saving screen space.",
      codeBlock: {
        "app.jsx": `import React from "react";
import data from "data.json";
import DropdownMenu from "./drop-down-menu";

export const App = () => {
  return (
    <DropdownMenu options={data} />
  )
};`,
        "drop-down-menu.js": `import React, { useState, useRef, useEffect } from "react";
import "./app.css";

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
};`,
        "app.css": `.dropdown {
  position: relative;
  display: inline-block;
  height: 200px;
}

.dropdown-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  height: 40px;
}

.dropdown-menu {
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 5px 0;
  margin: 0;
  width: 150px;
  border-radius: 4px;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: #292929
}

.dropdown-item:hover {
  background: #f1f1f1;
}`,
        "data.json": `[
  { label: "Profile", onClick: () => alert("Profile Clicked") },
  { label: "Settings", onClick: () => alert("Settings Clicked") },
  { label: "Logout", onClick: () => alert("Logged Out") },
]`,
      },
      open: false,
    },
    {
      component: <ContextMenu options={menuContextData.menuOptions} />,
      description:
        "A context menu for displaying contextual options when the user right-clicks on an element.",
      id: "context-menu",
      title: "Context Menu for File Actions",
      usages:
        "Use context menus for providing file or object-specific actions on right-click.",
      purpose: "To show options specific to the context of the user’s action.",
      codeBlock: {
        "app.jsx": `import React from "react";
import data from "data.json";
import ContextMenu from "./context-menu";

const App = () => {
  return (
    <ContextMenu options={data} />
  );
};`,
        "context-menu.jsx": `import React, { useEffect, useRef, useState } from "react";
import "./app.css";

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
};`,
        "app.css": `.context-container {
  width: 100%;
  height: 200px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
}

.context-menu {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 5px 0;
  margin: 0;
  z-index: 1000;
  min-width: 150px;
  border-radius: 4px;
}

.context-menu-item {
  padding: 8px 15px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: #292929;
}

.context-menu-item:hover {
  background: #f1f1f1;
}`,
        "data.json": `[
    { label: "Copy", onClick: () => alert("Copied!") },
    { label: "Paste", onClick: () => alert("Pasted!") },
    { label: "Delete", onClick: () => alert("Deleted!") },
  ]`,
      },
      open: false,
    },
    {
      component: <NavigationMenu menuItems={menuContextData.menuItems} />,
      description:
        "A navigation menu for website or app navigation, often displayed in a sidebar or header.",
      id: "navigation-menu",
      title: "Sidebar Navigation Menu",
      usages:
        "Use navigation menus for guiding users through app sections or pages.",
      purpose:
        "To create a clear and structured navigation experience for users.",
      codeBlock: {
        "app.jsx": `import React from "react";
import data from "data.json";
import NavigationMenu from "./nav";

export const App = () => {
  return (
    <NavigationMenu menuItems={menuContextData.menuItems} />
  );
};`,
        "nav.jsx": `import React, { useState } from "react";
import "./app.css";

export default const NavigationMenu = ({ menuItems }) => {
  const [isLayout, setIsLayout] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      {(isSidebarOpen || isNavbarOpen) && (
        <>
          <nav className={\`nav-menu \${isLayout}\`}>
            {isLayout === "sidebar" && (
              <button
                className="toggle-btn"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? "☰ Close" : "☰ Open"}
              </button>
            )}
            <ul className={\`menu-list \${isSidebarOpen ? "open" : "closed"}\`}>
              {menuItems.map((item, index) => (
                <li key={index} className="menu-item">
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className="background-overlay"
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
};`,
        "app.css": `.nav-menu {
  background: #333;
  color: white;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar {
  width: 200px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  transition: width 0.3s ease;
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.menu-list.open {
  display: block;
}

.menu-list.closed {
  display: none;
}

.header {
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
}

.header .menu-list {
  display: flex;
  gap: 20px;
}

.menu-item {
  padding: 10px;
}

.menu-item a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.menu-item a:hover {
  color: #007bff;
}
  
.background-overlay {
  width: 100%;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}`,
        "data.json": `[
  { label: "Home", url: "#" },
  { label: "About", url: "#" },
  { label: "Services", url: "#" },
  { label: "Contact", url: "#" },
]`,
      },
      open: false,
    },
    {
      component: <MegaMenu menuItems={menuContextData.megaMenuItems} />,
      description:
        "A mega menu for displaying extensive navigation options in a large, multi-column layout.",
      id: "mega-menu",
      title: "Mega Menu for E-Commerce",
      usages:
        "Use mega menus for websites with extensive categories, such as e-commerce or large portals.",
      purpose:
        "To organize a vast number of navigation links into a clear, hierarchical structure.",
      codeBlock: {
        "app.jsx": `import React from "react";
import data from "./data.json";
import Menu from "./Menu";
        
export const App = () => {
  return (
    <Menu menuItems={data} />
  );
};`,
        "menu.jsx": `import React, { useState } from "react";
import "./app.css";

export default const Menu = ({ menuItems }) => {
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
};`,
        "app.css": `.mega-menu-wrapper {
  width: 100%;
  height: 350px;
}

.mega-menu {
  background: #333;
  padding: 10px;
}

.mega-menu-list {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
}

.mega-menu-item {
  position: relative;
  padding: 10px 15px;
  color: white;
  cursor: pointer;
}

.mega-dropdown {
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 14px;
  border-radius: 5px;
}

.mega-column {
  min-width: 150px;
}

.mega-column ul {
  padding-inline-start: 14px;
}

.column-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.mega-link {
  list-style: none;
}

.mega-link a {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 5px 0;
  transition: color 0.2s;
}

.mega-link a:hover {
  color: #007bff;
}

@media screen and (min-width: 601px) {
  .mega-dropdown {
    flex-direction: row;
  }

  .mega-menu-wrapper {
    height: 250px;
  }
}`,
        "data.json": `[
  {
    label: "Products",
    categories: [
      {
        title: "Electronics",
        links: [
          { label: "Laptops", url: "#" },
          { label: "Phones", url: "#" },
        ],
      },
      {
        title: "Home Appliances",
        links: [
          { label: "Refrigerators", url: "#" },
          { label: "Washing Machines", url: "#" },
        ],
      },
    ],
  },
  {
    label: "Services",
    categories: [
      {
        title: "Customer Support",
        links: [
          { label: "Help Center", url: "#" },
          { label: "Contact Us", url: "#" },
        ],
      },
      {
        title: "Repairs",
        links: [
          { label: "Schedule a Repair", url: "#" },
          { label: "Warranty Info", url: "#" },
        ],
      },
    ],
  },
]`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibility: "#accessibity",
    Examples: {
      "Dropdown Menu": "#dropdown-menu",
      "Context Menu": "#context-menu",
      "Navigation Menu": "#navigation-menu",
      "Mega Menu": "#mega-menu",
    },
    References: "#references",
  },
  references: {
    "Material Design Menus": "https://material.io/components/menus",
    "W3C ARIA Menu Roles": "https://www.w3.org/TR/wai-aria-practices/#menu",
    "Dropdown Menu Accessibility":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Menu_Role",
  },
  previousNavigation: { title: "Lists", link: "/all-components/list" },
  nextNavigation: {
    title: "Radio Buttons",
    link: "/all-components/radio-buttons",
  },
};

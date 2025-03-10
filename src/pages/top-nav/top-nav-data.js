import { Navbar, NavbarDropdown, NavbarWithSearch } from "./top-nav-component";

export const topNavData = {
  seoTitle: "Top Navigation Component - Design, Usage, and Accessibility",
  seoDescription:
    "Learn how to create a responsive and accessible top navigation bar with Material Design principles, optimized for both desktop and mobile experiences.",
  seoKeywords: [
    "top navigation",
    "responsive nav bar",
    "navigation component",
    "material design navbar",
    "accessible navigation",
  ],
  pageTitle: "Top Navigation",
  pageDescription: [
    "Top navigation bars are essential for providing users with a seamless way to navigate through a website or application. Creating one from scratch offers flexibility in design and responsiveness.",
    "When building top navigation, ensure a balance between visibility, usability, and aesthetics. Consistent padding, appropriate use of icons, and focus states are essential for an intuitive experience.",
    "Ensure your navigation bar is fully responsive, using CSS Grid or Flexbox to manage layout and alignment. On smaller screens, consider incorporating a hamburger menu for compactness.",
    "For accessibility, use `aria-label` for the navigation container and `aria-current` for the active link to clearly indicate the user's current location. Ensure all interactive elements are keyboard-navigable.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Simple Navigation",
    "Navigation with Dropdown",
    "Navigation with Search",
  ],
  interactiveDemo: "",
  accessibity:
    "Beyond semantic HTML and ARIA roles, ensure your top navigation uses appropriate focus management, especially for dropdowns and mobile views. Make sure that navigation links are focusable and can be activated by keyboard events (Enter/Space) with visual feedback.",
  examples: [
    {
      component: <Navbar />,
      description:
        "A simple horizontal navigation bar with links to different sections of the website.",
      id: "simple-navigation",
      title: "Simple Navigation",
      usages:
        "Use for websites or apps with a few core sections, providing straightforward and clear navigation.",
      purpose:
        "This example demonstrates the simplest layout for top navigation with horizontal alignment and minimal elements.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";
      
export const Navbar = () => {
  return (
    <div className="container-top-nav">
      <div className="navbar-top">
        <ul className="nav-top-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};`,
        "app.css": `.container-top-nav {
  height: 200px;
}
.navbar-top {
  background: #333;
  padding: 12px 20px;
  display: flex;
  justify-content: center;
}

.nav-top-links {
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  list-style-type: none;
}

.nav-top-links li {
  display: inline;
}

.nav-top-links a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding: 8px 12px;
  transition: color 0.3s ease, background 0.3s ease;
}

.nav-top-links a:hover {
  color: #ffcc00;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

@media (max-width: 600px) {
  .nav-top-links {
    flex-direction: column;
    text-align: center;
  }

  .nav-top-links a {
    display: block;
    padding: 10px;
  }
}`,
      },
      open: false,
    },
    {
      component: <NavbarDropdown />,
      description:
        "A navigation bar with a dropdown menu to handle more options efficiently.",
      id: "nav-with-dropdown",
      title: "Navigation with Dropdown",
      usages:
        "Use for websites or apps that require additional sections to be grouped under a menu, saving space.",
      purpose:
        "This example demonstrates the integration of a dropdown menu within the navigation bar for advanced navigation scenarios.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const NavbarDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="container-top-nav">
      <div className="navbar-dropdown">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>

          {/* Dropdown Menu */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#menu" className="dropdown-toggle">
              More ▼
            </a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#team">Our Team</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};`,
        "app.css": `.container-top-nav {
  height: 200px;
};

.navbar-dropdown {
  background: #333;
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 60px;
}

.nav-links {
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding: 8px 12px;
  transition: color 0.3s ease, background 0.3s ease;
}

.nav-links a:hover {
  color: #ffcc00;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.dropdown-menu {
  position: absolute;
  left: 0;
  background: #444;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.dropdown-menu li {
  padding: 8px 12px;
}

.dropdown-menu a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 8px 12px;
  transition: background 0.3s ease;
}

.dropdown-menu a:hover {
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 600px) {
  .nav-links {
    flex-direction: column;
    text-align: center;
  }

  .dropdown-menu {
    position: static;
    display: none;
  }

  .dropdown:hover .dropdown-menu {
    display: flex;
  }
}`,
      },
      open: false,
    },
    {
      component: <NavbarWithSearch />,
      description:
        "A navigation bar with a search bar included for quick access to content.",
      id: "nav-with-search",
      title: "Navigation with Search",
      usages:
        "Use for websites or apps where users frequently search for content and need quick access to a search input.",
      purpose:
        "This example integrates a search bar into the navigation for user convenience while keeping the overall layout clean.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const NavbarWithSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(\`Searching for: \${searchQuery}\`);
    setSearchQuery("");
  };

  return (
    <div className="container-top-nav">
      <div className="navbar">
        <div className="logo">MySite</div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Search Bar */}
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
      </div>
    </div>
  );
};`,
        "app.css": `.container-top-nav {
  height: 200px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  padding: 12px 20px;
}

.logo {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding: 8px 12px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ffcc00;
}

.search-bar {
  display: flex;
  align-items: center;
  background: white;
  padding: 5px;
  border-radius: 20px;
}

.search-bar input {
  border: none;
  outline: none;
  padding: 6px 10px;
  font-size: 14px;
  width: 150px;
  border-radius: 20px 0 0 20px;
}

.search-bar button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 0 20px 20px 0;
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }

  .search-bar input {
    width: 100px;
  }
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Simple Navigation": "#simple-navigation",
      "Navigation with Dropdown": "#nav-with-dropdown",
      "Navigation with Search": "#nav-with-search",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
    "Material Design": "https://material.io/components/menus",
    "CSS Tricks": "https://css-tricks.com/almanac/properties/f/flex/",
  },
};

import ComplexDrawer from "./complex-drawer";
import SimpleDrawer from "./simple-drawer";

export const jsonToPageDisplay = {
  pageTitle: "Drawer",
  description: "Variety of drawer",
  jsonToDisplay: [
    {
      title: "Simple drawer",
      subTitle: "Simple drawer",
      toDisplay: "",
      component: <SimpleDrawer />,
      open: false,
    },
    {
      title: "Complex drawer",
      subTitle: "Complex drawer",
      toDisplay: "",
      component: <ComplexDrawer />,
      open: false,
    },
  ],
};

export const sideNavData = {
  seoTitle: "Side Navigation Drawer - Design, Usage, and Accessibility",
  seoDescription:
    "Create a responsive and accessible side navigation drawer based on Material Design principles. Learn design tips, accessibility features, and practical examples.",
  seoKeywords: [
    "side navigation",
    "drawer menu",
    "responsive navigation",
    "material design side navigation",
    "accessible navigation",
  ],
  pageTitle: "Side Navigation Drawer",
  pageDescription: [
    "Side navigation drawers provide quick access to primary destinations in an app. They can be permanent, persistent, or temporary depending on the app's use case.",
    "Follow Material Design principles when building side navigation. Ensure a clean layout with clear labels for navigation links. Avoid cluttering the drawer with too many options, and keep actions logically grouped.",
    "For responsiveness, side navigation should adapt to different screen sizes. On mobile devices, use a temporary (modal) drawer to avoid taking up screen space, while on desktops, you can use a persistent or permanent drawer.",
    "Accessibility is crucial for side navigation. Ensure focus management when the drawer is open, and use `aria-hidden`, `aria-expanded`, and `aria-label` attributes to help screen readers understand its purpose and state.",
  ],
  pageImage: "https://material-web.dev/components/images/side-nav/hero.webp",
  types: [
    "Temporary Drawer",
    // "Persistent Drawer",
    "Permanent Drawer",
  ],
  interactiveDemo: "",
  accessibity:
    "When the drawer is open, trap focus within it to prevent users from interacting with other elements on the page. Add `aria-hidden` to non-essential elements outside the drawer. Ensure users can navigate using a keyboard (`Tab` and `Shift+Tab`), and provide a clear way to close the drawer, such as a close button with an appropriate `aria-label`.",
  examples: [
    {
      component: <SimpleDrawer />,
      description:
        "A modal side navigation drawer that overlays the content and can be toggled on smaller devices.",
      id: "temporary-drawer",
      title: "Temporary Drawer",
      usages: "Use for mobile apps or websites where screen space is limited.",
      purpose:
        "This drawer provides a space-efficient way to show navigation links without occupying permanent screen real estate.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

export const Drawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleDrawer = () => setIsExpanded(!isExpanded);

  const links = [
    { icon: <HomeIcon />, label: "Home" },
    { icon: <PersonIcon />, label: "Profile" },
    { icon: <SettingsIcon />, label: "Settings" },
    { icon: <MailIcon />, label: "Messages" },
  ];

  return (
    <div className={\`container \${isExpanded ? "expanded" : ""}\`}>
      <button className="toggle-button" onClick={toggleDrawer}>
        {isExpanded ? <CloseIcon /> : <MenuIcon />}
      </button>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="link"
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <span className="icon">{link.icon}</span>
          <span
            className={\`label \${
              isExpanded || hoveredLink === index ? "visible" : ""
            }\`}
          >
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
};`,
        "app.css": `.container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 60px;
  transition: width 0.3s ease;
}

.container.expanded {
  width: 200px;
}

.link {
  display: flex;
  align-items: center;
  padding: 10px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.icon {
  margin-right: 15px;
  font-size: 20px;
}

.label {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.visible {
  opacity: 1;
}

.toggle-button {
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 10px;
}`,
      },
      open: false,
    },
    // {
    //   component: "Persistent Drawer",
    //   description:
    //     "A persistent side navigation drawer that remains visible and can be toggled.",
    //   id: "persistent-drawer",
    //   title: "Persistent Drawer",
    //   usages:
    //     "Use for desktop applications or websites where navigation links should be easily accessible.",
    //   purpose:
    //     "This type of drawer stays open and doesn’t overlap the content, ideal for layouts with more screen space.",
    //   codeBlock: { "app.jsx": ``, "app.css": `` },
    //   open: false,
    // },
    {
      component: <ComplexDrawer />,
      description:
        "A side navigation drawer that is always visible and part of the layout.",
      id: "permanent-drawer",
      title: "Permanent Drawer",
      usages:
        "Use for desktop apps or dashboards where navigation is a primary part of the user experience.",
      purpose:
        "This drawer is permanently visible, providing instant access to navigation links without toggling.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Notifications as NotificationsIcon,
  Bookmark as BookmarkIcon,
  ExitToApp as ExitToAppIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import "./app.css";

const ComplexDrawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDrawer = () => setIsExpanded(!isExpanded);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const links = [
    { icon: <HomeIcon />, label: "Home" },
    { icon: <PersonIcon />, label: "Profile" },
    { icon: <SettingsIcon />, label: "Settings" },
    { icon: <MailIcon />, label: "Messages" },
    { icon: <NotificationsIcon />, label: "Notifications" },
    { icon: <BookmarkIcon />, label: "Bookmarks" },
  ];

  const containerStyle = {
    ...complexDrawerStyles.container,
    ...(isExpanded && complexDrawerStyles.expanded),
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
  };

  const linkStyle = (index) => ({
    ...complexDrawerStyles.link,
    ...(activeLink === index && complexDrawerStyles.activeLink),
    backgroundColor:
      activeLink === index ? (isDarkMode ? "#555" : "#f0f0f0") : "transparent",
    color: isDarkMode ? "#fff" : "#333",
  });

  return (
    <div style={containerStyle}>
      <button style={complexDrawerStyles.toggleButton} onClick={toggleDrawer}>
        {isExpanded ? <CloseIcon /> : <MenuIcon />}
      </button>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          style={linkStyle(index)}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => setActiveLink(index)}
        >
          <span
            style={{
              ...complexDrawerStyles.icon,
              color: activeLink === index ? "#007bff" : "inherit",
            }}
          >
            {link.icon}
          </span>
          <span
            style={{
              ...complexDrawerStyles.label,
              ...(isExpanded && complexDrawerStyles.visible),
              ...(hoveredLink === index &&
                !isExpanded &&
                complexDrawerStyles.visible),
            }}
          >
            {link.label}
          </span>
        </a>
      ))}
      <div
        style={{
          ...complexDrawerStyles.footer,
          borderColor: isDarkMode ? "#555" : "#eaeaea",
        }}
      >
        <a href="#" style={complexDrawerStyles.link} onClick={toggleDarkMode}>
          <span style={complexDrawerStyles.icon}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </span>
          <span
            style={{
              ...complexDrawerStyles.label,
              ...(isExpanded && complexDrawerStyles.visible),
            }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </a>
        <a
          href="#"
          style={complexDrawerStyles.link}
          onClick={() => alert("Logging out...")}
        >
          <span style={complexDrawerStyles.icon}>
            <ExitToAppIcon />
          </span>
          <span
            style={{
              ...complexDrawerStyles.label,
              ...(isExpanded && complexDrawerStyles.visible),
            }}
          >
            Logout
          </span>
        </a>
      </div>
    </div>
  );
};`,
        "app.css": `.container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 60px;
  height: 100%;
  transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  position: relative;
  overflow: hidden;
}

.container.expanded {
  width: 250px;
}

.link {
  display: flex;
  align-items: center;
  padding: 12px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  border-radius: 8px;
  margin-bottom: 5px;
}

.link.active {
  font-weight: bold;
}

.icon {
  margin-right: 15px;
  font-size: 24px;
  transition: color 0.3s ease;
}

.label {
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateX(-20px);
}

.label.visible {
  opacity: 1;
  transform: translateX(0);
}

.toggle-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
}

.footer {
  margin-top: auto;
  border-top: 1px solid;
  padding-top: 10px;
}

.notification {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Temporary Drawer": "#temporary-drawer",
      // "Persistent Drawer": "#persistent-drawer",
      "Permanent Drawer": "#permanent-drawer",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
    "Material Design": "https://material.io/components/navigation-drawer",
    "CSS Tricks":
      "https://css-tricks.com/implementing-a-slide-out-navigation-menu/",
  },
};

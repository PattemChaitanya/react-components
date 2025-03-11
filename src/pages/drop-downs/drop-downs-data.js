import ComplexDropDowns from "./complex-drop-downs";
import NotificationDropDowns from "./notification-drop-downs";
import SimpleDropDowns from "./simple-drop-downs";

export const jsonToPageDisplay = {
  pageTitle: "Drop downs",
  description: "Variety of drop downs",
  jsonToDisplay: [
    {
      title: "Click and Hover drop downs",
      subTitle: "Click and Hover drop downs",
      toDisplay: "",
      component: <SimpleDropDowns />,
      open: false,
    },
    {
      title: "Profile drop downs",
      subTitle: "Profile drop downs",
      toDisplay: "",
      component: <ComplexDropDowns />,
      open: false,
    },
    {
      title: "Notifications drop-downs",
      subTitle: "Notifications drop-downs",
      toDisplay: "",
      component: <NotificationDropDowns />,
      open: false,
    },
  ],
};

export const dropDownData = {
  seoTitle: "Dropdown Component - Design, Usage, and Accessibility",
  seoDescription:
    "Learn how to create a fully responsive, accessible, and custom dropdown menu with Material Design principles for better user interaction.",
  seoKeywords: [
    "dropdown",
    "dropdown menu",
    "material design dropdown",
    "responsive dropdown",
    "accessible dropdown",
  ],
  pageTitle: "Dropdown",
  pageDescription: [
    "Dropdown menus are a versatile UI element that allow users to choose from a list of options in a compact space. They are widely used for navigation, form inputs, and various other applications.",
    "When designing dropdowns, make sure they are easy to open and close, and provide users with clear visual feedback. Dropdowns should also be easy to navigate via both mouse and keyboard, with an accessible design that caters to users with disabilities.",
    "Ensure dropdowns are responsive, adapting to different screen sizes. Consider using a combination of absolute and relative positioning to ensure the dropdown appears in the correct place, avoiding clipping or overlapping other elements.",
    "For accessibility, use `aria-expanded` to indicate whether the dropdown is open, and `aria-haspopup` to inform users of the available options. Additionally, use `aria-activedescendant` to highlight the currently selected option when navigating with the keyboard.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Basic Dropdown", "Dropdown with Icons", "Dropdown with Search"],
  interactiveDemo: "",
  accessibity:
    "Dropdowns should support both mouse and keyboard navigation. Make sure to trap keyboard focus within the dropdown when it's open, and ensure that users can navigate options using `Up` and `Down` arrow keys. `Enter` should select an option, and `Escape` should close the dropdown. Use `aria-expanded` and `aria-haspopup` for state management and convey the dropdown's purpose.",
  examples: [
    {
      component: <SimpleDropDowns />,
      description:
        "A simple dropdown menu with a list of links that appear when the button is clicked.",
      id: "basic-dropdown",
      title: "Basic Dropdown",
      usages:
        "Use for forms or navigation bars when a list of options is needed but space is limited.",
      purpose:
        "This basic dropdown is an essential UI pattern that can be used for providing users with a limited set of options or actions.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const DropDowns = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menu = ["Dashboard", "Profile", "Settings"];

  const handleHoveredState = () => {
    setTimeout(() => {
      isHovered ? setIsHovered(false) : setIsHovered(true);
    }, 500);
  };

  const renderedMenu = () => {
    return menu.map((item) => <p>{item}</p>);
  };

  return (
    <div className="drop-down-container">
      <div className="clickAndHoverContainer">
        <div>
          <button
            className="buttonContainer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Click me
          </button>
          <div
            className="renderedMenu"
            style={{
              visibility: isOpen ? "visible" : "hidden",
            }}
          >
            {renderedMenu()}
          </div>
        </div>
        <div>
          <button
            className="buttonContainer"
            onMouseEnter={() => handleHoveredState()}
            onMouseLeave={() => handleHoveredState()}
          >
            Hover me
          </button>
          <div
            className="renderedMenu"
            style={{
              visibility: isHovered ? "visible" : "hidden",
            }}
          >
            {renderedMenu()}
          </div>
        </div>
      </div>
    </div>
  );
};`,
        "app.css": `.drop-down-container {
  display: grid;
  place-items: center;
}
  
.clickAndHoverContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: 20px 0;
}

.buttonContainer {
  padding: 10px 24px;
  border-radius: 4px;
  background: blue;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.renderedMenu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  border: 1px solid rgb(0, 0, 0, 0.5);
  border-radius: 8px;
  margin-top: 8px;
}

.renderedMenu > p {
  padding: 4px;
  width: 100px;
  cursor: pointer
}

.renderedMenu > p:hover {
  background-color: #cecece;
  border-radius: 4px;
}`,
      },
      open: false,
    },
    {
      component: <ComplexDropDowns />,
      description:
        "A dropdown menu that includes icons next to the options for better visual clarity and user experience.",
      id: "dropdown-with-icons",
      title: "Dropdown with Icons",
      usages:
        "Ideal for applications where visual clarity is needed, such as for file type selection, settings, or user profile options.",
      purpose:
        "This example uses Material Icons for a better user experience and clearer representation of the options within the dropdown.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";
import Avatar from "./avatar";

export const DropDowns = () => {
  const [isOpen, setIsOpen] = useState(true);

  const renderedMenu = () => {
    return ["Dashboard", "Profile", "Settings"].map((item) => <p>{item}</p>);
  };

  return (
    <div className="drop-down-container">
      <div className="profileCardContainer">
        <div
          className="profileAvatar"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        >
          <Avatar url="" name="adam" sx={{ color: "inherit" }} />
        </div>
        <div
          className="profileMenu"
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          <p>
            Signed in as
            <br />
            <span>Adam Greece</span>
          </p>
          <hr />
          {renderedMenu()}
          <hr />
          <p>Signout</p>
        </div>
      </div>
    </div>
  );
};`,
        "app.css": `.drop-down-container {
  display: grid;
  place-items: center;
}
  
.profileCardContainer {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.profileAvatar {
  width: 48px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
}

.profileMenu {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  width: 140px;
  margin-top: 14px;
}

.profileMenu > hr {
  margin: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.profileMenu > p {
  padding: 8px 14px;
  font-size: 14px;
  cursor: pointer;
}

.profileMenu > p > span {
  opacity: 0.5;
  margin-top: 8px;
}

.profileMenu > p:first-child {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
}

.profileMenu > p:nth-child(2) {
  padding-top: 0;
}

.profileMenu > p:last-child {
  padding-bottom: 10px;
}

.profileMenu > p:hover {
  background-color: #cecece;
  color: var(--text-color);
}`,
      },
      open: false,
    },
    {
      component: <NotificationDropDowns />,
      description:
        "A dropdown menu with a search input that allows users to quickly filter through options.",
      id: "dropdown-with-search",
      title: "Dropdown with Search",
      usages:
        "Ideal for applications with a large set of options where users need a search bar to quickly find the option they need.",
      purpose:
        "This example integrates a search input inside the dropdown to improve user experience when dealing with a large list of options.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./style.css";
import { NotificationsRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Avatar from "./avatar";
import notification from "./data.json";

export const NotificationDropDowns = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="container">
      <div className="dropDownContainer">
        <div className="icon-button">
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            sx={{ color: "inherit" }}
          >
            <NotificationsRoundedIcon sx={{ color: "inherit" }} />
          </IconButton>
        </div>
        <div
          className="content-container"
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          <div className="content-header">
            <h3>Notification</h3>
          </div>
          <div className="content-info">
            {notification.map((item) => (
              <div className="info-message">
                <div style={{ width: "36px", height: "36px" }}>
                  <Avatar url="" name={item.profileUrl} />
                </div>
                <div>
                  <p>{item.message}</p>
                  <small>{item.received}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};`,
        "app.css": `.drop-down-container {
  display: grid;
  place-items: center;
}

.dropDownContainer {
  display: flex;
  gap: 8px;
  width: min(100%, 400px);
  position: relative;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  color: var(--text-color);
}

.icon-button {
  margin-left: auto;
  margin-right: auto;
  color: inherit;
}

.content-container {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  height: 270px;
  overflow: auto;
}

.content-header {
  text-align: center;
  padding: 16px 8px;
}

.content-header > h3 {
  text-transform: capitalize;
}

.content-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-message {
  padding: 8px 16px;
  display: flex;
  gap: 12px;
  width: "100%";
  border-bottom: 1px solid rba(0, 0, 0, 0.4);
}

.info-message:hover {
  background-color: #f1f1f1;
  color: #292929;
  cursor: pointer;
}

.info-message:last-child {
  border-bottom: none;
}

.info-message:first-child {
  border-top: 1px solid rgba(0, 0, 0, 0.4);
}`,
        "data.json": `[
  {
    profileUrl: "Jese image",
    message:
      "New message from Jese Leos: 'Hey, what's up? All set for the presentation?'",
    received: "a few moments ago",
  },
  {
    profileUrl: "Joseph image",
    message: "Joseph Mcfall and 5 others started following you.",
    received: "10 minutes ago",
  },
  {
    profileUrl: "Bonnie image",
    message:
      "Bonnie Green and 141 others love your story. See it and view more stories.",
    received: "44 minutes ago",
  },
  {
    profileUrl: "Leslie image",
    message:
      "Leslie Livingston mentioned you in a comment: @bonnie.green what do you say?",
    received: "1 hour ago",
  },
  {
    profileUrl: "Robert image",
    message:
      "Robert Brown posted a new video: Glassmorphism - learn how to implement the new design trend.",
    received: "3 hours ago",
  },
]`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Dropdown": "#basic-dropdown",
      "Dropdown with Icons": "#dropdown-with-icons",
      "Dropdown with Search": "#dropdown-with-search",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select",
    "Material Design": "https://material.io/components/menus",
    "CSS Tricks":
      "https://css-tricks.com/quick-css-trick-how-to-center-a-div-element/",
  },
};

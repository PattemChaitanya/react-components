import {
  IconAndTextTabs,
  IconTabs,
  ScrollableTabs,
  TextTabs,
} from "./tabs-component";

export const tabsData = {
  seoTitle: "Tabs",
  seoDescription:
    "Explore how to implement and customize Design Tabs with accessibility, interactivity, and real-world examples.",
  seoKeywords: [
    "Design Tabs",
    "Tabs UI Component",
    "Tabs Guide",
    "Responsive Tabs",
  ],
  pageTitle: "Tabs",
  pageDescription: [
    "Tabs organize and allow navigation between groups of content. They're a great way to present information efficiently while keeping the interface clean and accessible.",
    "Tabs can be text-only, icon-only, or a combination of both, depending on the design and the content they represent.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Text Tabs", "Icon Tabs", "Text and Icon Tabs", "Scrollable Tabs"],
  interactiveDemo: "",
  accessibity:
    "Ensure tabs are accessible by using proper ARIA roles, like `role='tablist'` for the container and `role='tab'` for each tab. Use `aria-selected` and keyboard navigation (arrow keys) to allow seamless accessibility. Each tab should also have an associated panel with a unique `id` for linking.",
  examples: [
    {
      id: "text-tabs",
      title: "Text Tabs",
      description: "A basic implementation of tabs with text labels.",
      usages:
        "Use when the tab labels alone are sufficient to describe the content.",
      purpose:
        "Keeps the design clean and straightforward, ideal for most content-heavy applications.",
      component: <TextTabs />,
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const TextTabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  return (
    <div className="tabs">
      <div role="tablist">
        <div className="tabs-container">
          {[1, 2, 3].map((index) => (
            <button
              key={index}
              className={\`tab \${index === selectedTab ? "active-tab" : ""}\`}
              onClick={() => handleTabClick(index)}
              aria-controls={\`panel-\${index}\`}
              aria-selected={index === selectedTab}
              tabIndex={index !== selectedTab && -1}
              aria-label={\`Go to Tab \${index}\`}
              id={\`tab-\${index}\`}
              role="tab"
              type="button"
            >
              Item {index}
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-labelledby={\`tab-\${selectedTab}\`}>
        <p> Panel {selectedTab} content</p>
      </div>
    </div>
  );
};`,
        "app.css": `.tabs {
  width: 100%;
  background: var(--color-surface-container-highest);
  border-radius: 6px;
}

[role="tablist"] {
  border-radius: 6px 6px 0 0;
  background: var(--color-surface-container-low);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tabs-container {
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
  
[role="tab"],
[role="tab"]:focus,
[role="tab"]:hover {
  display: inline-block;
  position: relative;
  z-index: 2;
  outline: none;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  opacity: 0.6;
  padding: 12px 16px;
}

[role="tab"][aria-selected="true"] {
  border-bottom: 1px solid var(--color-on-background);
  opacity: 1;
}

[role="tab"] span.focus {
  display: inline-block;
  margin: 2px;
  padding: 4px 6px;
}

[role="tab"]:hover span.focus,
[role="tab"]:focus span.focus {
  padding: 2px 4px;
  border: 2px solid rgb(36 116 214);
  border-radius: 3px;
}

[role="tabpanel"] {
  padding: 5px;
  min-height: 10em;
  overflow: auto;
}

[role="tabpanel"] p {
  margin: 10px;
}`,
      },
      open: false,
    },
    {
      id: "icon-tabs",
      title: "Icon Tabs",
      description: "Tabs represented using only icons.",
      usages:
        "Ideal for dashboards or when the icons themselves are self-explanatory (e.g., home, settings, search).",
      purpose: "Saves space while still providing intuitive navigation.",
      component: <IconTabs />,
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";
import { HomeRounded, SettingsRounded, SearchRounded } from "@mui/icons-material";

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { icon: <HomeRounded />, title: "Home", content: "Home content" },
    {
      icon: <SettingsRounded />,
      title: "Settings",
      content: "Settings content",
    },
    {
      icon: <SearchRounded />,
      title: "Search",
      content: "Search content",
    },
  ];

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="tabs">
      <div role="tablist">
        <div className="tabs-container">
          {tabs.map((item, index) => (
            <button
              key={index}
              className={\`tab \${index === selectedTab ? "active-tab" : ""}\`}
              onClick={() => handleTabClick(index)}
              aria-controls={\`panel-\${index}\`}
              aria-selected={index === selectedTab}
              tabIndex={index !== selectedTab && -1}
              aria-label={\`Go to Tab \${index}\`}
              id={\`tab-\${index}\`}
              role="tab"
              type="button"
            >
              <span className={\`icon icon-\${index}\`}></span>
              {item.icon}
              <span className="sr-only">
                {index === selectedTab ? " (active)" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-labelledby={\`tab-\${selectedTab}\`}>
        <p>{tabs[selectedTab]?.content}</p>
      </div>
    </div>
  );
};`,
        "app.css": `.tabs {
  width: 100%;
  background: var(--color-surface-container-highest);
  border-radius: 6px;
}

[role="tablist"] {
  border-radius: 6px 6px 0 0;
  background: var(--color-surface-container-low);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tabs-container {
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
  
[role="tab"],
[role="tab"]:focus,
[role="tab"]:hover {
  display: inline-block;
  position: relative;
  z-index: 2;
  outline: none;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  opacity: 0.6;
  padding: 12px 16px;
}

[role="tab"][aria-selected="true"] {
  border-bottom: 1px solid var(--color-on-background);
  opacity: 1;
}

[role="tab"] span.focus {
  display: inline-block;
  margin: 2px;
  padding: 4px 6px;
}

[role="tab"]:hover span.focus,
[role="tab"]:focus span.focus {
  padding: 2px 4px;
  border: 2px solid rgb(36 116 214);
  border-radius: 3px;
}

[role="tabpanel"] {
  padding: 5px;
  min-height: 10em;
  overflow: auto;
}

[role="tabpanel"] p {
  margin: 10px;
}`,
      },
      open: false,
    },
    {
      id: "icon-text-tabs",
      title: "Text and Icon Tabs",
      description: "Tabs represented using text and icons.",
      usages:
        "Ideal for dashboards or when the icons themselves are self-explanatory (e.g., home, settings, search).",
      purpose: "Saves space while still providing intuitive navigation.",
      component: <IconAndTextTabs />,
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";
import { HomeRounded, SettingsRounded, SearchRounded } from "@mui/icons-material";

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { icon: <HomeRounded />, title: "Home", content: "Home content" },
    {
      icon: <SettingsRounded />,
      title: "Settings",
      content: "Settings content",
    },
    {
      icon: <SearchRounded />,
      title: "Search",
      content: "Search content",
    },
  ];

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  return (
    <div className="tabs">
      <div role="tablist">
        <div className="tabs-container">
          {tabs.map((item, index) => (
            <button
              key={index}
              className={\`tab \${index === selectedTab ? "active-tab" : ""}\`}
              onClick={() => handleTabClick(index)}
              aria-controls={\`panel-\${index}\`}
              aria-selected={index === selectedTab}
              tabIndex={index !== selectedTab && -1}
              aria-label={\`Go to Tab \${index}\`}
              id={\`tab-\${index}\`}
              role="tab"
              type="button"
            >
              <span className={\`icon icon-\${index}\`}></span>
              {item.icon} <span className="tab-title">{item.title}</span>
              <span className="sr-only">
                {index === selectedTab ? " (active)" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-labelledby={\`tab-\${selectedTab}\`}>
        <p>{tabs[selectedTab]?.content}</p>
      </div>
    </div>
  );
};`,
        "app.css": `.tabs {
  width: 100%;
  background: var(--color-surface-container-highest);
  border-radius: 6px;
}

[role="tablist"] {
  border-radius: 6px 6px 0 0;
  background: var(--color-surface-container-low);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tabs-container {
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
  
[role="tab"],
[role="tab"]:focus,
[role="tab"]:hover {
  display: inline-block;
  position: relative;
  z-index: 2;
  outline: none;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  opacity: 0.6;
  padding: 12px 16px;
}

[role="tab"][aria-selected="true"] {
  border-bottom: 1px solid var(--color-on-background);
  opacity: 1;
}

[role="tab"] span.focus {
  display: inline-block;
  margin: 2px;
  padding: 4px 6px;
}

[role="tab"]:hover span.focus,
[role="tab"]:focus span.focus {
  padding: 2px 4px;
  border: 2px solid rgb(36 116 214);
  border-radius: 3px;
}

[role="tabpanel"] {
  padding: 5px;
  min-height: 10em;
  overflow: auto;
}

[role="tabpanel"] p {
  margin: 10px;
}`,
      },
      open: false,
    },
    {
      id: "scrollable-tabs",
      title: "Scrollable Tabs",
      description: "Tabs that allow horizontal scrolling.",
      usages:
        "Great for content-heavy applications with many categories or sections.",
      purpose:
        "Provides flexibility for layouts with limited space without cluttering the UI.",
      component: <ScrollableTabs />,
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="tabs">
      <div role="tablist">
        <div className="scrollable-tabs">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <button
              key={index}
              className={\`tab \${index === selectedTab ? "active-tab" : ""}\`}
              onClick={() => handleTabClick(index)}
              aria-controls={\`panel-\${index}\`}
              aria-selected={index === selectedTab}
              tabIndex={index !== selectedTab && -1}
              aria-label={\`Go to Tab \${index}\`}
              id={\`tab-\${index}\`}
              role="tab"
              type="button"
            >
              <span className={\`icon icon-\${index}\`}></span>
              Panel {index}
              <span className="sr-only">
                {index === selectedTab ? " (active)" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-labelledby={\`tab-\${selectedTab}\`}>
        <p>Panel {selectedTab} content</p>
      </div>
    </div>
  );
};`,
        "app.css": `.tabs {
  width: 100%;
  background: var(--color-surface-container-highest);
  border-radius: 6px;
}

[role="tablist"] {
  border-radius: 6px 6px 0 0;
  background: var(--color-surface-container-low);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tabs-container {
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.scrollable-tabs {
  width: inherit;
  overflow: auto;
  white-space: nowrap;
}

[role="tab"],
[role="tab"]:focus,
[role="tab"]:hover {
  display: inline-block;
  position: relative;
  z-index: 2;
  outline: none;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  opacity: 0.6;
  padding: 12px 16px;
}

[role="tab"][aria-selected="true"] {
  border-bottom: 1px solid var(--color-on-background);
  opacity: 1;
}

[role="tab"] span.focus {
  display: inline-block;
  margin: 2px;
  padding: 4px 6px;
}

[role="tab"]:hover span.focus,
[role="tab"]:focus span.focus {
  padding: 2px 4px;
  border: 2px solid rgb(36 116 214);
  border-radius: 3px;
}

[role="tabpanel"] {
  padding: 5px;
  min-height: 10em;
  overflow: auto;
}

[role="tabpanel"] p {
  margin: 10px;
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Text Tabs": "#text-tabs",
      "Icon Tabs": "#icon-tabs",
      "Text and Icon Tabs": "#icon-text-tabs",
      "Scrollable Tabs": "#scrollable-tabs",
    },
    References: "#references",
  },
  references: {
    "Material Design Guidelines for Tabs":
      "https://m3.material.io/components/tabs",
    "ARIA Roles for Tabs": "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",
    "Material Icons for Tabs": "https://fonts.google.com/icons",
  },
};

import React, { useState } from "react";
import "./tabs.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

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
              className={`tab ${index === selectedTab ? "active-tab" : ""}`}
              onClick={() => handleTabClick(index)}
              aria-controls={`panel-${index}`}
              aria-selected={index === selectedTab}
              tabIndex={index !== selectedTab && -1}
              aria-label={`Go to Tab ${index}`}
              id={`tab-${index}`}
              role="tab"
              type="button"
            >
              Item {index}
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-labelledby={`tab-${selectedTab}`}>
        <p> Panel {selectedTab} content</p>
      </div>
    </div>
  );
};

export const IconTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { icon: <HomeRoundedIcon />, title: "Home", content: "Home content" },
    {
      icon: <SettingsRoundedIcon />,
      title: "Settings",
      content: "Settings content",
    },
    {
      icon: <SearchRoundedIcon />,
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
              className={`tab ${index === selectedTab ? "active-tab" : ""}`}
              onClick={() => handleTabClick(index)}
              aria-controls={`panel-${index}`}
              aria-selected={index === selectedTab}
              tabIndex={index !== selectedTab && -1}
              aria-label={`Go to Tab ${index}`}
              id={`tab-${index}`}
              role="tab"
              type="button"
            >
              <span className={`icon icon-${index}`}></span>
              {item.icon}
              <span className="sr-only">
                {index === selectedTab ? " (active)" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-labelledby={`tab-${selectedTab}`}>
        <p>{tabs[selectedTab]?.content}</p>
      </div>
    </div>
  );
};

export const IconAndTextTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { icon: <HomeRoundedIcon />, title: "Home", content: "Home content" },
    {
      icon: <SettingsRoundedIcon />,
      title: "Settings",
      content: "Settings content",
    },
    {
      icon: <SearchRoundedIcon />,
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
              className={`tab ${index === selectedTab ? "active-tab" : ""}`}
              onClick={() => handleTabClick(index)}
              aria-controls={`panel-${index}`}
              aria-selected={index === selectedTab}
              tabIndex={index !== selectedTab && -1}
              aria-label={`Go to Tab ${index}`}
              id={`tab-${index}`}
              role="tab"
              type="button"
            >
              <span className={`icon icon-${index}`}></span>
              {item.icon} <span className="tab-title">{item.title}</span>
              <span className="sr-only">
                {index === selectedTab ? " (active)" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-labelledby={`tab-${selectedTab}`}>
        <p>{tabs[selectedTab]?.content}</p>
      </div>
    </div>
  );
};

export const ScrollableTabs = () => {
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
              className={`tab ${index === selectedTab ? "active-tab" : ""}`}
              onClick={() => handleTabClick(index)}
              aria-controls={`panel-${index}`}
              aria-selected={index === selectedTab}
              tabIndex={index !== selectedTab && -1}
              aria-label={`Go to Tab ${index}`}
              id={`tab-${index}`}
              role="tab"
              type="button"
            >
              <span className={`icon icon-${index}`}></span>
              Panel {index}
              <span className="sr-only">
                {index === selectedTab ? " (active)" : ""}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-labelledby={`tab-${selectedTab}`}>
        <p>Panel {selectedTab} content</p>
      </div>
    </div>
  );
};

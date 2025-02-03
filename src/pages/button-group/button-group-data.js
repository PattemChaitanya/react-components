import HorizontalButtonGroup from "./horizontal-button-group";
import VerticalButtonGroup from "./vertical-button-group";

export const jsonToPageDisplay = {
  pageTitle: "Button group",
  description: "Grouping of buttons",
  jsonToDisplay: [
    {
      title: "Vertical button group",
      subTitle: "vertical button group",
      toDisplay: `import React from "react";

const buttonStyle = {
  width: "100%",
  border: "1px solid #ccc",
};

const styles = {
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    marginInline: "auto",
  },
  firstButtonStyle: {
    ...buttonStyle,
    borderRadius: "4px 4px 0 0",
    borderBottom: "none",
  },
  middleButtonStyle: {
    ...buttonStyle,
    borderRadius: "0",
    borderBottom: "none",
  },
  lastButtonStyle: {
    ...buttonStyle,
    borderRadius: "0 0 4px 4px",
  },
};

const VerticalButtonGroup = () => {
  return (
    <div style={styles.containerStyle}>
      <button type="button" style={styles.firstButtonStyle}>
        Button 1
      </button>
      <button type="button" style={styles.middleButtonStyle}>
        Button 2
      </button>
      <button type="button" style={styles.lastButtonStyle}>
        Button 3
      </button>
    </div>
  );
};

export default VerticalButtonGroup;
`,
      component: <VerticalButtonGroup />,
      open: false,
    },
    {
      title: "Horizontal button group",
      subTitle: "Horizontal button group",
      toDisplay: `import React from "react";

const buttonStyle = {
  width: "fit-content",
  border: "1px solid #ccc",
};

const styles = {
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
    marginInline: "auto",
  },
  firstButtonStyle: {
    ...buttonStyle,
    borderRadius: "4px 0 0 4px",
  },
  middleButtonStyle: {
    ...buttonStyle,
    borderRadius: "0",
    borderLeft: "none",
  },
  lastButtonStyle: {
    ...buttonStyle,
    borderRadius: "0 4px 4px 0",
    borderLeft: "none",
  },
};

const HorizontalButtonGroup = () => {
  return (
    <div style={styles.containerStyle}>
      <button type="button" style={styles.firstButtonStyle}>
        Button 1
      </button>
      <button type="button" style={styles.middleButtonStyle}>
        Button 2
      </button>
      <button type="button" style={styles.lastButtonStyle}>
        Button 3
      </button>
    </div>
  );
};

export default HorizontalButtonGroup;
`,
      component: <HorizontalButtonGroup />,
      open: false,
    },
  ],
};

export const buttonGroupData = {
  seoTitle: "Modern Button Group for Web Applications",
  seoDescription:
    "A sleek and modern button group designed for intuitive navigation in web applications.",
  seoKeywords: [
    "button group",
    "web application",
    "modern design",
    "CSS buttons",
    "navigation",
  ],
  pageTitle: "Button Group Component",
  pageDescription: [
    "This button group component offers a clean, modern look ideal for web applications.",
    "It supports customizable styles, interactive demos, and accessibility features.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Primary Button Group",
    "Secondary Button Group",
    "Icon Button Group",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "Designed with ARIA roles and keyboard navigation support for better accessibility.",
  examples: [
    {
      component: "ButtonGroup",
      description: "A basic button group with primary and secondary buttons.",
      id: "button-group-1",
      title: "Basic Button Group",
      usages:
        "Used for grouping related actions together in a toolbar or navigation.",
      purpose:
        "To create a cohesive set of buttons that provide quick access to different actions.",
      codeBlock: `
        <div class="button-group">
          <button class="btn primary">Primary</button>
          <button class="btn secondary">Secondary</button>
          <button class="btn">Default</button>
        </div>
      `,
      open: false,
    },
    {
      component: "IconButtonGroup",
      description:
        "A button group with icons for quick visual identification of actions.",
      id: "button-group-2",
      title: "Icon Button Group",
      usages:
        "Ideal for toolbars where space is limited, and icons enhance usability.",
      purpose:
        "To provide visually distinct buttons using icons for better user recognition.",
      codeBlock: `
        <div class="button-group">
          <button class="btn icon"><i class="icon-home"></i></button>
          <button class="btn icon"><i class="icon-settings"></i></button>
          <button class="btn icon"><i class="icon-user"></i></button>
        </div>
      `,
      open: false,
    },
    {
      component: "SecondaryButtonGroup",
      description:
        "A secondary button group with subtle design for less prominent actions.",
      id: "button-group-3",
      title: "Secondary Button Group",
      usages: "Used for secondary actions that complement the primary buttons.",
      purpose:
        "To provide additional actions without drawing attention away from primary buttons.",
      codeBlock: `
        <div class="button-group">
          <button class="btn secondary">Option 1</button>
          <button class="btn secondary">Option 2</button>
          <button class="btn secondary">Option 3</button>
        </div>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Button Group": "#button-group-1",
      "Icon Button Group": "#button-group-2",
      "Secondary Button Group": "#button-group-3",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
    WAI: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
  },
};

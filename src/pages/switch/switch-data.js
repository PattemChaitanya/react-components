import ComplexSwitch from "./complex-switch";
import SimpleSwitch from "./simple-switch";
import {
  CustomSwitch,
  MinimalSwitch,
  MultiStateSwitch,
  SwitchWithIcons,
  SwitchWithLabels,
} from "./switch-component";

export const jsonToPageDisplay = {
  pageTitle: "Switch",
  description: "Variety of switch",
  jsonToDisplay: [
    {
      title: "Simple switch",
      subTitle: "Simple switch",
      toDisplay: "",
      component: <SimpleSwitch />,
      open: false,
    },
    {
      title: "Complex switch",
      subTitle: "Complex switch",
      toDisplay: "",
      component: <ComplexSwitch />,
      open: false,
    },
  ],
};

export const switchData = {
  seoTitle: "Switch Component - Modern UI Toggles",
  seoDescription:
    "Explore the Switch component for toggling states in modern UI design. Includes examples, interactive demos, accessibility guidelines, and custom use cases.",
  seoKeywords: [
    "Switch",
    "Toggle",
    "UI Components",
    "State Control",
    "Custom Switch Design",
  ],
  pageTitle: "Switch",
  pageDescription: [
    "The Switch component is a UI element that allows users to toggle between two states, such as ON and OFF.",
    "Switches are commonly used for enabling or disabling features, managing preferences, or controlling real-time settings.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Switch",
    "Switch with Labels",
    "Switch with Icons",
    "Custom-Themed Switch",
    "Multi-State Switch",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "The Switch component should include proper ARIA attributes such as 'aria-checked' for state indication. Ensure it is fully keyboard-accessible (e.g., toggled with Space or Enter). For users with screen readers, the labels or context of the switch should be announced clearly.",
  examples: [
    {
      component: <MinimalSwitch />,
      description:
        "A minimal switch component for toggling between two states.",
      id: "basic",
      title: "Basic Switch Example",
      usages:
        "Ideal for simple ON/OFF controls, such as enabling dark mode or notifications.",
      purpose:
        "Provides an intuitive and space-efficient way to toggle a setting.",
      codeBlock: "<switch></switch>",
      open: false,
    },
    {
      component: <SwitchWithLabels />,
      description: "A switch with text labels for its ON and OFF states.",
      id: "labels",
      title: "Switch with Labels Example",
      usages:
        "Useful when it’s important to explicitly indicate the meaning of each state.",
      purpose:
        "Improves clarity and user understanding, especially for accessibility.",
      codeBlock: "<switch on-label='Enabled' off-label='Disabled'></switch>",
      open: false,
    },
    {
      component: <SwitchWithIcons />,
      description: "A switch that uses icons to represent its states visually.",
      id: "icons",
      title: "Switch with Icons Example",
      usages:
        "Great for applications with visual-heavy designs, like IoT device controls.",
      purpose:
        "Enhances usability and aesthetics by providing clear visual indicators.",
      codeBlock: "<switch on-icon='🌞' off-icon='🌙'></switch>",
      open: false,
    },
    {
      component: <CustomSwitch />,
      description:
        "A switch styled with custom colors and animations to match brand identity.",
      id: "custom-theme",
      title: "Custom-Themed Switch Example",
      usages: "Perfect for branded applications or unique design systems.",
      purpose:
        "Allows for creative expression while maintaining core functionality.",
      codeBlock: "<switch style='--switch-color: #ff5722'></switch>",
      open: false,
    },
    {
      component: <MultiStateSwitch />,
      description:
        "A switch with more than two states for extended functionality.",
      id: "multi",
      title: "Multi-State Switch Example",
      usages:
        "Ideal for controls with multiple settings, such as fan speed or volume levels.",
      purpose:
        "Provides more granular control without taking up additional space.",
      codeBlock:
        '<multi-state-switch states=\'["Low", "Medium", "High"]\'></multi-state-switch>',
      open: false,
    },
  ],
  links: {
    Types: "#types",
    // "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Switch": "#basic",
      "Switch with Labels": "#labels",
      "Switch with Icons": "#icons",
      "Custom-Themed Switch": "#custom-theme",
      "Multi-State Switch": "#multi",
    },
    References: "#references",
  },
  references: {
    "ARIA Roles for Toggles":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_Role",
    "Switch Design Patterns":
      "https://uxdesign.cc/designing-effective-switches-for-ui-8d4d61fddf9",
    "Keyboard Accessibility for Controls":
      "https://webaim.org/techniques/keyboard/",
  },
  previousNavigation: { title: "Select", link: "/select" },
  nextNavigation: null,
};

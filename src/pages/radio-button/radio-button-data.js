import HorizontalRadioButton from "./complex-radio-button";
import DisableRadioButton from "./disable-radio";
import LabelPosition from "./label-position";
import {
  CustomRadioButton,
  DescriptiveRadioButton,
  IconRadioButton,
  RadioButton,
  RadioButtonGroup,
} from "./radio-button-component";
import VerticalRadioButton from "./simple-radio-button";

export const jsonToPageDisplay = {
  pageTitle: "Radio button",
  description: "Variety of radio button",
  jsonToDisplay: [
    {
      title: "Simple radio button",
      subTitle: "Simple radio button",
      toDisplay: `import React from "react";

const simpleRadioButtonStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "300px",
  },
};

const VerticalRadioButton = () => {
  return (
    <div style={simpleRadioButtonStyles.container}>
      <form>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
      </form>
    </div>
  );
};

export default VerticalRadioButton;
`,
      component: <VerticalRadioButton />,
      open: false,
    },
    {
      title: "Complex radio button",
      subTitle: "Complex radio button",
      toDisplay: `import React from "react";

const complexRadioButtonStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "300px",
  },
};

const HorizontalRadioButton = () => {
  return (
    <div style={complexRadioButtonStyles.container}>
      <label>Gender</label>
      <br />
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </div>
      </form>
    </div>
  );
};

export default HorizontalRadioButton;
`,
      component: <HorizontalRadioButton />,
      open: false,
    },
    {
      title: "Complex radio button",
      subTitle: "Complex radio button",
      toDisplay: `import React from "react";

const labelPositionStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "300px",
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
};

const LabelPosition = () => {
  return (
    <div style={labelPositionStyles.container}>
      <label style={labelPositionStyles.label}>Label Position</label>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <label htmlFor="left">Left</label>
          <input type="radio" id="left" name="labelPosition" value="left" />
        </div>
        <div style={{ display: "flex" }}>
          <input type="radio" id="right" name="labelPosition" value="right" />
          <label htmlFor="right">Right</label>
        </div>
        <div>
          <label htmlFor="top">Top</label>
          <input type="radio" id="top" name="labelPosition" value="top" />
        </div>
        <div>
          <input type="radio" id="bottom" name="labelPosition" value="bottom" />
          <label htmlFor="bottom">Bottom</label>
        </div>
      </form>
    </div>
  );
};

export default LabelPosition;
`,
      component: <LabelPosition />,
      open: false,
    },
    {
      title: "Complex radio button",
      subTitle: "Complex radio button",
      toDisplay: `import React from "react";

const disabledStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "300px",
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
};

const DisableRadioButton = () => {
  return (
    <div style={disabledStyles.container}>
      <label>Gender Selection</label>
      <br />
      <form style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" name="gender" value="female" />
        </div>
        <div>
          <label htmlFor="other">Other</label>
          <input type="radio" id="other" name="gender" value="other" disabled />
        </div>
      </form>
    </div>
  );
};

export default DisableRadioButton;
`,
      component: <DisableRadioButton />,
      open: false,
    },
  ],
};

const radioButtonData = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
  desOptions: [
    {
      label: "Basic Plan",
      value: "basic",
      description: "Includes standard features.",
    },
    {
      label: "Premium Plan",
      value: "premium",
      description: "Includes all features with priority support.",
    },
    {
      label: "Enterprise Plan",
      value: "enterprise",
      description: "Custom solutions for large businesses.",
    },
  ],
  iconOptions: [
    { label: "Heart", value: "heart", icon: "🤍", selectedIcon: "❤️" },
    { label: "Star", value: "star", icon: "⭐", selectedIcon: "🌟" },
    { label: "Check", value: "check", icon: "⬜", selectedIcon: "✅" },
  ],
};

export const radioData = {
  seoTitle: "Radio Button Component - Simplified Selection",
  seoDescription:
    "Learn about the Radio Button component for creating single-choice selections. Explore examples, accessibility tips, and creative implementations.",
  seoKeywords: [
    "Radio Button",
    "UI Design",
    "Selection Control",
    "Form Components",
    "Custom Radio",
  ],
  pageTitle: "Radio Button",
  pageDescription: [
    "The Radio Button component allows users to select one option from a predefined set of choices.",
    "It's an essential part of forms and interfaces that require mutually exclusive selections.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Radio Button",
    "Radio Button with Labels",
    "Custom-Themed Radio Button",
    "Icon-Based Radio Button",
    "Grouped Radio Buttons",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "Ensure radio buttons are keyboard-navigable and use proper ARIA attributes like 'role=radiogroup' for the group and 'aria-checked' for the selected button. Provide clear focus indicators, and labels should be programmatically associated with their corresponding buttons using 'for' and 'id' attributes.",
  examples: [
    {
      component: (
        <RadioButton options={radioButtonData.options} name="radioExample" />
      ),
      description: "A minimal radio button for single-choice selection.",
      id: "basic",
      title: "Basic Radio Button Example",
      usages: "Used when users need to choose one option from a small list.",
      purpose: "Keeps the UI simple and efficient for single-choice scenarios.",
      codeBlock:
        "<radio-button name='group1' value='option1'>Option 1</radio-button>",
      open: false,
    },
    {
      component: (
        <DescriptiveRadioButton
          options={radioButtonData.desOptions}
          name="plans"
        />
      ),
      description: "A radio button accompanied by a descriptive text label.",
      id: "labels",
      title: "Radio Button with Labels Example",
      usages:
        "Ideal for forms or surveys where context for each choice is necessary.",
      purpose: "Improves clarity by combining the button with a label.",
      codeBlock:
        "<radio-button name='group2' value='option2'>Option 2</radio-button>",
      open: false,
    },
    {
      component: (
        <CustomRadioButton
          options={radioButtonData.options}
          name="customRadio"
        />
      ),
      description:
        "A radio button styled with custom colors, sizes, or animations.",
      id: "custom-theme",
      title: "Custom-Themed Radio Button Example",
      usages: "Perfect for branded or visually rich designs.",
      purpose:
        "Provides a unique user experience while maintaining functionality.",
      codeBlock:
        "<radio-button name='group3' value='custom' style='--radio-color: #ff5722;'>Custom Style</radio-button>",
      open: false,
    },
    {
      component: (
        <IconRadioButton options={radioButtonData.iconOptions} name="icons" />
      ),
      description: "A radio button that replaces the circle with an icon.",
      id: "icon-based",
      title: "Icon-Based Radio Button Example",
      usages:
        "Great for interfaces where icons convey meaning more effectively than text.",
      purpose:
        "Enhances usability and adds a visual element to the selection process.",
      codeBlock:
        "<radio-button name='group4' value='icon' icon='🌟'>Star</radio-button>",
      open: false,
    },
    {
      component: (
        <RadioButtonGroup options={radioButtonData.options} name="radioGroup" />
      ),
      description:
        "A collection of related radio buttons displayed as a group.",
      id: "grouped",
      title: "Grouped Radio Buttons Example",
      usages:
        "Used when multiple related options need to be presented together.",
      purpose:
        "Improves organization and clarity for users making a selection.",
      codeBlock:
        "<div role='radiogroup'><radio-button name='group5' value='1'>Option 1</radio-button><radio-button name='group5' value='2'>Option 2</radio-button></div>",
      open: false,
    },
  ],
  links: {
    Types: "#types",
    // "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Radio Button": "#basic",
      "Radio Button with Labels": "#labels",
      "Custom-Themed Radio Button": "#custom-theme",
      "Icon-Based Radio Button": "#icon-based",
      "Grouped Radio Buttons": "#grouped",
    },
    References: "#references",
  },
  references: {
    "ARIA Roles for Radio Buttons":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Radio_Role",
    "Effective Use of Radio Buttons":
      "https://uxplanet.org/best-practices-for-using-radio-buttons-in-ui-design-f2f64b8f44bf",
    "Keyboard Navigation for Radio Groups":
      "https://webaim.org/techniques/keyboard/",
  },
  previousNavigation: { title: "Menu", link: "/menu" },
  nextNavigation: {
    title: "Select",
    link: "/select",
  },
};

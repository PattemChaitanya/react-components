import {
  DisabledButton,
  ElevatedButton,
  FilledTonalButton,
  IconButton,
  OutlinedButton as OutlinedButtonComponent,
  TextButton,
} from "./button-components";
import OutlinedButton from "./outlined-button";
import SimpleButton from "./simple-button";

export const jsonToPageDisplay = {
  pageTitle: "Buttons",
  description: [
    "Buttons enable users to perform actions, such as submitting forms, liking posts, or sharing content.",
    "Common types of buttons include elevated, filled, tonal, outlined, and text, each offering unique visual emphasis and function.",
  ],
  jsonToDisplay: [
    {
      title: "Simple button",
      subTitle: "Simple button",
      toDisplay: `import React from "react";

const SimpleButton = () => {
  const styles = {
    base: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      margin: "5px",
    },
    primary: {
      backgroundColor: "#007bff",
      color: "white",
    },
    disabled: {
      backgroundColor: "#e0e0e0",
      color: "#9e9e9e",
      cursor: "not-allowed",
    },
    success: {
      backgroundColor: "#28a745",
      color: "white",
    },
  };

  return (
    <div>
      <button style={{ ...styles.base, ...styles.primary }}>Primary</button>
      <button style={{ ...styles.base, ...styles.disabled }} disabled>
        Disabled
      </button>
      <button style={{ ...styles.base, ...styles.success }}>Success</button>
    </div>
  );
};

export default SimpleButton;
`,
      component: <SimpleButton />,
      open: false,
    },
    {
      title: "Outlined button",
      subTitle: "Outlined button",
      toDisplay: `import React from "react";

const OutlinedButton = () => {
  const styles = {
    base: {
      padding: "10px 15px",
      border: "2px solid",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      margin: "5px",
      backgroundColor: "transparent",
      transition: "all 0.3s ease",
    },
    primary: {
      borderColor: "#007bff",
      color: "#007bff",
      "&:hover": {
        backgroundColor: "#007bff",
        color: "#fff",
      },
    },
    secondary: {
      borderColor: "#6c757d",
      color: "#6c757d",
      "&:hover": {
        backgroundColor: "#6c757d",
        color: "#fff",
      },
    },
    danger: {
      borderColor: "#dc3545",
      color: "#dc3545",
      "&:hover": {
        backgroundColor: "#dc3545",
        color: "#fff",
      },
    },
    disabled: {
      borderColor: "#cccccc",
      color: "#cccccc",
      cursor: "not-allowed",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#cccccc",
      },
    },
  };

  return (
    <div>
      <button style={{ ...styles.base, ...styles.primary }}>Primary</button>
      <button style={{ ...styles.base, ...styles.secondary }}>Secondary</button>
      <button style={{ ...styles.base, ...styles.danger }}>Danger</button>
      <button style={{ ...styles.base, ...styles.disabled }} disabled>
        Disabled
      </button>
    </div>
  );
};

export default OutlinedButton;
`,
      component: <OutlinedButton />,
      open: false,
    },
  ],
};

export const jsonToButtonData = {
  seoTitle: "Button Design and Usage",
  seoDescription:
    "Learn about buttons, their types, and how they enhance user interaction on web pages.",
  seoKeywords: [
    "button",
    "button design",
    "button types",
    "UI buttons",
    "interactive buttons",
    "Elevated buttons",
    "Filled buttons",
    "Filled Tonal buttons",
    "Outlined buttons",
    "Text buttons",
    "Disabled buttons",
  ],
  pageTitle: "Buttons",
  pageDescription: [
    "Buttons enable users to perform actions, such as submitting forms, liking posts, or sharing content.",
    "Common types of buttons include elevated, filled, tonal, outlined, and text, each offering unique visual emphasis and function.",
  ],
  pageImage: "https://material-web.dev/components/images/button/hero.webp",
  types: ["Elevated", "Filled Tonal", "Outlined", "Text", "Disabled"],
  interactiveDemo: <SimpleButton />,
  accessibity: "",
  examples: [
    {
      id: "elevated",
      "id-link": "#elevated",
      title: "Elevated button",
      description:
        "An elevated button is used to display a primary action with emphasis. It has a shadow effect, making it appear raised from the background.",
      usages:
        "Use for primary actions on a page where you want the button to stand out.",
      purpose:
        "To grab the user's attention and encourage interaction with primary functions.",
      component: <ElevatedButton />,
      codeBlock: `
.elevated {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

<button className='elevated'>Elevated Button</button>
        `,
      open: false,
    },
    {
      id: "filled_tonal",
      "id-link": "#filled_tonal",
      title: "Filled Tonal button",
      description:
        "The filled tonal button uses a muted color scheme for actions that need to be visible but less dominant than filled buttons.",
      usages:
        "Ideal for secondary actions where you want to maintain some visibility without overpowering the primary action.",
      purpose:
        "To indicate secondary actions without drawing too much attention.",
      component: <FilledTonalButton />,
      codeBlock:
        "<button className='filled-tonal'>Filled Tonal Button</button>",
      open: false,
    },
    {
      id: "outlined",
      "id-link": "#outlined",
      title: "Outlined button",
      description:
        "An outlined button has a transparent background with a border, providing a clean and minimalistic design.",
      usages:
        "Perfect for less important actions, especially when the interface is already packed with primary buttons.",
      purpose:
        "To provide a subtle visual style for secondary or less frequent actions.",
      component: <OutlinedButtonComponent />,
      codeBlock: `
.outlined {
  padding: 10px 15px;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  border-color: #007bff;
  color: #007bff;
  "&:hover": {
    background-color: #007bff;
    color: #fff;
  };
}

<button className='outlined'>Outlined Button</button>`,
      open: false,
    },
    {
      id: "text",
      "id-link": "#text",
      title: "Text button",
      description:
        "A text button has no border or background, often used for links or small actions.",
      usages:
        "Best for links or non-primary actions that need minimal visual emphasis.",
      purpose:
        "To provide a lightweight action button with minimal distraction.",
      component: <TextButton />,
      codeBlock: "<button className='text'>Text Button</button>",
      open: false,
    },
    {
      id: "disabled",
      "id-link": "#disabled",
      title: "Disabled button",
      description:
        "A disabled button is inactive and cannot be clicked or interacted with.",
      usages:
        "Use for buttons that are temporarily unavailable or need to be disabled based on certain conditions.",
      purpose:
        "To indicate that the action is not available and prevent user interaction.",
      component: <DisabledButton />,
      codeBlock: `
.disabled {
  padding: "10px 15px",
  border: "2px solid",
  borderRadius: "5px",
  fontSize: "16px",
  margin: "5px",
  borderColor: "#cccccc",
  color: "#cccccc",
  cursor: "not-allowed",
}
  
<button className='disabled' disabled>Disabled Button</button>`,
      open: false,
    },
  ], // of above all types with accessibity
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    // Accessibity: "#accessibity",
    Examples: {
      "Elevated button": "#elevated",
      "Filled tonal button": "#filled_tonal",
      "Outlined button": "#outlined",
      "Text button": "#text",
      "Disabled button": "#disabled",
    },
    References: "#references",
  },
  references: {
    "MDN Docs":
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
  },
  previousNavigation: null,
  nextNavigation: {
    title: "Check box",
    link: "/all-components/check-box",
  },
};

export const jsonToInputData = {
  seoTitle: "Input Field Design and Usage",
  seoDescription:
    "Discover input fields, their types, and how they enable user data entry in forms and applications.",
  seoKeywords: [
    "input field",
    "form input",
    "text field",
    "UI input design",
    "interactive input",
  ],
  pageTitle: "Input Fields",
  pageDescription: [
    "Input fields are essential UI elements that allow users to enter data, such as text, numbers, or passwords.",
    "Common types of input fields include text, password, email, number, date, and search, each tailored for specific data types.",
  ],
  pageImage: "https://material-web.dev/components/images/input/hero.webp",
  types: ["Text", "Password", "Email", "Number", "Date", "Search"],
  interactiveDemo: "https://material-web.dev/components/input/demo",
  usages: { component: "", description: "" },
  purpose: { component: "", description: "" },
  accessibity: "",
  examples: [{ component: "", description: "" }], // of above all types with accessibity
};

export const jsonToSelectData = {
  seoTitle: "Select Field Design and Usage",
  seoDescription:
    "Learn about select fields, their types, and how they allow users to choose from predefined options.",
  seoKeywords: [
    "select field",
    "dropdown menu",
    "UI select design",
    "form select",
    "interactive select",
  ],
  pageTitle: "Select Fields",
  pageDescription: [
    "Select fields allow users to choose from a list of predefined options in a dropdown or menu format.",
    "Common types of select fields include single-select, multi-select, and grouped options, enhancing form usability and data input.",
  ],
  pageImage: "https://material-web.dev/components/images/select/hero.webp",
  types: ["Single-Select", "Multi-Select", "Grouped Options"],
  interactiveDemo: "https://material-web.dev/components/select/demo",
  usages: { component: "", description: "" },
  purpose: { component: "", description: "" },
  accessibity: "",
  examples: [{ component: "", description: "" }], // of above all types with accessibity
};

export const jsonToSwitchData = {
  seoTitle: "Switch Design and Usage",
  seoDescription:
    "Understand switches, their types, and how they enable users to toggle between two states effectively.",
  seoKeywords: [
    "switch",
    "toggle switch",
    "UI switch design",
    "interactive switch",
    "on-off switch",
  ],
  pageTitle: "Switches",
  pageDescription: [
    "Switches are UI elements that allow users to toggle between two states, such as on and off, enabling quick actions.",
    "Common types of switches include basic toggle switches, labeled switches, and icon-based switches for enhanced clarity.",
  ],
  pageImage: "https://material-web.dev/components/images/switch/hero.webp",
  types: ["Basic Toggle", "Labeled Switch", "Icon Switch"],
  interactiveDemo: "https://material-web.dev/components/switch/demo",
  usages: { component: "", description: "" },
  purpose: { component: "", description: "" },
  accessibity: "",
  examples: [{ component: "", description: "" }], // of above all types with accessibity
};

export const jsonToRadioData = {
  seoTitle: "Radio Button Design and Usage",
  seoDescription:
    "Explore radio buttons, their types, and how they allow users to select one option from a set.",
  seoKeywords: [
    "radio button",
    "UI radio button",
    "select option",
    "interactive radio button",
    "form radio button",
  ],
  pageTitle: "Radio Buttons",
  pageDescription: [
    "Radio buttons are used in forms to let users select one option from a predefined set, ensuring only one choice can be made.",
    "Common types of radio buttons include standard, grouped, and custom-styled options, allowing flexibility in design.",
  ],
  pageImage: "https://material-web.dev/components/images/radio/hero.webp",
  types: ["Standard", "Grouped", "Custom Styled"],
  interactiveDemo: "https://material-web.dev/components/radio/demo",
  usages: { component: "", description: "" },
  purpose: { component: "", description: "" },
  accessibity: "",
  examples: [{ component: "", description: "" }], // of above all types with accessibity
};

export const jsonToCheckboxData = {
  seoTitle: "Checkbox Design and Usage",
  seoDescription:
    "Explore checkboxes, their types, and how they allow users to select multiple options in a form.",
  seoKeywords: [
    "checkbox",
    "UI checkbox",
    "multiple options",
    "interactive checkbox",
    "form checkbox",
  ],
  pageTitle: "Checkboxes",
  pageDescription: [
    "Checkboxes are UI elements that allow users to select one or more options from a set, useful for multiple selections.",
    "Common types of checkboxes include standard, grouped, and custom-styled options, offering flexibility in form design.",
  ],
  pageImage: "https://material-web.dev/components/images/checkbox/hero.webp",
  types: ["Standard", "Grouped", "Custom Styled"],
  interactiveDemo: "https://material-web.dev/components/checkbox/demo",
  usages: { component: "", description: "" },
  purpose: { component: "", description: "" },
  accessibity: "",
  examples: [{ component: "", description: "" }], // of above all types with accessibity
};

export const jsonToFABData = {
  seoTitle: "Floating Action Button Design and Usage",
  seoDescription:
    "Discover floating action buttons, their design, and how they offer quick access to primary actions in apps.",
  seoKeywords: [
    "floating action button",
    "FAB",
    "UI button",
    "floating button",
    "primary action button",
  ],
  pageTitle: "Floating Action Buttons",
  pageDescription: [
    "Floating action buttons (FABs) are circular buttons that provide quick access to key actions, typically used in mobile and web apps.",
    "Common types of FABs include single-action, multi-action, and animated FABs, offering an engaging and intuitive user experience.",
  ],
  pageImage: "https://material-web.dev/components/images/fab/hero.webp",
  types: ["Single Action", "Multi Action", "Animated"],
  interactiveDemo: "https://material-web.dev/components/fab/demo",
  usages: { component: "", description: "" },
  purpose: { component: "", description: "" },
  accessibity: "",
  examples: [{ component: "", description: "" }], // of above all types with accessibity
};

// revised data for above
export const buttonData = {
  seoTitle: "Button Design and Usage",
  seoDescription:
    "Learn about buttons, their types, and how they enhance user interaction on web pages.",
  seoKeywords: [
    "button",
    "button design",
    "button types",
    "UI buttons",
    "interactive buttons",
    "Elevated buttons",
    "Filled buttons",
    "Filled Tonal buttons",
    "Outlined buttons",
    "Text buttons",
    "Disabled buttons",
  ],
  pageTitle: "Buttons",
  pageDescription: [
    "Buttons enable users to perform actions, such as submitting forms, liking posts, or sharing content.",
    "Common types of buttons include elevated, filled, tonal, outlined, and text, each offering unique visual emphasis and function.",
  ],
  pageImage: "https://material-web.dev/components/images/button/hero.webp",
  types: ["Elevated", "Filled", "Filled Tonal", "Outlined", "Text", "Disabled"],
  interactiveDemo: <SimpleButton />,
  accessibity: "",
  examples: [
    {
      id: "elevated",
      title: "Elevated button",
      description:
        "An elevated button is used to display a primary action with emphasis. It has a shadow effect, making it appear raised from the background.",
      usages:
        "Use for primary actions on a page where you want the button to stand out.",
      purpose:
        "To grab the user's attention and encourage interaction with primary functions.",
      component: <ElevatedButton />,
      codeBlock: `
.elevated {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

<button className='elevated'>Elevated Button</button>
        `,
      open: false,
    },
    {
      id: "icon-button",
      title: "Icon Button",
      description:
        "An icon button is a compact, visually-focused button that uses an icon to represent an action. It may include a tooltip or text label for clarity.",
      usages:
        "Use when space is limited or when the action is easily identifiable by its icon. Best suited for toolbar actions or secondary actions.",
      purpose:
        "To provide a visually efficient and space-saving method for users to perform frequent or contextual actions.",
      component: <IconButton />,
      codeBlock: `
.filled {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  background-color: #007bff;
  color: white;
}

<button className='filled'>Filled Button</button>`,
      open: false,
    },
    {
      id: "filled_tonal",
      title: "Filled Tonal button",
      description:
        "The filled tonal button uses a muted color scheme for actions that need to be visible but less dominant than filled buttons.",
      usages:
        "Ideal for secondary actions where you want to maintain some visibility without overpowering the primary action.",
      purpose:
        "To indicate secondary actions without drawing too much attention.",
      component: <FilledTonalButton />,
      codeBlock:
        "<button className='filled-tonal'>Filled Tonal Button</button>",
      open: false,
    },
    {
      id: "outlined",
      title: "Outlined button",
      description:
        "An outlined button has a transparent background with a border, providing a clean and minimalistic design.",
      usages:
        "Perfect for less important actions, especially when the interface is already packed with primary buttons.",
      purpose:
        "To provide a subtle visual style for secondary or less frequent actions.",
      component: <OutlinedButtonComponent />,
      codeBlock: `
.outlined {
  padding: 10px 15px;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  border-color: #007bff;
  color: #007bff;
  "&:hover": {
    background-color: #007bff;
    color: #fff;
  };
}

<button className='outlined'>Outlined Button</button>`,
      open: false,
    },
    {
      id: "text",
      title: "Text button",
      description:
        "A text button has no border or background, often used for links or small actions.",
      usages:
        "Best for links or non-primary actions that need minimal visual emphasis.",
      purpose:
        "To provide a lightweight action button with minimal distraction.",
      component: <TextButton />,
      codeBlock: "<button className='text'>Text Button</button>",
      open: false,
    },
    {
      id: "disabled",
      title: "Disabled button",
      description:
        "A disabled button is inactive and cannot be clicked or interacted with.",
      usages:
        "Use for buttons that are temporarily unavailable or need to be disabled based on certain conditions.",
      purpose:
        "To indicate that the action is not available and prevent user interaction.",
      component: <DisabledButton />,
      codeBlock: `
.disabled {
  padding: "10px 15px",
  border: "2px solid",
  borderRadius: "5px",
  fontSize: "16px",
  margin: "5px",
  borderColor: "#cccccc",
  color: "#cccccc",
  cursor: "not-allowed",
}
  
<button className='disabled' disabled>Disabled Button</button>`,
      open: false,
    },
  ], // of above all types with accessibity
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Elevated button": "#elevated",
      "Filled button": "#filled",
      "Filled tonal button": "#filled_tonal",
      "Outlined button": "#outlined",
      "Text button": "#text",
      "Disabled button": "#disabled",
    },
    References: "#references",
  },
  references: {
    "MDN Docs":
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
  },
  previousNavigation: null,
  nextNavigation: {
    title: "Check box",
    link: "/check-box",
  },
};

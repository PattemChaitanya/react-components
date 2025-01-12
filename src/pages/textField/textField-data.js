import ComplexTextField from "./complex-textField";
import SimpleTextField from "./simple-textField";

export const jsonToPageDisplay = {
  pageTitle: "TextField",
  description: "Variety of textField",
  jsonToDisplay: [
    {
      title: "Simple textField",
      subTitle: "Simple textField",
      toDisplay: "",
      component: <SimpleTextField />,
      open: false,
    },
    {
      title: "Complex textField",
      subTitle: "Complex textField",
      toDisplay: "",
      component: <ComplexTextField />,
      open: false,
    },
  ],
};

export const textFieldData = {
  seoTitle: "Text Field Component - Modern UI Design",
  seoDescription:
    "Explore the Text Field component, an essential input element for capturing user data, with creative examples, accessibility considerations, and interactive demos.",
  seoKeywords: [
    "Text Field",
    "UI Design",
    "Input Elements",
    "Modern Forms",
    "User Data Entry",
  ],
  pageTitle: "Text Field",
  pageDescription: [
    "The Text Field component is a versatile input element designed for capturing textual data from users.",
    "It can adapt to a variety of use cases, from simple single-line inputs to complex, multi-line inputs with formatting and validation.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Text Field",
    "Multi-Line Text Field",
    "Text Field with Prefix/Suffix",
    "Password Text Field",
    "Text Field with Validation",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "Text Fields should be fully navigable via keyboard, with clear focus indicators. Use ARIA attributes like 'aria-label' for naming the field and 'aria-invalid' for validation feedback. Provide real-time error messaging for users with screen readers and ensure that the contrast between text and background is sufficient.",
  examples: [
    {
      component: "Basic Text Field",
      description:
        "A simple, single-line text field for capturing short text entries.",
      id: "basic",
      title: "Basic Text Field Example",
      usages:
        "Used for capturing single-line inputs like names, email addresses, or search queries.",
      purpose: "Provides a clean and minimalistic way to input text.",
      codeBlock: "<text-field placeholder='Enter your name'></text-field>",
      open: false,
    },
    {
      component: "Multi-Line Text Field",
      description: "A text field that expands to accommodate longer inputs.",
      id: "multi",
      title: "Multi-Line Text Field Example",
      usages:
        "Ideal for capturing feedback, comments, or longer pieces of information.",
      purpose:
        "Creates a comfortable user experience for typing longer content.",
      codeBlock:
        "<text-field multiline rows='5' placeholder='Write your message'></text-field>",
      open: false,
    },
    {
      component: "Text Field with Prefix/Suffix",
      description:
        "An input field with a prefix or suffix to provide context for the input.",
      id: "prefix-suffix",
      title: "Text Field with Prefix/Suffix Example",
      usages:
        "Perfect for inputs like currency (e.g., $100), measurements (e.g., 50kg), or units (e.g., 15min).",
      purpose:
        "Improves clarity by adding contextual cues directly inside the input field.",
      codeBlock: "<text-field prefix='$' placeholder='Amount'></text-field>",
      open: false,
    },
    {
      component: "Password Text Field",
      description:
        "A secure text field for entering passwords, with a toggle to show or hide the input.",
      id: "password",
      title: "Password Text Field Example",
      usages:
        "Used for securely capturing sensitive information like passwords or PINs.",
      purpose:
        "Ensures privacy while giving users the flexibility to verify their input.",
      codeBlock:
        "<text-field type='password' toggle-password placeholder='Enter your password'></text-field>",
      open: false,
    },
    {
      component: "Text Field with Validation",
      description: "A text field that validates user input in real time.",
      id: "validation",
      title: "Text Field with Validation Example",
      usages:
        "Useful for validating email formats, phone numbers, or other specific patterns.",
      purpose:
        "Guides users to input data in the correct format, reducing errors.",
      codeBlock:
        "<text-field validation='email' placeholder='Enter your email'></text-field>",
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Text Field": "#basic",
      "Multi-Line Text Field": "#multi",
      "Text Field with Prefix/Suffix": "#prefix-suffix",
      "Password Text Field": "#password",
      "Text Field with Validation": "#validation",
    },
    References: "#references",
  },
  references: {
    "Accessible Rich Internet Applications (ARIA)":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",
    "Text Field Design Principles":
      "https://uxdesign.cc/designing-better-text-fields-best-practices-and-tips-85e22a717c4d",
    "Keyboard Accessibility Guidelines":
      "https://webaim.org/techniques/keyboard/",
  },
};

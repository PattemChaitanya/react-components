import {
  Checkbox,
  CheckboxThemed,
  CheckboxWithIcon,
  CheckboxWithLabel,
} from "./checkbox-component";

export const checkboxData = {
  seoTitle: "Checkbox Component - Versatile Multi-Select Control",
  seoDescription:
    "Explore the Checkbox component for multi-select functionality and form inputs. Includes examples, creative styles, and accessibility tips.",
  seoKeywords: [
    "Checkbox",
    "UI Design",
    "Selection Control",
    "Form Elements",
    "Custom Checkbox",
  ],
  pageTitle: "Checkbox",
  pageDescription: [
    "The Check box component is a versatile form element that allows users to select one or more options from a set.",
    "Check boxes are ideal for multi-select scenarios, binary settings, and customizable form inputs.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Checkbox",
    "Checkbox with Labels",
    "Custom-Themed Checkbox",
    "Indeterminate Checkbox",
    "Icon-Based Checkbox",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "Ensure each checkbox has a descriptive label, and use ARIA attributes like 'aria-checked' and 'aria-labelledby' where necessary. Keyboard navigation should support toggling the checkbox with Space or Enter, and focus indicators should be clear and visible. For indeterminate states, ensure they are communicated to assistive technologies.",
  examples: [
    {
      component: <Checkbox />,
      description: "A minimal checkbox for simple selection.",
      id: "basic",
      title: "Basic Checkbox Example",
      usages:
        "Used for scenarios like accepting terms, enabling features, or selecting preferences.",
      purpose: "Provides a straightforward way to toggle a binary state.",
      codeBlock: "<checkbox id='basic'>Accept Terms</checkbox>",
      open: false,
    },
    {
      component: <CheckboxWithLabel />,
      description: "A checkbox paired with a text label for better context.",
      id: "labels",
      title: "Checkbox with Labels Example",
      usages:
        "Ideal for forms where clarity about the checkbox's function is necessary.",
      purpose:
        "Enhances user understanding by pairing the checkbox with descriptive text.",
      codeBlock:
        "<checkbox id='labeled' label='Subscribe to newsletter'></checkbox>",
      open: false,
    },
    {
      component: <CheckboxThemed />,
      description:
        "A checkbox styled with custom visuals such as colors or animations.",
      id: "custom-theme",
      title: "Custom-Themed Checkbox Example",
      usages:
        "Perfect for branded designs or applications with unique visual identities.",
      purpose:
        "Combines functionality with creative expression for better user engagement.",
      codeBlock:
        "<checkbox id='custom' style='--checkbox-color: #6200ea;'>Custom Theme</checkbox>",
      open: false,
    },
    {
      component: "Indeterminate Checkbox",
      description: "A checkbox with a partial selection state.",
      id: "indeterminate",
      title: "Indeterminate Checkbox Example",
      usages:
        "Used in hierarchical selections, like when a parent option is partially selected.",
      purpose:
        "Communicates partial selection in a clear and accessible manner.",
      codeBlock:
        "<checkbox id='indeterminate' indeterminate>Partial Selection</checkbox>",
      open: false,
    },
    {
      component: <CheckboxWithIcon />,
      description:
        "A checkbox that uses icons or images instead of a traditional square.",
      id: "icons",
      title: "Icon-Based Checkbox Example",
      usages:
        "Great for visually rich designs, like voting systems or feedback tools.",
      purpose:
        "Improves usability by making selections more visually intuitive.",
      codeBlock: "<checkbox id='icon' icon='✔️'>Mark as Complete</checkbox>",
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Checkbox": "#basic",
      "Checkbox with Labels": "#labels",
      "Custom-Themed Checkbox": "#custom-theme",
      "Indeterminate Checkbox": "#indeterminate",
      "Icon-Based Checkbox": "#icons",
    },
    References: "#references",
  },
  references: {
    "ARIA Guidelines for Checkboxes":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Checkbox_Role",
    "Best Practices for Checkbox Design":
      "https://uxplanet.org/checkbox-ui-design-best-practices-4e0184fbb1e0",
    "Keyboard Navigation in Forms":
      "https://webaim.org/techniques/forms/controls",
  },
  previousNavigation: { title: "Buttons", link: "/buttons" },
  nextNavigation: {
    title: "Slider",
    link: "/slider",
  },
};

import { Chip, ChoiceChips, FilterChips, InputChips } from "./chips-component";

export const chipsData = {
  seoTitle: "Chips Component – A Complete Guide",
  seoDescription:
    "Explore Chips – compact UI elements for actions, inputs, filters, or selections. Learn to design, implement, and enhance user experience with them.",
  seoKeywords: [
    "chips component",
    "UI chips",
    "material design chips",
    "filter chips",
    "action chips",
    "input chips",
    "choice chips",
  ],
  pageTitle: "Chips",
  pageDescription: [
    "Chips are interactive UI components used to represent actions, choices, filters, or inputs in a compact, visually appealing way.",
    "They enhance user experience by enabling intuitive interaction in a minimal and organized format.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Action Chips", "Filter Chips", "Input Chips", "Choice Chips"],
  interactiveDemo: "https://material-web.dev/components/chips#interactive-demo",
  accessibity:
    "Chips are keyboard navigable, accessible via screen readers, and provide clear focus indicators to ensure a great experience for all users.",
  examples: [
    {
      component: (
        <Chip
          label="Apply Discount"
          onClick={() => alert("Discount Applied!")}
        />
      ),
      description:
        "Action chips for performing quick tasks, such as applying a discount code or opening a help dialog.",
      id: "action-chips",
      title: "Action Chips for Quick Tasks",
      usages:
        "Action chips are ideal for actions like toggling a feature or applying a function.",
      purpose:
        "To allow users to perform specific tasks quickly and intuitively.",
      codeBlock: `
<div class="chips-container">
  <div class="chip">Apply Code</div>
  <div class="chip">Open Help</div>
  <div class="chip">Start Chat</div>
</div>
      `,
      open: false,
    },
    {
      component: <ChoiceChips />,
      description:
        "Choice chips for selecting one option from multiple choices.",
      id: "choice-chips",
      title: "Choice Chips for Preferences",
      usages:
        "Choice chips are used when the user must select a single option from a set, such as themes or delivery options.",
      purpose:
        "To make single-option selections more user-friendly and visually engaging.",
      codeBlock: `
<div class="chips-container">
  <div class="chip">Light Theme</div>
  <div class="chip selected">Dark Theme</div>
  <div class="chip">System Default</div>
</div>
      `,
      open: false,
    },
    {
      component: <FilterChips />,
      description:
        "Filter chips for narrowing down options in a catalog or product list.",
      id: "filter-chips",
      title: "Filter Chips for Product Filters",
      usages:
        "Use filter chips to toggle between different categories, such as color, size, or brand.",
      purpose: "To simplify filtering options in a compact, organized manner.",
      codeBlock: `
<div class="chips-container">
  <div class="chip selected">Small</div>
  <div class="chip">Medium</div>
  <div class="chip">Large</div>
</div>
      `,
      open: false,
    },
    {
      component: <InputChips />,
      description:
        "Input chips to represent user input, like tags or email addresses in a form.",
      id: "input-chips",
      title: "Input Chips for Tagging",
      usages:
        "Use input chips for representing dynamic user input, such as adding or removing tags.",
      purpose:
        "To visually display user-provided data in a structured and editable way.",
      codeBlock: `
<div class="chips-container">
  <div class="chip">React <span class="chip-remove">&times;</span></div>
  <div class="chip">Material Design <span class="chip-remove">&times;</span></div>
  <div class="chip">UI Components <span class="chip-remove">&times;</span></div>
  <input type="text" placeholder="Add a tag" class="chip-input">
</div>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#interactive-demo",
    Accessibility: "#accessibity",
    Examples: {
      "Action Chips": "#action-chips",
      "Filter Chips": "#filter-chips",
      "Input Chips": "#input-chips",
      "Choice Chips": "#choice-chips",
    },
    References: "#references",
  },
  references: {
    "Material Design Chips": "https://material.io/components/chips",
    "WAI-ARIA Accessibility": "https://www.w3.org/WAI/ARIA/apg/patterns/chips/",
    "Chips Implementation Guide": "https://material-web.dev/components/chips",
  },
  previousNavigation: { title: "Input", link: "/input" },
  nextNavigation: {
    title: "FAB",
    link: "/fab",
  },
};

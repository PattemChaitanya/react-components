import {
  IconButtonWithBadge,
  SimpleIconButton,
  ToggleIconButton,
} from "./icon-button-component";

export const iconButtonData = {
  seoTitle: "Icon Button Component – A Complete Guide",
  seoDescription:
    "Learn how to design and implement Icon Buttons for intuitive user actions. A compact and visually rich alternative to traditional buttons.",
  seoKeywords: [
    "icon button",
    "material design icon button",
    "UI buttons",
    "icon-only buttons",
    "floating action button",
    "FAB",
    "toolbar buttons",
    "action buttons",
  ],
  pageTitle: "Icon Button",
  pageDescription: [
    "Icon buttons are compact UI components designed for actions where the meaning is visually represented through an icon.",
    "They are used in toolbars, floating action buttons, and other areas to streamline the user interface.",
  ],
  pageImage: "https://material-web.dev/components/images/icon-button/hero.webp",
  types: [
    "Standard Icon Button",
    "Toggle Icon Button",
    "Icon Button with Badge",
  ],
  interactiveDemo:
    "https://material-web.dev/components/icon-button#interactive-demo",
  accessibity:
    "Icon buttons use ARIA labels to ensure screen readers announce their purpose, and focus indicators are provided for accessibility.",
  examples: [
    {
      component: <SimpleIconButton />,
      description:
        "A simple icon button for actions like refresh, search, or settings.",
      id: "icon-button",
      title: "Standard Icon Button",
      usages:
        "Use for common actions that are visually represented by icons, such as search or delete.",
      purpose:
        "To keep the interface compact and visually intuitive for users.",
      codeBlock: `
<button class="icon-button" aria-label="Search">
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="10" cy="10" r="7" stroke="black" stroke-width="2" fill="none"></circle>
    <line x1="15" y1="15" x2="20" y2="20" stroke="black" stroke-width="2"></line>
  </svg>
</button>
      `,
      open: false,
    },
    {
      component: <ToggleIconButton />,
      description:
        "An icon button with toggle functionality for actions like 'favorite' or 'like'.",
      id: "toggle-icon-button",
      title: "Toggle Icon Button",
      usages:
        "Use toggle buttons for actions with binary states, like favorite/unfavorite.",
      purpose: "To provide visual feedback for toggled actions.",
      codeBlock: `
<button class="icon-button toggle-button" aria-label="Like">
  <svg class="icon" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"></path>
  </svg>
</button>
      `,
      open: false,
    },
    {
      component: <IconButtonWithBadge count={5} />,
      description:
        "An icon button with a badge to indicate notifications or item counts.",
      id: "icon-button-badge",
      title: "Icon Button with Badge",
      usages:
        "Use for actions that require a count or notification, like inbox or shopping cart.",
      purpose:
        "To provide actionable icons while also displaying additional context, like counts.",
      codeBlock: `
<div class="icon-button-with-badge">
  <button class="icon-button" aria-label="Notifications">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9v6.5l-1.75 1.75c-.41.41-.25 1.11.29 1.26L5 19h14l.46-.49c.54-.15.7-.85.29-1.26L19 15.5V9c0-3.87-3.13-7-7-7zm0 20c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z" fill="currentColor"></path>
    </svg>
  </button>
  <span class="badge">3</span>
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
      "Standard Icon Button": "#icon-button",
      "Toggle Icon Button": "#toggle-icon-button",
      "Icon Button with Badge": "#icon-button-badge",
    },
    References: "#references",
  },
  references: {
    "Material Design Icon Buttons": "https://material.io/components/buttons",
    "SVG Icon Accessibility":
      "https://developer.mozilla.org/en-US/docs/Web/SVG/Accessibility",
    "ARIA Button Patterns": "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
  },
  previousNavigation: { title: "FAB", link: "/fab" },
  nextNavigation: {
    title: "Lists",
    link: "/list",
  },
};

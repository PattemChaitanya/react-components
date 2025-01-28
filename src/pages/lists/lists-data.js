import {} from "./lists-component";

export const listsData = {
  seoTitle: "Lists Component – A Complete Guide",
  seoDescription:
    "Discover the versatility of lists – an essential UI element for displaying items, data, and navigation. Learn to design, implement, and enhance user experience with lists.",
  seoKeywords: [
    "lists component",
    "UI lists",
    "material design lists",
    "ordered lists",
    "unordered lists",
    "nested lists",
    "actionable lists",
  ],
  pageTitle: "Lists",
  pageDescription: [
    "Lists are foundational UI components used to display data, navigation items, or actionable content in a structured and easy-to-read manner.",
    "They play a key role in enhancing clarity and organization in user interfaces.",
  ],
  pageImage: "https://material-web.dev/components/images/lists/hero.webp",
  types: [
    "Ordered Lists",
    "Unordered Lists",
    "Nested Lists",
    "Actionable Lists",
  ],
  interactiveDemo: "https://material-web.dev/components/lists#interactive-demo",
  accessibity:
    "Lists are fully accessible, supporting screen readers and proper hierarchical structure using semantic HTML and ARIA roles.",
  examples: [
    {
      component: "Ordered Lists Example",
      description:
        "An ordered list to display steps in a process or a sequence of actions.",
      id: "ordered-lists",
      title: "Ordered List for Steps",
      usages:
        "Use ordered lists for processes, instructions, or steps requiring sequential order.",
      purpose: "To convey order or priority in a structured way.",
      codeBlock: `
<ol class="list">
  <li>Sign up for an account</li>
  <li>Verify your email address</li>
  <li>Start using the platform</li>
</ol>
      `,
      open: false,
    },
    {
      component: "Unordered Lists Example",
      description: "An unordered list to display items with no specific order.",
      id: "unordered-lists",
      title: "Unordered List for Features",
      usages:
        "Use unordered lists for displaying general items, such as features or options.",
      purpose: "To present non-sequential information in a readable format.",
      codeBlock: `
<ul class="list">
  <li>Fast and secure</li>
  <li>Easy to use</li>
  <li>24/7 customer support</li>
</ul>
      `,
      open: false,
    },
    {
      component: "Nested Lists Example",
      description: "A nested list for hierarchical or grouped information.",
      id: "nested-lists",
      title: "Nested List for Categories",
      usages:
        "Use nested lists for representing tree structures, categories, or grouped data.",
      purpose: "To organize content in a hierarchical structure.",
      codeBlock: `
<ul class="list">
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>
      `,
      open: false,
    },
    {
      component: "Actionable Lists Example",
      description:
        "An actionable list with items that trigger actions or navigation.",
      id: "actionable-lists",
      title: "Actionable List for Navigation",
      usages:
        "Use actionable lists for navigation menus or lists with clickable items.",
      purpose: "To provide interactive elements in a structured list format.",
      codeBlock: `
<ul class="list actionable-list">
  <li><a href="/dashboard">Dashboard</a></li>
  <li><a href="/settings">Settings</a></li>
  <li><a href="/logout">Logout</a></li>
</ul>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#interactive-demo",
    Accessibility: "#accessibity",
    Examples: {
      "Ordered Lists": "#ordered-lists",
      "Unordered Lists": "#unordered-lists",
      "Nested Lists": "#nested-lists",
      "Actionable Lists": "#actionable-lists",
    },
    References: "#references",
  },
  references: {
    "Material Design Lists": "https://material.io/components/lists",
    "HTML Lists Documentation":
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
    "WAI-ARIA Accessibility for Lists":
      "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/",
  },
  previousNavigation: { title: "Icon Buttons", link: "/icon-buttons" },
  nextNavigation: {
    title: "Menu",
    link: "/menu",
  },
};

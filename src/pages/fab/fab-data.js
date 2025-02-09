import { ExtendedFAB, SimpleFAB } from "./fab-component";

export const fabData = {
  seoTitle: "Floating Action Button (FAB) Guide",
  seoDescription:
    "Learn how to implement a Floating Action Button (FAB) using Material Design principles, with examples, accessibility tips, and interactive demos.",
  seoKeywords: [
    "Material Design FAB",
    "Floating Action Button",
    "FAB UI Component",
    "Material Design Components",
  ],
  pageTitle: "Fab",
  pageDescription: [
    "The Floating Action Button (FAB) is a circular button that represents a primary action on a screen.",
    "It’s designed to provide prominence to a key action in your app, making it easily accessible while adhering to Material Design principles.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Default FAB", "Extended FAB"],
  interactiveDemo: "https://material-web.dev/components/fab",
  accessibity:
    "Ensure the FAB is accessible by adding proper ARIA roles and labels. For instance, use `aria-label` to describe the action of the button. Always position it in a way that doesn’t obstruct critical UI elements. If multiple FABs exist, prioritize one as the primary action for clarity.",
  examples: [
    {
      component: <SimpleFAB />,
      description: "A FAB with an icon that represents adding a new item.",
      id: "fab-add-default",
      title: "Default FAB Example",
      usages:
        "Use this for actions like creating a new document, adding a task, or initiating a primary action.",
      purpose:
        "Highlights the primary action without taking up much screen real estate.",
      codeBlock: `
<button class="fab" aria-label="Add">
  <span class="material-icons">add</span>
</button>
`,
      open: false,
    },
    {
      component: <ExtendedFAB />,
      description: "An extended FAB with both an icon and text label.",
      id: "fab-extended",
      title: "Extended FAB Example",
      usages:
        "Best used when the action needs more context or is less familiar to the user.",
      purpose:
        "Provides more clarity while maintaining the primary action's prominence.",
      codeBlock: `
<button class="fab extended" aria-label="Compose">
  <span class="material-icons">edit</span>
  <span>Compose</span>
</button>
`,
      open: false,
    },
    //     {
    //       component: "Small FAB",
    //       description: "A compact FAB suitable for dense UIs.",
    //       id: "fab-small",
    //       title: "Small FAB Example",
    //       usages: "Use in places with limited space, like toolbars or lists.",
    //       purpose: "Maintains usability while adhering to compact UI constraints.",
    //       codeBlock: `
    // <button class="fab small" aria-label="Search">
    //   <span class="material-icons">search</span>
    // </button>
    // `,
    //       open: false,
    //     },
  ],
  links: {
    Types: "#types",
    // "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Default FAB": "#fab-add-default",
      "Extended FAB": "#fab-extended",
      // "Small FAB Example": "#fab-small",
    },
    References: "#references",
  },
  references: {
    "Material Design Guidelines":
      "https://m3.material.io/components/floating-action-button",
    "Accessibility in Buttons":
      "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
    "Material Icons": "https://fonts.google.com/icons",
  },
  previousNavigation: { title: "Chips", link: "/chip" },
  nextNavigation: {
    title: "Icon Buttons",
    link: "/icon-buttons",
  },
};

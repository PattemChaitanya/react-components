import ComplexDrawer from "./complex-drawer";
import SimpleDrawer from "./simple-drawer";

export const jsonToPageDisplay = {
  pageTitle: "Drawer",
  description: "Variety of drawer",
  jsonToDisplay: [
    {
      title: "Simple drawer",
      subTitle: "Simple drawer",
      toDisplay: "",
      component: <SimpleDrawer />,
      open: false,
    },
    {
      title: "Complex drawer",
      subTitle: "Complex drawer",
      toDisplay: "",
      component: <ComplexDrawer />,
      open: false,
    },
  ],
};

export const sideNavData = {
  seoTitle: "Side Navigation Drawer - Design, Usage, and Accessibility",
  seoDescription:
    "Create a responsive and accessible side navigation drawer based on Material Design principles. Learn design tips, accessibility features, and practical examples.",
  seoKeywords: [
    "side navigation",
    "drawer menu",
    "responsive navigation",
    "material design side navigation",
    "accessible navigation",
  ],
  pageTitle: "Side Navigation Drawer",
  pageDescription: [
    "Side navigation drawers provide quick access to primary destinations in an app. They can be permanent, persistent, or temporary depending on the app's use case.",
    "Follow Material Design principles when building side navigation. Ensure a clean layout with clear labels for navigation links. Avoid cluttering the drawer with too many options, and keep actions logically grouped.",
    "For responsiveness, side navigation should adapt to different screen sizes. On mobile devices, use a temporary (modal) drawer to avoid taking up screen space, while on desktops, you can use a persistent or permanent drawer.",
    "Accessibility is crucial for side navigation. Ensure focus management when the drawer is open, and use `aria-hidden`, `aria-expanded`, and `aria-label` attributes to help screen readers understand its purpose and state.",
  ],
  pageImage: "https://material-web.dev/components/images/side-nav/hero.webp",
  types: ["Temporary Drawer", "Persistent Drawer", "Permanent Drawer"],
  interactiveDemo: "https://example.com/side-nav-demo", // Replace with a valid URL for the demo if applicable.
  accessibity:
    "When the drawer is open, trap focus within it to prevent users from interacting with other elements on the page. Add `aria-hidden` to non-essential elements outside the drawer. Ensure users can navigate using a keyboard (`Tab` and `Shift+Tab`), and provide a clear way to close the drawer, such as a close button with an appropriate `aria-label`.",
  examples: [
    {
      component: "Temporary Drawer",
      description:
        "A modal side navigation drawer that overlays the content and can be toggled on smaller devices.",
      id: "temporary-drawer",
      title: "Temporary Drawer Example",
      usages: "Use for mobile apps or websites where screen space is limited.",
      purpose:
        "This drawer provides a space-efficient way to show navigation links without occupying permanent screen real estate.",
      codeBlock: `
<div>
  <button id="toggleDrawer" style="background-color: #6200ea; color: white; border: none; padding: 10px 20px; cursor: pointer;">
    Open Drawer
  </button>
  <div id="drawer" style="position: fixed; top: 0; left: -250px; height: 100%; width: 250px; background-color: white; box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2); transition: left 0.3s; z-index: 1000;">
    <button id="closeDrawer" style="background: none; border: none; padding: 10px; cursor: pointer;">
      Close
    </button>
    <ul style="list-style: none; padding: 0; margin: 20px 0;">
      <li><a href="#home" style="text-decoration: none; color: #6200ea; padding: 10px; display: block;">Home</a></li>
      <li><a href="#about" style="text-decoration: none; color: #6200ea; padding: 10px; display: block;">About</a></li>
    </ul>
  </div>
</div>

<script>
  const toggleDrawer = document.getElementById('toggleDrawer');
  const closeDrawer = document.getElementById('closeDrawer');
  const drawer = document.getElementById('drawer');

  toggleDrawer.addEventListener('click', () => {
    drawer.style.left = '0';
  });

  closeDrawer.addEventListener('click', () => {
    drawer.style.left = '-250px';
  });

  window.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && e.target !== toggleDrawer) {
      drawer.style.left = '-250px';
    }
  });
</script>
      `,
      open: false,
    },
    {
      component: "Persistent Drawer",
      description:
        "A persistent side navigation drawer that remains visible and can be toggled.",
      id: "persistent-drawer",
      title: "Persistent Drawer Example",
      usages:
        "Use for desktop applications or websites where navigation links should be easily accessible.",
      purpose:
        "This type of drawer stays open and doesn’t overlap the content, ideal for layouts with more screen space.",
      codeBlock: `
<div style="display: flex;">
  <div id="drawer" style="width: 250px; height: 100vh; background-color: #f5f5f5; box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);">
    <ul style="list-style: none; padding: 0; margin: 20px 0;">
      <li><a href="#home" style="text-decoration: none; color: #6200ea; padding: 10px; display: block;">Home</a></li>
      <li><a href="#about" style="text-decoration: none; color: #6200ea; padding: 10px; display: block;">About</a></li>
    </ul>
  </div>
  <div style="flex: 1; padding: 20px;">
    <p>Main content area</p>
  </div>
</div>
      `,
      open: false,
    },
    {
      component: "Permanent Drawer",
      description:
        "A side navigation drawer that is always visible and part of the layout.",
      id: "permanent-drawer",
      title: "Permanent Drawer Example",
      usages:
        "Use for desktop apps or dashboards where navigation is a primary part of the user experience.",
      purpose:
        "This drawer is permanently visible, providing instant access to navigation links without toggling.",
      codeBlock: `
<div style="display: flex;">
  <nav style="width: 250px; background-color: #f5f5f5; height: 100vh; padding: 20px; box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);">
    <ul style="list-style: none; padding: 0;">
      <li><a href="#dashboard" style="text-decoration: none; color: #6200ea; padding: 10px; display: block;">Dashboard</a></li>
      <li><a href="#settings" style="text-decoration: none; color: #6200ea; padding: 10px; display: block;">Settings</a></li>
    </ul>
  </nav>
  <main style="flex: 1; padding: 20px;">
    <h1>Welcome to the Dashboard</h1>
    <p>This is the main content area.</p>
  </main>
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
      "Temporary Drawer": "#temporary-drawer",
      "Persistent Drawer": "#persistent-drawer",
      "Permanent Drawer": "#permanent-drawer",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
    "Material Design": "https://material.io/components/navigation-drawer",
    "CSS Tricks":
      "https://css-tricks.com/implementing-a-slide-out-navigation-menu/",
  },
};

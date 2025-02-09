import { Navbar, NavbarDropdown, NavbarWithSearch } from "./top-nav-component";

export const topNavData = {
  seoTitle: "Top Navigation Component - Design, Usage, and Accessibility",
  seoDescription:
    "Learn how to create a responsive and accessible top navigation bar with Material Design principles, optimized for both desktop and mobile experiences.",
  seoKeywords: [
    "top navigation",
    "responsive nav bar",
    "navigation component",
    "material design navbar",
    "accessible navigation",
  ],
  pageTitle: "Top Navigation",
  pageDescription: [
    "Top navigation bars are essential for providing users with a seamless way to navigate through a website or application. Creating one from scratch offers flexibility in design and responsiveness.",
    "When building top navigation, ensure a balance between visibility, usability, and aesthetics. Consistent padding, appropriate use of icons, and focus states are essential for an intuitive experience.",
    "Ensure your navigation bar is fully responsive, using CSS Grid or Flexbox to manage layout and alignment. On smaller screens, consider incorporating a hamburger menu for compactness.",
    "For accessibility, use `aria-label` for the navigation container and `aria-current` for the active link to clearly indicate the user's current location. Ensure all interactive elements are keyboard-navigable.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Simple Navigation",
    "Navigation with Dropdown",
    "Navigation with Search",
  ],
  interactiveDemo: "https://example.com/nav-demo", // Replace with an actual interactive demo URL if applicable.
  accessibity:
    "Beyond semantic HTML and ARIA roles, ensure your top navigation uses appropriate focus management, especially for dropdowns and mobile views. Make sure that navigation links are focusable and can be activated by keyboard events (Enter/Space) with visual feedback.",
  examples: [
    {
      component: <Navbar />,
      description:
        "A simple horizontal navigation bar with links to different sections of the website.",
      id: "simple-navigation",
      title: "Simple Navigation Example",
      usages:
        "Use for websites or apps with a few core sections, providing straightforward and clear navigation.",
      purpose:
        "This example demonstrates the simplest layout for top navigation with horizontal alignment and minimal elements.",
      codeBlock: `
<div style="display: flex; justify-content: space-around; background-color: #6200ea; padding: 12px 0;">
  <a href="#home" style="color: white; text-decoration: none; padding: 12px 20px; font-size: 1rem;">Home</a>
  <a href="#about" style="color: white; text-decoration: none; padding: 12px 20px; font-size: 1rem;">About</a>
  <a href="#contact" style="color: white; text-decoration: none; padding: 12px 20px; font-size: 1rem;">Contact</a>
</div>
      `,
      open: false,
    },
    {
      component: <NavbarDropdown />,
      description:
        "A navigation bar with a dropdown menu to handle more options efficiently.",
      id: "nav-with-dropdown",
      title: "Navigation with Dropdown Example",
      usages:
        "Use for websites or apps that require additional sections to be grouped under a menu, saving space.",
      purpose:
        "This example demonstrates the integration of a dropdown menu within the navigation bar for advanced navigation scenarios.",
      codeBlock: `
<div style="display: flex; justify-content: space-around; background-color: #6200ea; padding: 12px 0;">
  <a href="#home" style="color: white; text-decoration: none; padding: 12px 20px; font-size: 1rem;">Home</a>
  <a href="#about" style="color: white; text-decoration: none; padding: 12px 20px; font-size: 1rem;">About</a>
  <div style="position: relative;">
    <a href="#services" style="color: white; text-decoration: none; padding: 12px 20px; font-size: 1rem;">Services</a>
    <div style="display: none; position: absolute; top: 100%; left: 0; background-color: white; border-radius: 4px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);">
      <a href="#web-design" style="color: #6200ea; text-decoration: none; padding: 8px 16px; display: block;">Web Design</a>
      <a href="#seo" style="color: #6200ea; text-decoration: none; padding: 8px 16px; display: block;">SEO</a>
    </div>
  </div>
</div>

<script>
  const dropdown = document.querySelector('div[style="position: relative;"]');
  dropdown.addEventListener("mouseover", () => {
    dropdown.querySelector('div').style.display = "block";
  });
  dropdown.addEventListener("mouseout", () => {
    dropdown.querySelector('div').style.display = "none";
  });
</script>
      `,
      open: false,
    },
    {
      component: <NavbarWithSearch />,
      description:
        "A navigation bar with a search bar included for quick access to content.",
      id: "nav-with-search",
      title: "Navigation with Search Example",
      usages:
        "Use for websites or apps where users frequently search for content and need quick access to a search input.",
      purpose:
        "This example integrates a search bar into the navigation for user convenience while keeping the overall layout clean.",
      codeBlock: `
<div style="display: flex; justify-content: space-between; align-items: center; background-color: #6200ea; padding: 12px 0;">
  <div style="display: flex; gap: 20px;">
    <a href="#home" style="color: white; text-decoration: none; padding: 12px 20px; font-size: 1rem;">Home</a>
    <a href="#about" style="color: white; text-decoration: none; padding: 12px 20px; font-size: 1rem;">About</a>
  </div>
  <input type="text" placeholder="Search..." aria-label="Search" style="padding: 8px; border-radius: 4px; border: none; font-size: 1rem;">
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
      "Simple Navigation": "#simple-navigation",
      "Navigation with Dropdown": "#nav-with-dropdown",
      "Navigation with Search": "#nav-with-search",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
    "Material Design": "https://material.io/components/menus",
    "CSS Tricks": "https://css-tricks.com/almanac/properties/f/flex/",
  },
};

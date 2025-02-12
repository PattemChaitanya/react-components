import {
  ContextMenu,
  DropdownMenu,
  MegaMenu,
  NavigationMenu,
} from "./menu-component";

const menuContextData = {
  megaMenuItems: [
    {
      label: "Products",
      categories: [
        {
          title: "Electronics",
          links: [
            { label: "Laptops", url: "#" },
            { label: "Phones", url: "#" },
          ],
        },
        {
          title: "Home Appliances",
          links: [
            { label: "Refrigerators", url: "#" },
            { label: "Washing Machines", url: "#" },
          ],
        },
      ],
    },
    {
      label: "Services",
      categories: [
        {
          title: "Customer Support",
          links: [
            { label: "Help Center", url: "#" },
            { label: "Contact Us", url: "#" },
          ],
        },
        {
          title: "Repairs",
          links: [
            { label: "Schedule a Repair", url: "#" },
            { label: "Warranty Info", url: "#" },
          ],
        },
      ],
    },
  ],
  menuOptions: [
    { label: "Copy", onClick: () => alert("Copied!") },
    { label: "Paste", onClick: () => alert("Pasted!") },
    { label: "Delete", onClick: () => alert("Deleted!") },
  ],
  menuItems: [
    { label: "Home", url: "#" },
    { label: "About", url: "#" },
    { label: "Services", url: "#" },
    { label: "Contact", url: "#" },
  ],
  dropDownMenuOptions: [
    { label: "Profile", onClick: () => alert("Profile Clicked") },
    { label: "Settings", onClick: () => alert("Settings Clicked") },
    { label: "Logout", onClick: () => alert("Logged Out") },
  ],
};

export const menuData = {
  seoTitle: "Menu Component – A Complete Guide",
  seoDescription:
    "Learn how to design and implement menus – essential UI components for navigation, actions, and content organization in web applications.",
  seoKeywords: [
    "menu component",
    "UI menus",
    "material design menu",
    "dropdown menu",
    "context menu",
    "navigation menu",
    "mega menu",
  ],
  pageTitle: "Menu",
  pageDescription: [
    "Menus are dynamic UI components that provide navigation or action options to users.",
    "They enhance usability and content organization by grouping related actions or links in a compact interface.",
  ],
  pageImage: "https://material-web.dev/components/images/menu/hero.webp",
  types: ["Dropdown Menu", "Context Menu", "Navigation Menu", "Mega Menu"],
  interactiveDemo: "https://material-web.dev/components/menu#interactive-demo",
  accessibity:
    "Menus are designed to be accessible, with keyboard navigation, ARIA roles, and focus management for screen readers.",
  examples: [
    {
      component: <DropdownMenu options={menuContextData.dropDownMenuOptions} />,
      description:
        "A dropdown menu for displaying a list of actions or options when the user clicks a button.",
      id: "dropdown-menu",
      title: "Dropdown Menu for Actions",
      usages:
        "Use dropdown menus for showing a compact list of actions, such as account settings or filtering options.",
      purpose:
        "To group related actions in a collapsible format, saving screen space.",
      codeBlock: `
<div class="menu-container">
  <button class="menu-trigger">Options</button>
  <ul class="dropdown-menu">
    <li>Edit Profile</li>
    <li>Settings</li>
    <li>Logout</li>
  </ul>
</div>
      `,
      open: false,
    },
    {
      component: <ContextMenu options={menuContextData.menuOptions} />,
      description:
        "A context menu for displaying contextual options when the user right-clicks on an element.",
      id: "context-menu",
      title: "Context Menu for File Actions",
      usages:
        "Use context menus for providing file or object-specific actions on right-click.",
      purpose: "To show options specific to the context of the user’s action.",
      codeBlock: `
<div class="context-menu-container">
  <div class="file-item" oncontextmenu="showContextMenu(event)">
    File.txt
  </div>
  <ul class="context-menu">
    <li>Open</li>
    <li>Rename</li>
    <li>Delete</li>
  </ul>
</div>
      `,
      open: false,
    },
    {
      component: <NavigationMenu menuItems={menuContextData.menuItems} />,
      description:
        "A navigation menu for website or app navigation, often displayed in a sidebar or header.",
      id: "navigation-menu",
      title: "Sidebar Navigation Menu",
      usages:
        "Use navigation menus for guiding users through app sections or pages.",
      purpose:
        "To create a clear and structured navigation experience for users.",
      codeBlock: `
<nav class="navigation-menu">
  <ul>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/profile">Profile</a></li>
    <li><a href="/settings">Settings</a></li>
  </ul>
</nav>
      `,
      open: false,
    },
    {
      component: <MegaMenu menuItems={menuContextData.megaMenuItems} />,
      description:
        "A mega menu for displaying extensive navigation options in a large, multi-column layout.",
      id: "mega-menu",
      title: "Mega Menu for E-Commerce",
      usages:
        "Use mega menus for websites with extensive categories, such as e-commerce or large portals.",
      purpose:
        "To organize a vast number of navigation links into a clear, hierarchical structure.",
      codeBlock: `
<div class="mega-menu">
  <button class="menu-trigger">Shop</button>
  <div class="menu-content">
    <div class="menu-category">
      <h4>Clothing</h4>
      <ul>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
      </ul>
    </div>
    <div class="menu-category">
      <h4>Accessories</h4>
      <ul>
        <li><a href="/bags">Bags</a></li>
        <li><a href="/watches">Watches</a></li>
        <li><a href="/jewelry">Jewelry</a></li>
      </ul>
    </div>
  </div>
</div>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    // "Interactive Demo": "#interactive-demo",
    Accessibility: "#accessibity",
    Examples: {
      "Dropdown Menu": "#dropdown-menu",
      "Context Menu": "#context-menu",
      "Navigation Menu": "#navigation-menu",
      "Mega Menu": "#mega-menu",
    },
    References: "#references",
  },
  references: {
    "Material Design Menus": "https://material.io/components/menus",
    "W3C ARIA Menu Roles": "https://www.w3.org/TR/wai-aria-practices/#menu",
    "Dropdown Menu Accessibility":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Menu_Role",
  },
  previousNavigation: { title: "Lists", link: "/all-components/list" },
  nextNavigation: {
    title: "Radio Buttons",
    link: "/all-components/radio-buttons",
  },
};

import {
  BasicSelect,
  CategorizedDropdown,
  CustomMultiSelect,
  MultiSelect,
  SearchableDropdown,
} from "./select-component";

const selectMenu = {
  options: ["Option 1", "Option 2", "Option 3"],
  multiOptions: ["Apple", "Banana", "Cherry", "Date", "Grapes"],
  categorizedOptions: [
    { category: "Fruits", items: ["Apple", "Banana", "Cherry"] },
    { category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
    { category: "Dairy", items: ["Milk", "Cheese", "Yogurt"] },
  ],
};

export const selectData = {
  seoTitle: "Select Component - Intuitive Dropdown Menus",
  seoDescription:
    "Discover the Select component for creating dropdowns, multi-select menus, and custom list-based inputs. Includes examples, accessibility tips, and demos.",
  seoKeywords: [
    "Select",
    "Dropdown Menu",
    "UI Design",
    "Form Elements",
    "Custom Inputs",
  ],
  pageTitle: "Select",
  pageDescription: [
    "The Select component is a form element that enables users to choose one or more options from a dropdown menu.",
    "It can be used in a variety of contexts, from simple single-option selectors to multi-select menus with advanced customization.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Dropdown",
    "Multi-Select Dropdown",
    "Searchable Dropdown",
    "Grouped Options",
    "Customizable Select",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "The Select component should be fully keyboard-navigable and screen-reader friendly. Ensure ARIA roles like 'listbox' and 'option' are used. Provide visual focus indicators and announce selected or filtered options dynamically. For multi-select, ensure that selections are announced properly to assistive technologies.",
  examples: [
    {
      component: (
        <BasicSelect options={selectMenu.options} label="Choose an option:" />
      ),
      description: "A simple dropdown menu for selecting one option.",
      id: "basic",
      title: "Basic Dropdown Example",
      usages:
        "Used for scenarios where users need to pick one option from a predefined list.",
      purpose:
        "Simplifies forms by reducing input options to a manageable dropdown.",
      codeBlock:
        "<select><option>Option 1</option><option>Option 2</option></select>",
      open: false,
    },
    {
      component: (
        <MultiSelect options={selectMenu.multiOptions} label="Select fruits:" />
      ),
      description: "A dropdown menu allowing selection of multiple options.",
      id: "multi",
      title: "Multi-Select Dropdown Example",
      usages: "Ideal for selecting tags, categories, or multiple preferences.",
      purpose:
        "Gives users the flexibility to choose more than one option in a single input.",
      codeBlock:
        "<select multiple><option>Option 1</option><option>Option 2</option></select>",
      open: false,
    },
    {
      component: (
        <SearchableDropdown
          options={selectMenu.multiOptions}
          label="Select a fruit:"
        />
      ),
      description: "A dropdown menu with a search bar for filtering options.",
      id: "searchable",
      title: "Searchable Dropdown Example",
      usages:
        "Perfect for large lists where users need to quickly find their selection.",
      purpose: "Enhances usability by making long lists easier to navigate.",
      codeBlock:
        '<searchable-select options=\'["Option 1", "Option 2"]\'></searchable-select>',
      open: false,
    },
    {
      component: (
        <CategorizedDropdown
          options={selectMenu.categorizedOptions}
          label="Select an item:"
        />
      ),
      description: "A dropdown menu with categorized options.",
      id: "grouped",
      title: "Grouped Options Example",
      usages: "Useful for grouping related options, like country and region.",
      purpose: "Organizes complex lists for better readability.",
      codeBlock:
        "<select><optgroup label='Group 1'><option>Option 1</option></optgroup></select>",
      open: false,
    },
    {
      component: <CustomMultiSelect />,
      description: "A select component with custom icons, colors, or layouts.",
      id: "custom",
      title: "Customizable Select Example",
      usages:
        "Great for branded designs or applications that require unique visuals.",
      purpose:
        "Improves visual appeal and aligns with custom UI/UX requirements.",
      codeBlock:
        '<custom-select options=\'[{icon: "⭐", label: "Star"}, {icon: "🔥", label: "Fire"}]\'></custom-select>',
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Dropdown": "#basic",
      "Multi-Select Dropdown": "#multi",
      "Searchable Dropdown": "#searchable",
      "Grouped Options": "#grouped",
      "Customizable Select": "#custom",
    },
    References: "#references",
  },
  references: {
    "ARIA Roles for Select Menus":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Listbox_Role",
    "Dropdown Best Practices":
      "https://uxdesign.cc/designing-effective-dropdowns-best-practices-5a9f9f39908d",
    "Keyboard Navigation in Forms":
      "https://webaim.org/techniques/forms/controls",
  },
  previousNavigation: { title: "Radio Buttons", link: "/radio-buttons" },
  nextNavigation: {
    title: "Switch",
    link: "/switch",
  },
};

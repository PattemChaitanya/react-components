import {} from "./flexbox-component";

export const flexBoxData = {
  seoTitle: "Flexbox Guide for Beginners - Learn CSS Flexbox Easily",
  seoDescription:
    "A beginner-friendly guide to CSS Flexbox. Learn how to align, distribute, and order items in a flexible container with examples and interactive demos.",
  seoKeywords: [
    "CSS Flexbox",
    "Flexbox beginner guide",
    "CSS layout",
    "Flexbox examples",
    "Learn Flexbox",
  ],
  pageTitle: "CSS Flexbox Guide for Beginners",
  pageDescription: [
    "Flexbox, short for 'Flexible Box Layout,' is a CSS layout model that makes it easy to design responsive, one-dimensional layouts. It excels at aligning and distributing space among items in a container.",
    "With Flexbox, you can control alignment, spacing, and ordering of elements along both horizontal and vertical axes without using float or positioning hacks.",
    "This guide covers the basics of Flexbox properties, how to use them, and practical examples. Whether you're building a navigation bar, aligning buttons, or creating dynamic layouts, Flexbox makes it effortless.",
  ],
  pageImage: "https://material-web.dev/components/images/flexbox/hero.webp",
  types: ["Basic Concepts", "Flex Properties", "Real-World Examples"],
  interactiveDemo: "https://example.com/flexbox-demo", // Replace with an actual demo link.
  accessibity:
    "Flexbox simplifies creating accessible layouts by allowing better control over alignment and order. Use semantic HTML elements and proper ARIA roles when needed for better assistive technology support.",
  examples: [
    {
      component: "Basic Concepts",
      description:
        "Learn the fundamental concepts of Flexbox, including the container, items, and main and cross axes.",
      id: "basic-concepts",
      title: "What is Flexbox?",
      usages: "Introduces how Flexbox works and its core principles.",
      purpose: "To provide a foundation for understanding the Flexbox model.",
      codeBlock: `
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>

<style>
.flex-container {
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
}
.flex-item {
  padding: 10px;
  background-color: #e0e0e0;
  margin: 5px;
  border: 1px solid #ccc;
}
</style>
      `,
      open: false,
    },
    {
      component: "Flex Properties",
      description:
        "Understand and experiment with Flexbox properties like `flex-direction`, `justify-content`, `align-items`, and `order`.",
      id: "flex-properties",
      title: "Flexbox Properties Explained",
      usages:
        "Shows how to align, distribute, and reorder items inside a flex container.",
      purpose:
        "To make it easier for users to manipulate layout using Flexbox.",
      codeBlock: `
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>

<style>
.flex-container {
  display: flex;
  flex-direction: row; /* Row, column, row-reverse, column-reverse */
  justify-content: space-between; /* Flex-start, flex-end, center, space-between, space-around, space-evenly */
  align-items: center; /* Flex-start, flex-end, center, baseline, stretch */
}
.flex-item {
  padding: 10px;
  background-color: #ffcc80;
  margin: 5px;
}
</style>
      `,
      open: false,
    },
    {
      component: "Real-World Examples",
      description:
        "Practical examples of Flexbox, like navigation bars, card layouts, and button groups.",
      id: "real-world-examples",
      title: "Practical Examples",
      usages:
        "Learn how Flexbox can be used in real-world scenarios to create dynamic, responsive layouts.",
      purpose:
        "To demonstrate the power and simplicity of Flexbox with realistic use cases.",
      codeBlock: `
<!-- Example: Responsive Navigation Bar -->
<nav class="flex-container">
  <div class="flex-item">Home</div>
  <div class="flex-item">About</div>
  <div class="flex-item">Contact</div>
</nav>

<style>
.flex-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #6200ea;
  color: white;
}
.flex-item {
  padding: 5px 10px;
  cursor: pointer;
}
.flex-item:hover {
  background-color: #3700b3;
}
</style>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Concepts": "#basic-concepts",
      "Flex Properties": "#flex-properties",
      "Real-World Examples": "#real-world-examples",
    },
    References: "#references",
  },
  references: {
    "MDN Web Docs":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout",
    "Flexbox Cheatsheet":
      "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    "Material Design":
      "https://material.io/design/layout/responsive-layout-grid.html",
  },
};

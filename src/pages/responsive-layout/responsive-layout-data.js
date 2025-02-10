import {} from "./responsive-layout-component";

export const responsiveData = {
  seoTitle: "Responsive Web Page Guide - Design and Accessibility",
  seoDescription:
    "Learn how to create a fully responsive and accessible web page layout that adapts seamlessly to all screen sizes, following Material Design principles.",
  seoKeywords: [
    "responsive web design",
    "material design layout",
    "adaptive web pages",
    "accessibility in responsive design",
  ],
  pageTitle: "Responsive Web Page Design",
  pageDescription: [
    "A responsive web page ensures a seamless user experience across devices, from mobile phones to large desktop screens.",
    "When designing a responsive layout, start by identifying key breakpoints that adapt your design for various screen sizes. Use a mobile-first approach for optimal performance.",
    "Material Design recommends a consistent grid system, flexible containers, and responsive typography to maintain a clean and organized layout across all devices.",
    "Ensure accessibility by focusing on readable font sizes, proper touch targets, and logical content flow. Test your page for usability on touchscreens, keyboards, and screen readers.",
  ],
  pageImage: "https://material-web.dev/components/images/responsive/hero.webp",
  types: ["Mobile Layout", "Tablet Layout", "Desktop Layout"],
  interactiveDemo: "",
  accessibity:
    "For responsive pages, ensure logical navigation order and focus management. Use semantic HTML elements (`<header>`, `<main>`, `<footer>`) for assistive technologies. Ensure all interactive elements are touch-friendly and test using screen readers and keyboard navigation.",
  examples: [
    {
      component: "Mobile Layout",
      description:
        "A compact layout optimized for small screens, with stacked content and easily tappable elements.",
      id: "mobile-layout",
      title: "Mobile Layout",
      usages:
        "Ideal for screens less than 768px wide, ensuring usability on smartphones.",
      purpose:
        "Provides a simplified, linear design where content flows vertically for readability and accessibility.",
      codeBlock: `
<div class="container">
  <header class="header">Logo & Navigation</header>
  <main class="main-content">
    <section class="hero">Hero Image or Banner</section>
    <section class="content">Content goes here</section>
  </main>
  <footer class="footer">Footer content</footer>
</div>

<style>
  /* Mobile Styles */
  @media (max-width: 767px) {
    .container {
      display: flex;
      flex-direction: column;
    }
    .header, .footer {
      text-align: center;
      padding: 10px;
    }
    .main-content {
      padding: 10px;
    }
  }
</style>
      `,
      open: false,
    },
    {
      component: "Tablet Layout",
      description:
        "A two-column layout with more horizontal space for navigation and content.",
      id: "tablet-layout",
      title: "Tablet Layout",
      usages:
        "Best suited for screens between 768px and 1200px, such as tablets or small laptops.",
      purpose:
        "Leverages additional screen space for better content distribution while maintaining simplicity.",
      codeBlock: `
<div class="container">
  <header class="header">Logo & Navigation</header>
  <div class="main-content">
    <aside class="sidebar">Sidebar Content</aside>
    <section class="content">Main Content</section>
  </div>
  <footer class="footer">Footer content</footer>
</div>

<style>
  /* Tablet Styles */
  @media (min-width: 768px) and (max-width: 1199px) {
    .container {
      display: grid;
      grid-template-rows: auto 1fr auto;
      grid-template-columns: 1fr 2fr;
    }
    .header {
      grid-column: span 2;
      text-align: center;
    }
    .sidebar {
      grid-row: 2;
      padding: 10px;
    }
    .content {
      grid-row: 2;
      padding: 10px;
    }
    .footer {
      grid-column: span 2;
      text-align: center;
    }
  }
</style>
      `,
      open: false,
    },
    {
      component: "Desktop Layout",
      description:
        "A spacious, multi-column layout with prominent navigation and grid-based content organization.",
      id: "desktop-layout",
      title: "Desktop Layout",
      usages:
        "Perfect for screens 1200px wide or larger, such as desktops and large monitors.",
      purpose:
        "Optimizes screen space by displaying more content simultaneously, ideal for dashboards or content-heavy sites.",
      codeBlock: `
<div class="container">
  <header class="header">Logo & Navigation</header>
  <div class="main-content">
    <nav class="sidebar">Navigation Menu</nav>
    <section class="content">Main Content Area</section>
    <aside class="extra-content">Additional Content or Ads</aside>
  </div>
  <footer class="footer">Footer content</footer>
</div>

<style>
  /* Desktop Styles */
  @media (min-width: 1200px) {
    .container {
      display: grid;
      grid-template-rows: auto 1fr auto;
      grid-template-columns: 1fr 3fr 1fr;
    }
    .header {
      grid-column: span 3;
      text-align: left;
    }
    .sidebar {
      grid-row: 2;
      grid-column: 1;
      padding: 20px;
    }
    .content {
      grid-row: 2;
      grid-column: 2;
      padding: 20px;
    }
    .extra-content {
      grid-row: 2;
      grid-column: 3;
      padding: 20px;
    }
    .footer {
      grid-column: span 3;
      text-align: center;
    }
  }
</style>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Mobile Layout": "#mobile-layout",
      "Tablet Layout": "#tablet-layout",
      "Desktop Layout": "#desktop-layout",
    },
    References: "#references",
  },
  references: {
    "Material Design": "https://material.io/design",
    "CSS Grid": "https://css-tricks.com/snippets/css/complete-guide-grid/",
    "Responsive Design":
      "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
  },
};

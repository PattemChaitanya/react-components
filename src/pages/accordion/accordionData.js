import FullWidthAccordion from "./full-width-accordion";
import OneOpenAccordion from "./one-open-accordion";
import SimpleAccordion from "./simple-accordion";

export const jsonToPageDisplay = {
  pageTitle: "Accordion",
  description:
    "Accordion component lets users show and hide sections of related content on a page.",
  jsonToDisplay: [
    {
      id: "basic",
      title: "Basics",
      subTitle: "Simple accordion",
      component: <SimpleAccordion />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';

const accordionData = [
  {
    title: 'Section 1',
    content: 'Content for section 1.'
  },
  {
    title: 'Section 2',
    content: 'Content for section 2.'
  },
  {
    title: 'Section 3',
    content: 'Content for section 3.'
  }
];

const SimpleAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {accordionData.map((item, index) => (
        <div key={index} style={styles.section}>
          <div
            style={styles.title}
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span style={styles.icon}>
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div style={styles.content}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  section: {
    borderBottom: '1px solid #ddd',
  },
  title: {
    padding: '15px',
    backgroundColor: '#f4f4f4',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none',
  },
  content: {
    padding: '15px',
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: '10px',
  },
};

export default SimpleAccordion;
`,
    },
    {
      id: "one_open_accordion",
      title: "One Open accordion",
      subTitle: "One Open accordion",
      component: <OneOpenAccordion />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';

const accordionData = [
  {
    title: 'Section 1',
    content: 'Content for section 1.'
  },
  {
    title: 'Section 2',
    content: 'Content for section 2.'
  },
  {
    title: 'Section 3',
    content: 'Content for section 3.'
  }
];

const OneOpenAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {accordionData.map((item, index) => (
        <div key={index} style={styles.section}>
          <div
            style={styles.title}
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span style={styles.icon}>
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div style={styles.content}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  section: {
    borderBottom: '1px solid #ddd',
  },
  title: {
    padding: '15px',
    backgroundColor: '#f4f4f4',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none',
  },
  content: {
    padding: '15px',
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: '10px',
  },
};

export default OneOpenAccordion;
`,
    },
    {
      id: "full_width_accordion",
      title: "Full width accordion",
      subTitle: "Full width accordion",
      component: <FullWidthAccordion />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';

const accordionData = [
  {
    title: 'Section 1',
    content: 'Content for section 1.'
  },
  {
    title: 'Section 2',
    content: 'Content for section 2.'
  },
  {
    title: 'Section 3',
    content: 'Content for section 3.'
  }
];

const FullWidthAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {accordionData.map((item, index) => (
        <div key={index}>
          <div
            style={styles.title}
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span style={styles.icon}>
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div style={styles.content}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: '70%',
    margin: '0 auto',
    borderBottom: '1px solid #ddd',
    borderRadius: '5px',
  },
  title: {
    padding: '15px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none',
    borderBottom: '1px solid #ddd',
  },
  content: {
    padding: '15px',
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: '10px',
  },
};

export default FullWidthAccordion;
`,
    },
  ],
};

export const accrodionData = {
  seoTitle: "Accordion Component - Material Design",
  seoDescription:
    "Discover the Accordion component in Material Design, including examples, interactive demos, accessibility guidelines, and its purpose in UI design.",
  seoKeywords: [
    "Accordion",
    "Material Design",
    "Collapsible Panels",
    "UI Components",
    "Expandable Sections",
  ],
  pageTitle: "Accordion",
  pageDescription: [
    "The Accordion component is a collapsible UI element used to organize content into expandable panels.",
    "It is ideal for creating space-saving layouts and enhancing user interaction in web applications.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Accordion",
    "Multi-Expand Accordion",
    "Accordion with Icons",
    "Nested Accordion",
  ],
  interactiveDemo: "https://material-web.dev/components/accordion/demo",
  accessibity:
    "The Accordion component should comply with accessibility standards by providing keyboard navigation (e.g., arrow keys, Enter, and Space). ARIA attributes like 'aria-expanded' and 'aria-controls' should be used for screen readers. Content inside the accordion should remain accessible even when collapsed.",
  examples: [
    {
      component: "Basic Accordion",
      description:
        "A minimal accordion example with three independent sections. Each section can be expanded or collapsed individually.",
      id: "Basic",
      title: "Basic Accordion Example",
      usages:
        "Used for displaying FAQ sections or structured lists of content.",
      purpose:
        "Simplifies navigation by organizing content into collapsible sections.",
      codeBlock:
        "<accordion><panel>Content 1</panel><panel>Content 2</panel></accordion>",
      open: false,
    },
    {
      component: "Multi-Expand Accordion",
      description:
        "This example demonstrates how multiple sections can be expanded simultaneously.",
      id: "multi",
      title: "Multi-Expand Accordion Example",
      usages:
        "Useful for displaying related content groups where users may need to see multiple sections at once.",
      purpose:
        "Improves accessibility by offering users flexibility to expand multiple panels.",
      codeBlock:
        "<accordion multi-expand><panel>Content 1</panel><panel>Content 2</panel></accordion>",
      open: false,
    },
    {
      component: "Accordion with Icons",
      description:
        "An accordion example where each section includes icons for visual indicators.",
      id: "icons",
      title: "Accordion with Icons Example",
      usages:
        "Enhances visual clarity, helping users quickly identify panel states.",
      purpose:
        "Makes the interface more intuitive by adding icon-based visual cues.",
      codeBlock:
        "<accordion><panel><icon>+</icon>Content 1</panel></accordion>",
      open: false,
    },
    {
      component: "Nested Accordion",
      description:
        "This example demonstrates a nested accordion structure for complex hierarchies.",
      id: "nested",
      title: "Nested Accordion Example",
      usages:
        "Ideal for organizing multi-level content, such as navigation menus or documents.",
      purpose:
        "Provides a structured way to navigate deeply nested information.",
      codeBlock:
        "<accordion><panel><accordion>Nested Content</accordion></panel></accordion>",
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Accordion": "#basic",
      "Multi-Expand Accordion": "#multi",
      "Accordion with Icons": "icons",
      "Nested Accordion": "#nested",
    },
    References: "#references",
  },
  references: {
    "ARIA Guidelines": "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
    "Material Design Documentation":
      "https://m3.material.io/components/accordions/overview",
    "Best Practices for Accordions":
      "https://uxdesign.cc/best-practices-for-designing-accordions-229de6d1453d",
  },
};

export const tabsData = {
  seoTitle: "Design Tabs Component Guide",
  seoDescription:
    "Explore how to implement and customize Design Tabs with accessibility, interactivity, and real-world examples.",
  seoKeywords: [
    "Design Tabs",
    "Tabs UI Component",
    "Tabs Guide",
    "Responsive Tabs",
  ],
  pageTitle: "Tabs",
  pageDescription: [
    "Tabs organize and allow navigation between groups of content. They're a great way to present information efficiently while keeping the interface clean and accessible.",
    "Tabs can be text-only, icon-only, or a combination of both, depending on the design and the content they represent.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Text Tabs", "Icon Tabs", "Text and Icon Tabs", "Scrollable Tabs"],
  interactiveDemo: "https://material-web.dev/components/tabs",
  accessibity:
    "Ensure tabs are accessible by using proper ARIA roles, like `role='tablist'` for the container and `role='tab'` for each tab. Use `aria-selected` and keyboard navigation (arrow keys) to allow seamless accessibility. Each tab should also have an associated panel with a unique `id` for linking.",
  examples: [
    {
      id: "text-tabs",
      title: "Text Tabs",
      description: "A basic implementation of tabs with text labels.",
      usages:
        "Use when the tab labels alone are sufficient to describe the content.",
      purpose:
        "Keeps the design clean and straightforward, ideal for most content-heavy applications.",
      component: "Text Tabs",
      codeBlock: `
<div class="tabs" role="tablist">
  <button role="tab" aria-selected="true" id="tab-1" aria-controls="panel-1">Tab 1</button>
  <button role="tab" aria-selected="false" id="tab-2" aria-controls="panel-2">Tab 2</button>
  <button role="tab" aria-selected="false" id="tab-3" aria-controls="panel-3">Tab 3</button>
</div>
<div id="panel-1" role="tabpanel" aria-labelledby="tab-1">Content for Tab 1</div>
<div id="panel-2" role="tabpanel" aria-labelledby="tab-2" hidden>Content for Tab 2</div>
<div id="panel-3" role="tabpanel" aria-labelledby="tab-3" hidden>Content for Tab 3</div>
`,
      open: false,
    },
    {
      id: "icon-tabs",
      title: "Icon Tabs",
      description: "Tabs represented using only icons.",
      usages:
        "Ideal for dashboards or when the icons themselves are self-explanatory (e.g., home, settings, search).",
      purpose: "Saves space while still providing intuitive navigation.",
      component: "Icon Tabs",
      codeBlock: `
<div class="tabs" role="tablist">
  <button role="tab" aria-selected="true" id="tab-home" aria-controls="panel-home">
    <span class="material-icons">home</span>
  </button>
  <button role="tab" aria-selected="false" id="tab-search" aria-controls="panel-search">
    <span class="material-icons">search</span>
  </button>
  <button role="tab" aria-selected="false" id="tab-settings" aria-controls="panel-settings">
    <span class="material-icons">settings</span>
  </button>
</div>
<div id="panel-home" role="tabpanel" aria-labelledby="tab-home">Home Content</div>
<div id="panel-search" role="tabpanel" aria-labelledby="tab-search" hidden>Search Content</div>
<div id="panel-settings" role="tabpanel" aria-labelledby="tab-settings" hidden>Settings Content</div>
`,
      open: false,
    },
    {
      id: "scrollable-tabs",
      title: "Scrollable Tabs Example",
      description: "Tabs that allow horizontal scrolling.",
      usages:
        "Great for content-heavy applications with many categories or sections.",
      purpose:
        "Provides flexibility for layouts with limited space without cluttering the UI.",
      component: "Scrollable Tabs",
      codeBlock: `
<div class="tabs scrollable" role="tablist">
  <button role="tab" aria-selected="true" id="tab-1" aria-controls="panel-1">Tab 1</button>
  <button role="tab" aria-selected="false" id="tab-2" aria-controls="panel-2">Tab 2</button>
  <button role="tab" aria-selected="false" id="tab-3" aria-controls="panel-3">Tab 3</button>
  <button role="tab" aria-selected="false" id="tab-4" aria-controls="panel-4">Tab 4</button>
  <button role="tab" aria-selected="false" id="tab-5" aria-controls="panel-5">Tab 5</button>
</div>
<div id="panel-1" role="tabpanel" aria-labelledby="tab-1">Content for Tab 1</div>
<div id="panel-2" role="tabpanel" aria-labelledby="tab-2" hidden>Content for Tab 2</div>
<div id="panel-3" role="tabpanel" aria-labelledby="tab-3" hidden>Content for Tab 3</div>
<div id="panel-4" role="tabpanel" aria-labelledby="tab-4" hidden>Content for Tab 4</div>
<div id="panel-5" role="tabpanel" aria-labelledby="tab-5" hidden>Content for Tab 5</div>
`,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Text Tabs Example": "#text-tabs",
      "Icon Tabs Example": "#icon-tabs",
      "Scrollable Tabs Example": "#scrollable-tabs",
    },
    References: "#references",
  },
  references: {
    "Material Design Guidelines for Tabs":
      "https://m3.material.io/components/tabs",
    "ARIA Roles for Tabs": "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",
    "Material Icons for Tabs": "https://fonts.google.com/icons",
  },
};

export const avatarData = {
  seoTitle: "Design Avatar Component Guide",
  seoDescription:
    "Learn how to implement Design Avatars with examples, accessibility tips, and customization options for user profiles and more.",
  seoKeywords: [
    "Design Avatar",
    "Avatar UI Component",
    "Circular Avatar",
    "Profile Picture UI",
  ],
  pageTitle: "Avatar",
  pageDescription: [
    "Avatars are circular representations of images, text, or icons used to represent a user or entity.",
    "They are commonly used in user profiles, lists, or as part of interactive UI elements like menus.",
  ],
  pageImage: "https://material-web.dev/components/images/avatar/hero.webp",
  types: ["Image Avatar", "Text Avatar", "Icon Avatar", "Grouped Avatar"],
  interactiveDemo: "https://material-web.dev/components/avatar",
  accessibity:
    "Ensure avatars are accessible by using `alt` attributes for images and `aria-label` for icon-based avatars. For decorative avatars, add `role='img'` with a descriptive `aria-label` to provide context to screen readers.",
  examples: [
    {
      id: "image-avatar",
      title: "Image Avatar",
      description: "A simple avatar displaying a user’s profile picture.",
      usages:
        "Use when a user’s profile picture or identifiable image is available.",
      purpose:
        "Provides a personal touch, making it easy for users to recognize profiles.",
      component: "Image Avatar",
      codeBlock: `
<img class="avatar" src="https://example.com/user.jpg" alt="User Profile Picture">
`,
      open: false,
    },
    {
      id: "text-avatar",
      title: "Text Avatar",
      description:
        "An avatar with the user’s initials as a fallback for when no profile picture is available.",
      usages:
        "Use when an image isn't available but the user's name or initials can represent them.",
      purpose:
        "Ensures avatars remain functional and visually consistent, even without images.",
      component: "Text Avatar",
      codeBlock: `
<div class="avatar text-avatar" role="img" aria-label="John Doe">JD</div>
`,
      open: false,
    },
    {
      id: "icon-avatar",
      title: "Icon Avatar",
      description: "An avatar with an icon as a placeholder.",
      usages:
        "Use for placeholders or when representing non-user entities, like system notifications.",
      purpose:
        "Provides a consistent, recognizable visual element without requiring user-specific content.",
      component: "Icon Avatar",
      codeBlock: `
<div class="avatar icon-avatar" role="img" aria-label="Default User">
  <span class="material-icons">person</span>
</div>
`,
      open: false,
    },
    {
      id: "grouped-avatar",
      title: "Grouped Avatar",
      description: "A set of avatars displayed together, often overlapping.",
      usages:
        "Use to represent multiple users, such as members of a team or participants in a group chat.",
      purpose:
        "Indicates collaboration or a collective entity in a compact space.",
      component: "Grouped Avatar",
      codeBlock: `
<div class="grouped-avatar">
  <img class="avatar" src="https://example.com/user1.jpg" alt="User 1">
  <img class="avatar" src="https://example.com/user2.jpg" alt="User 2">
  <div class="avatar text-avatar" role="img" aria-label="John Doe">+3</div>
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
      "Image Avatar Example": "#image-avatar",
      "Text Avatar Example": "#text-avatar",
      "Icon Avatar Example": "#icon-avatar",
      "Grouped Avatar Example": "#grouped-avatar",
    },
    References: "#references",
  },
  references: {
    "Material Design Guidelines for Avatars":
      "https://m3.material.io/components/avatar",
    "ARIA Roles for Decorative Images":
      "https://www.w3.org/WAI/tutorials/images/decorative/",
    "Material Icons": "https://fonts.google.com/icons",
  },
};

export const imagesData = {
  seoTitle: "Design Images Component Guide",
  seoDescription:
    "Learn how to use and style images, with varieties like responsive images, cards, rounded images, and more.",
  seoKeywords: [
    "Design Images",
    "Responsive Images",
    "Image Styling",
    "Material Design UI",
  ],
  pageTitle: "Images",
  pageDescription: [
    "Images are essential UI elements that provide visual context and support the user experience.",
    "Design emphasizes responsive, accessible, and aesthetically pleasing images in layouts.",
  ],
  pageImage: "https://material-web.dev/components/images/image/hero.webp",
  types: [
    "Responsive Images",
    "Rounded Images",
    "Circular Images",
    "Image Cards",
    "Background Images",
    "Thumbnail Images",
    "Gallery Images",
  ],
  interactiveDemo: "https://material-web.dev/components/images",
  accessibity:
    "Ensure images are accessible by including meaningful `alt` text for screen readers. For decorative images, set `alt=''` and `role='presentation'`. Provide proper contrast between images and overlaid text for better readability.",
  examples: [
    {
      component: "Responsive Images",
      description:
        "Images that adjust their size dynamically based on the screen width.",
      id: "responsive-images",
      title: "Responsive Image Example",
      usages:
        "Use in layouts that need to work across multiple devices and screen sizes.",
      purpose: "Maintains visual consistency and avoids layout breaking.",
      codeBlock: `
<img class="responsive-image" src="https://example.com/image.jpg" alt="Example Image">
`,
      open: false,
    },
    {
      component: "Rounded Images",
      description:
        "Images with rounded corners for a smoother, modern appearance.",
      id: "rounded-images",
      title: "Rounded Image Example",
      usages:
        "Use in designs where a softer or less rigid aesthetic is preferred.",
      purpose: "Creates a polished and professional look.",
      codeBlock: `
<img class="rounded-image" src="https://example.com/image.jpg" alt="Example Image">
`,
      open: false,
    },
    {
      component: "Circular Images",
      description: "Circular images often used for profile pictures.",
      id: "circular-images",
      title: "Circular Image Example",
      usages:
        "Best for representing users or entities in a personal and identifiable way.",
      purpose: "Enhances the UI by making user profiles visually distinctive.",
      codeBlock: `
<img class="circular-image" src="https://example.com/profile.jpg" alt="User Profile Picture">
`,
      open: false,
    },
    {
      component: "Image Cards",
      description: "Images used in card components with text overlays.",
      id: "image-cards",
      title: "Image Card Example",
      usages: "Use for displaying content like articles, products, or events.",
      purpose:
        "Makes content visually appealing while maintaining a compact layout.",
      codeBlock: `
<div class="image-card">
  <img src="https://example.com/card-image.jpg" alt="Card Image">
  <div class="card-overlay">
    <h3>Card Title</h3>
    <p>Card description goes here.</p>
  </div>
</div>
`,
      open: false,
    },
    {
      component: "Background Images",
      description: "Images used as container backgrounds with layered content.",
      id: "background-images",
      title: "Background Image Example",
      usages: "Ideal for hero sections or content headers.",
      purpose:
        "Provides a visually striking design element while highlighting content.",
      codeBlock: `
<div class="background-image" style="background-image: url('https://example.com/background.jpg');">
  <h2>Welcome to Our Platform</h2>
</div>
`,
      open: false,
    },
    {
      component: "Gallery Images",
      description: "A grid layout for multiple images.",
      id: "gallery-images",
      title: "Gallery Image Example",
      usages: "Use for portfolios, e-commerce, or image-heavy applications.",
      purpose: "Showcases multiple images in a structured and engaging way.",
      codeBlock: `
<div class="image-gallery">
  <img src="https://example.com/image1.jpg" alt="Gallery Image 1">
  <img src="https://example.com/image2.jpg" alt="Gallery Image 2">
  <img src="https://example.com/image3.jpg" alt="Gallery Image 3">
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
      "Responsive Image Example": "#responsive-images",
      "Rounded Image Example": "#rounded-images",
      "Circular Image Example": "#circular-images",
      "Image Card Example": "#image-cards",
      "Background Image Example": "#background-images",
      "Gallery Image Example": "#gallery-images",
    },
    References: "#references",
  },
  references: {
    "Material Design Guidelines for Images":
      "https://m3.material.io/design/image/",
    "Responsive Images in HTML":
      "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
    "ARIA Roles for Images": "https://www.w3.org/WAI/tutorials/images/",
    "CSS Background Image Techniques":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/background-image",
  },
};

export const caursoulData = {
  seoTitle: "Material Design Carousel Component Guide",
  seoDescription:
    "Learn how to implement Designing carousels with responsive slides, animations, and navigation options for dynamic content displays.",
  seoKeywords: [
    "Design Carousel",
    "Carousel UI Component",
    "Responsive Slider",
    "Image Slider",
  ],
  pageTitle: "Carousel",
  pageDescription: [
    "Carousels display a series of content, such as images or cards, in a compact, scrollable layout.",
    "They are great for showcasing featured content, galleries, or step-by-step processes.",
  ],
  pageImage: "https://material-web.dev/components/images/carousel/hero.webp",
  types: [
    "Image Carousel",
    "Card Carousel",
    "Auto-Scrolling Carousel",
    "Multi-Item Carousel",
    "Fullscreen Carousel",
  ],
  interactiveDemo: "https://material-web.dev/components/carousel",
  accessibity:
    "Carousels should support keyboard navigation, focus management, and screen reader announcements. Use ARIA roles like `aria-live` to update screen readers about slide changes.",
  examples: [
    {
      component: "Image Carousel",
      description:
        "A carousel showcasing images with indicators and navigation arrows.",
      id: "image-carousel",
      title: "Image Carousel Example",
      usages: "Use for photo galleries, advertisements, or featured content.",
      purpose:
        "Engages users visually with scrollable, organized image content.",
      codeBlock: `
<div class="carousel">
  <div class="carousel-slide">
    <img src="https://example.com/image1.jpg" alt="Slide 1">
  </div>
  <div class="carousel-slide">
    <img src="https://example.com/image2.jpg" alt="Slide 2">
  </div>
  <div class="carousel-slide">
    <img src="https://example.com/image3.jpg" alt="Slide 3">
  </div>
  <button class="carousel-nav prev">‹</button>
  <button class="carousel-nav next">›</button>
  <div class="carousel-indicators">
    <button aria-label="Go to slide 1"></button>
    <button aria-label="Go to slide 2"></button>
    <button aria-label="Go to slide 3"></button>
  </div>
</div>
`,
      open: false,
    },
    {
      component: "Card Carousel",
      description:
        "A carousel displaying cards with text, buttons, and images.",
      id: "card-carousel",
      title: "Card Carousel Example",
      usages: "Use for product showcases, blog highlights, or testimonials.",
      purpose:
        "Provides a structured way to display rich content interactively.",
      codeBlock: `
<div class="carousel">
  <div class="carousel-slide">
    <div class="card">
      <h3>Card Title 1</h3>
      <p>Card description here.</p>
    </div>
  </div>
  <div class="carousel-slide">
    <div class="card">
      <h3>Card Title 2</h3>
      <p>Card description here.</p>
    </div>
  </div>
  <div class="carousel-slide">
    <div class="card">
      <h3>Card Title 3</h3>
      <p>Card description here.</p>
    </div>
  </div>
  <button class="carousel-nav prev">‹</button>
  <button class="carousel-nav next">›</button>
</div>
`,
      open: false,
    },
    {
      component: "Auto-Scrolling Carousel",
      description: "A carousel that automatically scrolls through slides.",
      id: "auto-scrolling-carousel",
      title: "Auto-Scrolling Carousel Example",
      usages:
        "Use for hero banners, advertisements, or content that needs periodic attention.",
      purpose:
        "Engages users passively by rotating through slides automatically.",
      codeBlock: `
<div class="carousel auto-scroll">
  <div class="carousel-slide">
    <img src="https://example.com/banner1.jpg" alt="Banner 1">
  </div>
  <div class="carousel-slide">
    <img src="https://example.com/banner2.jpg" alt="Banner 2">
  </div>
  <div class="carousel-slide">
    <img src="https://example.com/banner3.jpg" alt="Banner 3">
  </div>
</div>
<script>
  const carousel = document.querySelector('.carousel.auto-scroll');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % carousel.children.length;
    carousel.scrollTo({ left: index * carousel.offsetWidth, behavior: 'smooth' });
  }, 5000);
</script>
`,
      open: false,
    },
    {
      component: "Multi-Item Carousel",
      description: "A carousel that displays multiple items at once.",
      id: "multi-item-carousel",
      title: "Multi-Item Carousel Example",
      usages:
        "Use for image galleries, product carousels, or feature highlights.",
      purpose:
        "Maximizes screen space while showing multiple pieces of content simultaneously.",
      codeBlock: `
<div class="carousel multi-item">
  <div class="carousel-slide">Item 1</div>
  <div class="carousel-slide">Item 2</div>
  <div class="carousel-slide">Item 3</div>
  <div class="carousel-slide">Item 4</div>
  <div class="carousel-slide">Item 5</div>
</div>
`,
      open: false,
    },
    {
      component: "Fullscreen Carousel",
      description: "A fullscreen carousel with immersive visuals.",
      id: "fullscreen-carousel",
      title: "Fullscreen Carousel Example",
      usages:
        "Use for portfolios, immersive product showcases, or image-based storytelling.",
      purpose:
        "Captures users' attention by filling the entire viewport with visual content.",
      codeBlock: `
<div class="carousel fullscreen">
  <div class="carousel-slide">
    <img src="https://example.com/fullscreen1.jpg" alt="Fullscreen Slide 1">
  </div>
  <div class="carousel-slide">
    <img src="https://example.com/fullscreen2.jpg" alt="Fullscreen Slide 2">
  </div>
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
      "Image Carousel Example": "#image-carousel",
      "Card Carousel Example": "#card-carousel",
      "Auto-Scrolling Carousel Example": "#auto-scrolling-carousel",
      "Multi-Item Carousel Example": "#multi-item-carousel",
      "Fullscreen Carousel Example": "#fullscreen-carousel",
    },
    References: "#references",
  },
  references: {
    "Material Design Guidelines for Carousels":
      "https://m3.material.io/design/carousel/",
    "ARIA Roles for Carousels": "https://www.w3.org/WAI/tutorials/carousels/",
    "CSS for Responsive Sliders":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap",
  },
};

export const todoData = {
  seoTitle: "Design To-Do List Component Guide",
  seoDescription:
    "Create efficient to-do lists with Design principles, featuring interactive checkboxes, categories, and filters for task management.",
  seoKeywords: [
    "Design To-Do List",
    "Task Manager UI",
    "Interactive To-Do",
    "Frontend To-Do Component",
  ],
  pageTitle: "To-Do List",
  pageDescription: [
    "To-Do Lists help users track tasks efficiently, offering simple or advanced features like categories and filters.",
    "Design emphasizes intuitive and interactive UI for productivity tools like to-do lists.",
  ],
  pageImage: "https://material-web.dev/components/images/todo/hero.webp",
  types: ["Basic To-Do List", "Advanced To-Do List"],
  interactiveDemo: "https://material-web.dev/components/todo",
  accessibity:
    "Ensure to-do lists are accessible by supporting keyboard navigation, ARIA roles like `aria-checked` for tasks, and labels for checkboxes.",
  examples: [
    {
      component: "Basic To-Do List",
      description:
        "A straightforward to-do list with add, mark complete, and delete functionality.",
      id: "basic-todo-list",
      title: "Basic To-Do List Example",
      usages: "Use for simple task tracking without advanced categorization.",
      purpose: "Enables users to manage tasks quickly with minimal setup.",
      codeBlock: `
<div class="todo">
  <h3>My Tasks</h3>
  <ul class="todo-list">
    <li>
      <label>
        <input type="checkbox"> Buy groceries
      </label>
      <button class="delete-btn" aria-label="Delete Task">✖</button>
    </li>
    <li>
      <label>
        <input type="checkbox"> Finish project report
      </label>
      <button class="delete-btn" aria-label="Delete Task">✖</button>
    </li>
  </ul>
  <div class="todo-input">
    <input type="text" placeholder="Add a new task" aria-label="Add new task">
    <button>Add</button>
  </div>
</div>
`,
      open: false,
    },
    {
      component: "Advanced To-Do List",
      description:
        "A to-do list with categories, due dates, and filters for organizing tasks effectively.",
      id: "advanced-todo-list",
      title: "Advanced To-Do List Example",
      usages:
        "Use for task management apps or when detailed task tracking is needed.",
      purpose:
        "Helps users organize and prioritize tasks with advanced features.",
      codeBlock: `
<div class="todo-advanced">
  <h3>My Tasks</h3>
  <div class="filters">
    <button data-filter="all" class="active">All</button>
    <button data-filter="work">Work</button>
    <button data-filter="personal">Personal</button>
  </div>
  <ul class="todo-list">
    <li data-category="work">
      <label>
        <input type="checkbox"> Complete presentation
      </label>
      <span class="due-date">Due: Jan 15</span>
      <button class="delete-btn" aria-label="Delete Task">✖</button>
    </li>
    <li data-category="personal">
      <label>
        <input type="checkbox"> Call the plumber
      </label>
      <span class="due-date">Due: Jan 14</span>
      <button class="delete-btn" aria-label="Delete Task">✖</button>
    </li>
  </ul>
  <div class="todo-input">
    <input type="text" placeholder="Add a new task" aria-label="Add new task">
    <select>
      <option value="work">Work</option>
      <option value="personal">Personal</option>
    </select>
    <button>Add</button>
  </div>
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
      "Basic To-Do List Example": "#basic-todo-list",
      "Advanced To-Do List Example": "#advanced-todo-list",
    },
    References: "#references",
  },
  references: {
    "Material Design To-Do Guidelines": "https://m3.material.io/design/todo/",
    "ARIA Roles for To-Do List Accessibility":
      "https://www.w3.org/WAI/tutorials/forms/",
    "Interactive Lists with Material Design":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Interactive_lists",
  },
};

export const tableData = {
  seoTitle: "HTML Table Component - Usage and Accessibility",
  seoDescription:
    "Learn how to create, style, and use HTML table components effectively with accessibility and usability in mind.",
  seoKeywords: [
    "HTML table",
    "table accessibility",
    "responsive table",
    "HTML table styling",
  ],
  pageTitle: "HTML Table Component",
  pageDescription: [
    "HTML tables are used to display tabular data in rows and columns. They can be styled for aesthetics and enhanced for accessibility.",
    "This guide covers basic usage, best practices, and examples of how to implement tables in modern web development.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Basic Table", "Responsive Table", "Accessible Table"],
  interactiveDemo: "https://example.com/table-demo", // Add a link to your interactive table demo if available.
  accessibity:
    "Ensure that tables use semantic tags like <thead>, <tbody>, and <th> for structure. Add ARIA roles and attributes for better screen reader support, and use captions for context.",
  examples: [
    {
      component: "Basic HTML Table",
      description: "A simple HTML table with rows and columns displaying data.",
      id: "basic-table",
      title: "Basic Table Example",
      usages: "Use for displaying basic data sets with no interactivity.",
      purpose:
        "To demonstrate the structure of a table with <table>, <tr>, <th>, and <td> tags.",
      codeBlock: `
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Col 1</td>
      <td>Row 1, Col 2</td>
      <td>Row 1, Col 3</td>
    </tr>
    <tr>
      <td>Row 2, Col 1</td>
      <td>Row 2, Col 2</td>
      <td>Row 2, Col 3</td>
    </tr>
  </tbody>
</table>
      `,
      open: false,
    },
    {
      component: "Responsive Table",
      description: "An HTML table styled to be responsive on smaller screens.",
      id: "responsive-table",
      title: "Responsive Table Example",
      usages:
        "Use for tables that need to adapt to mobile devices or smaller screens.",
      purpose: "To demonstrate CSS techniques for making tables responsive.",
      codeBlock: `
<div style="overflow-x: auto;">
  <table>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row 1, Col 1</td>
        <td>Row 1, Col 2</td>
        <td>Row 1, Col 3</td>
      </tr>
      <tr>
        <td>Row 2, Col 1</td>
        <td>Row 2, Col 2</td>
        <td>Row 2, Col 3</td>
      </tr>
    </tbody>
  </table>
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
      "Basic Table": "#basic-table",
      "Responsive Table": "#responsive-table",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",
    W3C: "https://www.w3.org/WAI/tutorials/tables/",
    "CSS Tricks": "https://css-tricks.com/complete-guide-table-element/",
  },
};

export const dragandDropData = {
  seoTitle: "Drag and Drop Component - Interactive and Accessible",
  seoDescription:
    "Learn how to implement drag-and-drop functionality with interactive examples, accessibility considerations, and best practices.",
  seoKeywords: [
    "drag and drop",
    "HTML5 drag and drop",
    "drag and drop accessibility",
    "interactive UI",
  ],
  pageTitle: "Drag and Drop Component",
  pageDescription: [
    "Drag and Drop allows users to interact with elements by dragging them and dropping them into designated areas.",
    "This guide includes examples of drag-and-drop implementations, accessibility best practices, and interactive demos.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Basic Drag and Drop", "Sortable List", "File Upload"],
  interactiveDemo: "https://example.com/drag-drop-demo", // Replace with an actual interactive demo URL.
  accessibity:
    "Ensure drag-and-drop interactions are keyboard-accessible by providing alternatives like buttons or ARIA roles. Use proper focus management for dropped elements.",
  examples: [
    {
      component: "Basic Drag and Drop",
      description:
        "A simple drag-and-drop implementation using HTML5 drag events.",
      id: "basic-drag-drop",
      title: "Basic Drag and Drop Example",
      usages:
        "Use for moving elements from one area to another in a straightforward manner.",
      purpose:
        "To demonstrate basic drag-and-drop functionality with minimal setup.",
      codeBlock: `
<div id="drag-container" style="display: flex; gap: 20px;">
  <div id="drag-item" draggable="true" style="padding: 10px; background: #007bff; color: #fff; cursor: grab;">Drag Me</div>
  <div id="drop-zone" style="padding: 20px; background: #f8f9fa; border: 2px dashed #ccc; text-align: center;">
    Drop Here
  </div>
</div>

<script>
  const dragItem = document.getElementById("drag-item");
  const dropZone = document.getElementById("drop-zone");

  dragItem.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", "This is the dragged content");
    dropZone.style.borderColor = "#007bff";
  });

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = "#e0f7fa";
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    dropZone.innerText = data || "Dropped!";
    dropZone.style.backgroundColor = "#f8f9fa";
    dropZone.style.borderColor = "#ccc";
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.backgroundColor = "#f8f9fa";
  });
</script>
      `,
      open: false,
    },
    {
      component: "Sortable List",
      description:
        "A draggable and sortable list where items can be rearranged.",
      id: "sortable-list",
      title: "Sortable List Example",
      usages: "Use for lists or grids where users need to reorder items.",
      purpose:
        "To demonstrate how to create a sortable list using drag-and-drop events.",
      codeBlock: `
<ul id="sortable-list" style="list-style: none; padding: 0;">
  <li draggable="true" style="padding: 10px; background: #f1f1f1; margin-bottom: 5px; cursor: grab;">Item 1</li>
  <li draggable="true" style="padding: 10px; background: #f1f1f1; margin-bottom: 5px; cursor: grab;">Item 2</li>
  <li draggable="true" style="padding: 10px; background: #f1f1f1; margin-bottom: 5px; cursor: grab;">Item 3</li>
</ul>

<script>
  const list = document.getElementById("sortable-list");

  let draggedItem = null;

  list.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
    setTimeout(() => event.target.style.display = "none", 0);
  });

  list.addEventListener("dragend", (event) => {
    event.target.style.display = "block";
    draggedItem = null;
  });

  list.addEventListener("dragover", (event) => {
    event.preventDefault();
    const hoveredItem = event.target;
    if (hoveredItem !== draggedItem && hoveredItem.tagName === "LI") {
      const rect = hoveredItem.getBoundingClientRect();
      const next = (event.clientY - rect.top) / rect.height > 0.5;
      list.insertBefore(draggedItem, next ? hoveredItem.nextSibling : hoveredItem);
    }
  });
</script>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Drag and Drop": "#basic-drag-drop",
      "Sortable List": "#sortable-list",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API",
    W3C: "https://www.w3.org/TR/dnd-html5/",
    "CSS Tricks":
      "https://css-tricks.com/snippets/javascript/creating-a-draggable-element/",
  },
};

export const cardData = {
  seoTitle: "Card Component - Design, Usage, and Accessibility",
  seoDescription:
    "Learn how to create custom Material Design card components with advanced styling, responsive layouts, and accessibility best practices.",
  seoKeywords: [
    "material design cards",
    "custom card component",
    "card accessibility",
    "responsive cards",
    "UI cards",
  ],
  pageTitle: "Card Component",
  pageDescription: [
    "Cards in Material Design serve as containers for a range of content, offering a consistent and flexible layout. Building cards from scratch allows you to tailor the visual hierarchy and responsiveness to suit your needs.",
    "When developing cards, consider a layout that adapts well to various screen sizes. Implement consistent spacing, shadows, and hover states to create interactive and polished designs.",
    "Ensure that every card is fully responsive—cards should reflow naturally at different breakpoints. Utilize Flexbox or CSS Grid to control layout and alignment while keeping performance in mind.",
    "Pay attention to the color contrast of interactive elements like buttons, ensuring they stand out and provide a clear visual cue. Use subtle hover effects to improve the user's focus while maintaining a Material Design feel.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Basic Card", "Card with Image", "Interactive Card"],
  interactiveDemo: "https://example.com/card-demo", // Replace with an actual interactive demo URL if applicable.
  accessibity:
    "Beyond basic semantic HTML, consider implementing ARIA landmarks for better navigation. For dynamic content within cards, like expandable sections or buttons, ensure focus management is handled correctly to maintain context for keyboard and screen reader users. Also, for cards with interactive elements, ensure that actions like buttons or links have an accessible description (e.g., using aria-label).",
  examples: [
    {
      component: "Basic Card",
      description:
        "A simple card with a title and text description, optimized for responsive layouts.",
      id: "basic-card",
      title: "Basic Card Example",
      usages:
        "Use for presenting minimal information like headlines, text, and a call to action in a compact, visually appealing format.",
      purpose:
        "This example demonstrates the use of `box-shadow`, padding, and responsive design principles, which are core to Material Design's philosophy of depth and space.",
      codeBlock: `
<div style="width: 300px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
  <h3 style="margin: 0; font-size: 1.25rem;">Card Title</h3>
  <p style="margin: 10px 0 0;">This is a simple card with a title and a short description.</p>
</div>
      `,
      open: false,
    },
    {
      component: "Card with Image",
      description:
        "A card layout with an image header, used for showcasing visual content along with descriptive text.",
      id: "card-with-image",
      title: "Card with Image Example",
      usages:
        "Use for content that needs to pair text with relevant visuals, providing context or a focal point.",
      purpose:
        "The image is embedded at the top for visual hierarchy. CSS properties like `object-fit` and `border-radius` are used to ensure the image scales well and looks polished.",
      codeBlock: `
<div style="width: 300px; border: 1px solid #ccc; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
  <img src="https://via.placeholder.com/300x150" alt="Card Image" style="width: 100%; height: auto; object-fit: cover;">
  <div style="padding: 16px;">
    <h3 style="margin: 0; font-size: 1.25rem;">Card Title</h3>
    <p style="margin: 10px 0 0;">This card includes an image and a text description.</p>
  </div>
</div>
      `,
      open: false,
    },
    {
      component: "Interactive Card",
      description:
        "An interactive card containing action buttons for user engagement, designed to fit into dynamic web applications.",
      id: "interactive-card",
      title: "Interactive Card Example",
      usages:
        "Use for cards containing actions like buttons or links that perform user-driven events, such as navigating to another page or triggering an action.",
      purpose:
        "Interactive cards need focus states, accessible labels for buttons (via `aria-label`), and appropriate focus management. This card also integrates subtle hover effects to improve interactivity.",
      codeBlock: `
<div style="width: 300px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
  <h3 style="margin: 0; font-size: 1.25rem;">Card Title</h3>
  <p style="margin: 10px 0 16px;">This card includes interactive elements like buttons or links for further actions.</p>
  <button aria-label="Perform Action" style="padding: 10px 16px; background-color: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.3s ease;">
    Action Button
  </button>
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
      "Basic Card": "#basic-card",
      "Card with Image": "#card-with-image",
      "Interactive Card": "#interactive-card",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div",
    "Material Design": "https://material.io/components/cards",
    "CSS Tricks": "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  },
};

export const topNavigation = {
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
  pageTitle: "Top Navigation Component",
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
      component: "Simple Navigation",
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
      component: "Navigation with Dropdown",
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
      component: "Navigation with Search",
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

export const bottomNavigation = {
  seoTitle: "Bottom Navigation Component - Design, Usage, and Accessibility",
  seoDescription:
    "Learn how to create a responsive and accessible bottom navigation bar with Material Design principles, optimized for mobile-first user experiences.",
  seoKeywords: [
    "bottom navigation",
    "mobile navigation",
    "bottom navbar",
    "material design bottom navigation",
    "responsive navbar",
  ],
  pageTitle: "Bottom Navigation Component",
  pageDescription: [
    "Bottom navigation bars are essential for mobile applications, providing easy access to key sections with just a thumb's reach. They are ideal for mobile-first designs, ensuring minimal clutter while maximizing usability.",
    "When creating a bottom navigation bar, prioritize key sections and ensure that actions are clear, accessible, and intuitive. Limit the number of primary links to no more than 5 to avoid overcrowding and to enhance clarity.",
    "Responsive design should always be considered, as bottom navigation should adapt to both small and large screen sizes, providing a consistent user experience across devices.",
    "Ensure keyboard and screen reader accessibility by properly utilizing `aria-label` and `aria-current` for the active state. Additionally, make all navigation links easily navigable via keyboard shortcuts, particularly for mobile-first web applications.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Simple Bottom Navigation",
    "Bottom Navigation with Icons",
    "Bottom Navigation with Label",
  ],
  interactiveDemo: "https://example.com/bottom-nav-demo", // Replace with an actual interactive demo URL if applicable.
  accessibity:
    "Incorporate `aria-current` for indicating the active navigation item. Use `aria-label` on the navigation container and individual items for clarity. Ensure that all buttons are keyboard accessible and that focus is correctly managed between them. Provide visual feedback for active states and transitions.",
  examples: [
    {
      component: "Simple Bottom Navigation",
      description:
        "A basic bottom navigation bar with three key links for quick access to the primary sections of the app.",
      id: "simple-bottom-nav",
      title: "Simple Bottom Navigation Example",
      usages:
        "Use for mobile-first websites or apps where there are only a few sections to navigate through.",
      purpose:
        "This simple example emphasizes clear visual cues and touch-friendly navigation for users with smaller screens.",
      codeBlock: `
<div style="position: fixed; bottom: 0; width: 100%; background-color: #6200ea; display: flex; justify-content: space-around; padding: 10px 0; border-top: 1px solid #ccc;">
  <a href="#home" style="color: white; text-decoration: none; font-size: 1.2rem;">Home</a>
  <a href="#search" style="color: white; text-decoration: none; font-size: 1.2rem;">Search</a>
  <a href="#profile" style="color: white; text-decoration: none; font-size: 1.2rem;">Profile</a>
</div>
      `,
      open: false,
    },
    {
      component: "Bottom Navigation with Icons",
      description:
        "A bottom navigation bar with icons for easy recognition of sections, designed for mobile applications.",
      id: "bottom-nav-with-icons",
      title: "Bottom Navigation with Icons Example",
      usages:
        "Ideal for applications where users need quick, visual access to key sections. Icons help enhance the usability by providing an intuitive visual language.",
      purpose:
        "This example uses Material Icons to make the navigation bar more visually appealing and intuitive for mobile users.",
      codeBlock: `
<div style="position: fixed; bottom: 0; width: 100%; background-color: #6200ea; display: flex; justify-content: space-around; padding: 10px 0; border-top: 1px solid #ccc;">
  <a href="#home" aria-label="Home" style="color: white; text-decoration: none; font-size: 1.5rem;"><i class="material-icons">home</i></a>
  <a href="#search" aria-label="Search" style="color: white; text-decoration: none; font-size: 1.5rem;"><i class="material-icons">search</i></a>
  <a href="#profile" aria-label="Profile" style="color: white; text-decoration: none; font-size: 1.5rem;"><i class="material-icons">account_circle</i></a>
</div>
      `,
      open: false,
    },
    {
      component: "Bottom Navigation with Label",
      description:
        "A bottom navigation bar that combines icons with text labels for better clarity.",
      id: "bottom-nav-with-label",
      title: "Bottom Navigation with Label Example",
      usages:
        "Use for applications where clarity is a priority and users benefit from both visual cues and text.",
      purpose:
        "This version includes both icons and text, offering a more descriptive navigation system for users unfamiliar with the app's features.",
      codeBlock: `
<div style="position: fixed; bottom: 0; width: 100%; background-color: #6200ea; display: flex; justify-content: space-around; padding: 10px 0; border-top: 1px solid #ccc;">
  <a href="#home" aria-label="Home" style="color: white; text-decoration: none; text-align: center;">
    <i class="material-icons">home</i>
    <p style="margin: 0; font-size: 0.8rem;">Home</p>
  </a>
  <a href="#search" aria-label="Search" style="color: white; text-decoration: none; text-align: center;">
    <i class="material-icons">search</i>
    <p style="margin: 0; font-size: 0.8rem;">Search</p>
  </a>
  <a href="#profile" aria-label="Profile" style="color: white; text-decoration: none; text-align: center;">
    <i class="material-icons">account_circle</i>
    <p style="margin: 0; font-size: 0.8rem;">Profile</p>
  </a>
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
      "Simple Bottom Navigation": "#simple-bottom-nav",
      "Bottom Navigation with Icons": "#bottom-nav-with-icons",
      "Bottom Navigation with Label": "#bottom-nav-with-label",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
    "Material Design": "https://material.io/components/bottom-navigation",
    "CSS Tricks": "https://css-tricks.com/almanac/properties/f/flex/",
  },
};

export const dropDownData = {
  seoTitle: "Dropdown Component - Design, Usage, and Accessibility",
  seoDescription:
    "Learn how to create a fully responsive, accessible, and custom dropdown menu with Material Design principles for better user interaction.",
  seoKeywords: [
    "dropdown",
    "dropdown menu",
    "material design dropdown",
    "responsive dropdown",
    "accessible dropdown",
  ],
  pageTitle: "Dropdown Component",
  pageDescription: [
    "Dropdown menus are a versatile UI element that allow users to choose from a list of options in a compact space. They are widely used for navigation, form inputs, and various other applications.",
    "When designing dropdowns, make sure they are easy to open and close, and provide users with clear visual feedback. Dropdowns should also be easy to navigate via both mouse and keyboard, with an accessible design that caters to users with disabilities.",
    "Ensure dropdowns are responsive, adapting to different screen sizes. Consider using a combination of absolute and relative positioning to ensure the dropdown appears in the correct place, avoiding clipping or overlapping other elements.",
    "For accessibility, use `aria-expanded` to indicate whether the dropdown is open, and `aria-haspopup` to inform users of the available options. Additionally, use `aria-activedescendant` to highlight the currently selected option when navigating with the keyboard.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Basic Dropdown", "Dropdown with Icons", "Dropdown with Search"],
  interactiveDemo: "https://example.com/dropdown-demo", // Replace with an actual interactive demo URL if applicable.
  accessibity:
    "Dropdowns should support both mouse and keyboard navigation. Make sure to trap keyboard focus within the dropdown when it's open, and ensure that users can navigate options using `Up` and `Down` arrow keys. `Enter` should select an option, and `Escape` should close the dropdown. Use `aria-expanded` and `aria-haspopup` for state management and convey the dropdown's purpose.",
  examples: [
    {
      component: "Basic Dropdown",
      description:
        "A simple dropdown menu with a list of links that appear when the button is clicked.",
      id: "basic-dropdown",
      title: "Basic Dropdown Example",
      usages:
        "Use for forms or navigation bars when a list of options is needed but space is limited.",
      purpose:
        "This basic dropdown is an essential UI pattern that can be used for providing users with a limited set of options or actions.",
      codeBlock: `
<div style="position: relative;">
  <button id="dropdownButton" style="background-color: #6200ea; color: white; border: none; padding: 10px 20px; cursor: pointer;">
    Options
  </button>
  <ul id="dropdownMenu" style="display: none; position: absolute; top: 100%; left: 0; background-color: white; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); padding: 10px 0; width: 200px; margin: 0;">
    <li style="padding: 8px 16px; list-style: none; text-align: left;">
      <a href="#action1" style="color: #6200ea; text-decoration: none;">Action 1</a>
    </li>
    <li style="padding: 8px 16px; list-style: none; text-align: left;">
      <a href="#action2" style="color: #6200ea; text-decoration: none;">Action 2</a>
    </li>
  </ul>
</div>

<script>
  const button = document.getElementById('dropdownButton');
  const menu = document.getElementById('dropdownMenu');

  button.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
  });

  window.addEventListener('click', (e) => {
    if (!e.target.matches('#dropdownButton') && !e.target.matches('#dropdownMenu') && !e.target.matches('#dropdownMenu *')) {
      menu.style.display = 'none';
    }
  });
</script>
      `,
      open: false,
    },
    {
      component: "Dropdown with Icons",
      description:
        "A dropdown menu that includes icons next to the options for better visual clarity and user experience.",
      id: "dropdown-with-icons",
      title: "Dropdown with Icons Example",
      usages:
        "Ideal for applications where visual clarity is needed, such as for file type selection, settings, or user profile options.",
      purpose:
        "This example uses Material Icons for a better user experience and clearer representation of the options within the dropdown.",
      codeBlock: `
<div style="position: relative;">
  <button id="dropdownButton" style="background-color: #6200ea; color: white; border: none; padding: 10px 20px; cursor: pointer;">
    Options
  </button>
  <ul id="dropdownMenu" style="display: none; position: absolute; top: 100%; left: 0; background-color: white; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); padding: 10px 0; width: 200px; margin: 0;">
    <li style="padding: 8px 16px; list-style: none; text-align: left;">
      <a href="#action1" style="color: #6200ea; text-decoration: none;">
        <i class="material-icons" style="vertical-align: middle; margin-right: 8px;">home</i> Action 1
      </a>
    </li>
    <li style="padding: 8px 16px; list-style: none; text-align: left;">
      <a href="#action2" style="color: #6200ea; text-decoration: none;">
        <i class="material-icons" style="vertical-align: middle; margin-right: 8px;">settings</i> Action 2
      </a>
    </li>
  </ul>
</div>

<script>
  const button = document.getElementById('dropdownButton');
  const menu = document.getElementById('dropdownMenu');

  button.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
  });

  window.addEventListener('click', (e) => {
    if (!e.target.matches('#dropdownButton') && !e.target.matches('#dropdownMenu') && !e.target.matches('#dropdownMenu *')) {
      menu.style.display = 'none';
    }
  });
</script>
      `,
      open: false,
    },
    {
      component: "Dropdown with Search",
      description:
        "A dropdown menu with a search input that allows users to quickly filter through options.",
      id: "dropdown-with-search",
      title: "Dropdown with Search Example",
      usages:
        "Ideal for applications with a large set of options where users need a search bar to quickly find the option they need.",
      purpose:
        "This example integrates a search input inside the dropdown to improve user experience when dealing with a large list of options.",
      codeBlock: `
<div style="position: relative;">
  <button id="dropdownButton" style="background-color: #6200ea; color: white; border: none; padding: 10px 20px; cursor: pointer;">
    Options
  </button>
  <div id="dropdownMenu" style="display: none; position: absolute; top: 100%; left: 0; background-color: white; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); padding: 10px 0; width: 200px; margin: 0;">
    <input type="text" id="searchInput" placeholder="Search..." style="padding: 8px; width: 100%; box-sizing: border-box;">
    <ul id="dropdownList" style="max-height: 150px; overflow-y: auto; padding: 0;">
      <li style="padding: 8px 16px; list-style: none;">Action 1</li>
      <li style="padding: 8px 16px; list-style: none;">Action 2</li>
      <li style="padding: 8px 16px; list-style: none;">Action 3</li>
    </ul>
  </div>
</div>

<script>
  const button = document.getElementById('dropdownButton');
  const menu = document.getElementById('dropdownMenu');
  const searchInput = document.getElementById('searchInput');
  const dropdownList = document.getElementById('dropdownList');

  button.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
  });

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const items = dropdownList.getElementsByTagName('li');
    Array.from(items).forEach(item => {
      if (item.textContent.toLowerCase().includes(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });

  window.addEventListener('click', (e) => {
    if (!e.target.matches('#dropdownButton') && !e.target.matches('#dropdownMenu') && !e.target.matches('#dropdownMenu *')) {
      menu.style.display = 'none';
    }
  });
</script>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Dropdown": "#basic-dropdown",
      "Dropdown with Icons": "#dropdown-with-icons",
      "Dropdown with Search": "#dropdown-with-search",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select",
    "Material Design": "https://material.io/components/menus",
    "CSS Tricks":
      "https://css-tricks.com/quick-css-trick-how-to-center-a-div-element/",
  },
};

export const sideNavigationData = {
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
  interactiveDemo: "https://example.com/responsive-demo", // Replace with a valid demo link.
  accessibity:
    "For responsive pages, ensure logical navigation order and focus management. Use semantic HTML elements (`<header>`, `<main>`, `<footer>`) for assistive technologies. Ensure all interactive elements are touch-friendly and test using screen readers and keyboard navigation.",
  examples: [
    {
      component: "Mobile Layout",
      description:
        "A compact layout optimized for small screens, with stacked content and easily tappable elements.",
      id: "mobile-layout",
      title: "Mobile Layout Example",
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
      title: "Tablet Layout Example",
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
      title: "Desktop Layout Example",
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
    "Interactive Demo": "#demo",
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

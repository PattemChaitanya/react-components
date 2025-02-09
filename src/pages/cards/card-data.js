import CarCard from "./card-component";
import ComplexCard from "./complex-card";
import HoverCard from "./display-hover-card";
import SimpleCard from "./simple-card";

export const jsonToPageDisplay = {
  pageTitle: "Cards",
  description: "Variety of Cards",
  jsonToDisplay: [
    {
      title: "Simple Cards",
      subTitle: "Simple Cards",
      toDisplay: `import React from "react";

const cardStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    width: "300px",
  },
  image: {
    width: "100%",
    height: "200px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  title: {
    margin: "20px 0 10px 0",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  description: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#666",
  },
};

const SimpleCard = () => {
  return (
    <div style={cardStyles.container}>
      <img
        style={cardStyles.image}
        src="https://via.placeholder.com/300x200"
        alt="Placeholder"
      />
      <h2 style={cardStyles.title}>Card Title</h2>
      <p style={cardStyles.description}>
        This is a simple card component in React with static data.
      </p>
    </div>
  );
};

export default SimpleCard;
`,
      component: <SimpleCard />,
      open: false,
    },
    {
      title: "Complex Cards",
      subTitle: "Complex Cards",
      toDisplay: `import React from "react";

const complexCardStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    borderRadius: "15px",
    width: "350px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "250px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "20px",
  },
  title: {
    fontWeight: "600",
    fontSize: "1.8rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
    color: "#333",
    textAlign: "center",
  },
};

const ComplexCard = () => {
  const handleClick = () => {
    alert("Card Clicked!");
  };

  return (
    <div style={complexCardStyles.container} onClick={handleClick}>
      <img
        style={complexCardStyles.image}
        src="https://via.placeholder.com/350x250"
        alt="Complex Card"
      />
      <h2 style={complexCardStyles.title}>Complex Card</h2>
      <p style={complexCardStyles.description}>
        This is a complex card component in React that is clickable.
      </p>
    </div>
  );
};

export default ComplexCard;
`,
      component: <ComplexCard />,
      open: false,
    },
    {
      title: "Display on hover",
      subTitle: "Display on hover",
      toDisplay: `import React, { useState } from "react";

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      backgroundColor: "#f0f0f0",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
      borderRadius: "15px",
      width: "350px",
      cursor: "pointer",
      transition: "transform 0.3s ease",
      position: "relative",
    },
    details: {
      position: "absolute",
      bottom: "10px",
      left: "10px",
      right: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "10px",
      borderRadius: "10px",
      display: "none",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "250px",
      borderRadius: "10px",
      objectFit: "cover",
      marginBottom: "20px",
    },
    title: {
      fontWeight: "600",
      fontSize: "1.8rem",
      marginBottom: "10px",
    },
    description: {
      fontSize: "1rem",
      color: "#333",
    },
  };

  return (
    <div
      style={cardStyles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        style={cardStyles.image}
        src="https://via.placeholder.com/350x250"
        alt="Hover Card"
      />
      <div
        style={{ ...cardStyles.details, display: isHovered ? "block" : "none" }}
      >
        <p style={cardStyles.description}>
          This is a hover card. Hover over the card to see this message.
        </p>
      </div>
      {!isHovered && <h2 style={cardStyles.title}>Hover Card</h2>}
    </div>
  );
};

export default HoverCard;
`,
      component: <HoverCard />,
      open: false,
    },
  ],
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
      component: <CarCard />,
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

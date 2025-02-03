import ImageCarousel from "./imageCarousel";
import ImageSlider from "./imageSlider";

export const jsonToPageDisplay = {
  pageTitle: "Images",
  description: "Variety of Images",
  jsonToDisplay: [
    {
      component: <ImageCarousel />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';
import Flower1 from "../../assets/mansoryImages/1.jpg";
import Flower2 from "../../assets/mansoryImages/2.jpg";
import Flower3 from "../../assets/mansoryImages/3.jpg";
import Flower4 from "../../assets/mansoryImages/4.jpg";
import Flower5 from "../../assets/mansoryImages/5.jpg";
import Flower6 from "../../assets/mansoryImages/6.jpg";
import Flower7 from "../../assets/mansoryImages/7.jpg";

const images = [
  Flower1,
  Flower2,
  Flower3,
  Flower4,
  Flower5,
  Flower6,
  Flower7,
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={styles.slider}>
      <button style={{ ...styles.button, ...styles.prev }} onClick={goToPrevious}>
        ❮
      </button>
      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt="Slide"
          style={styles.image}
        />
      </div>
      <button style={{ ...styles.button, ...styles.next }} onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

const styles = {
  slider: {
    position: 'relative',
    width: '500px',
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: '10px'
  },
  imageContainer: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out'
  },
  image: {
    width: '500px',
    height: '300px'
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1
  },
  prev: {
    left: '10px'
  },
  next: {
    right: '10px'
  },
};

export default ImageCarousel;
`,
    },
    {
      component: <ImageSlider />,
      open: false,
      toDisplay: `
import React, { useState, useEffect } from 'react';
import Flower1 from "../../assets/mansoryImages/1.jpg";
import Flower2 from "../../assets/mansoryImages/2.jpg";
import Flower3 from "../../assets/mansoryImages/3.jpg";
import Flower4 from "../../assets/mansoryImages/4.jpg";
import Flower5 from "../../assets/mansoryImages/5.jpg";
import Flower6 from "../../assets/mansoryImages/6.jpg";
import Flower7 from "../../assets/mansoryImages/7.jpg";

const images = [
  Flower1,
  Flower2,
  Flower3,
  Flower4,
  Flower5,
  Flower6,
  Flower7,
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={styles.slider}>
      <button style={{ ...styles.button, ...styles.prev }} onClick={goToPrevious}>
        ❮
      </button>
      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt="Slide"
          style={styles.image}
        />
      </div>
      <button style={{ ...styles.button, ...styles.next }} onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

const styles = {
  slider: {
    position: 'relative',
    width: '500px',
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: '10px'
  },
  imageContainer: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out'
  },
  image: {
    width: '500px',
    height: '300px'
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1
  },
  prev: {
    left: '10px'
  },
  next: {
    right: '10px'
  },
};

export default ImageSlider;
`,
    },
  ],
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

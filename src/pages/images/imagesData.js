import {
  RoundedImageCarousel,
  ImageCardWithOverlay,
  BackgroundImageCard,
  ImageGrid,
  ResponsiveImageGrid,
} from "./image-component";
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
    "Image Cards",
    "Background Images",
    "Thumbnail Images",
    "Gallery Images",
  ],
  interactiveDemo: "",
  accessibity:
    "Ensure images are accessible by including meaningful `alt` text for screen readers. For decorative images, set `alt=''` and `role='presentation'`. Provide proper contrast between images and overlaid text for better readability.",
  examples: [
    {
      component: <ResponsiveImageGrid />,
      description:
        "Images that adjust their size dynamically based on the screen width.",
      id: "responsive-images",
      title: "Responsive Image",
      usages:
        "Use in layouts that need to work across multiple devices and screen sizes.",
      purpose: "Maintains visual consistency and avoids layout breaking.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";

export const App = () => {
  const imageCards = [... add your images here];

  return (
    <div className="responsive-grid">
      {imageCards.slice(3).map((src, index) => (
        <div key={index} className="grid-item">
          <img src={src.imageUrl} alt={imageCards.description} />
        </div>
      ))}
    </div>
  );
};`,
        "app.css": `.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  padding: 20px;
}

.grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.grid-item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.grid-item:hover img {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}

@media (max-width: 480px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}`,
      },
      open: false,
    },
    {
      component: <RoundedImageCarousel />,
      description:
        "Images with rounded corners for a smoother, modern appearance.",
      id: "rounded-images",
      title: "Rounded Image",
      usages:
        "Use in designs where a softer or less rigid aesthetic is preferred.",
      purpose: "Creates a polished and professional look.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageCards.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn left" onClick={prevSlide}>
        ⟨
      </button>

      <img
        src={imageCards[currentIndex].imageUrl}
        alt={\`Slide \${currentIndex + 1}\`}
        className="carousel-image"
      />

      <button className="nav-btn right" onClick={nextSlide}>
        ⟩
      </button>
    </div>
  );
};`,
        "app.css": `.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
}

.carousel-image {
  width: 300px;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.carousel-image:hover {
  transform: scale(1.05);
}

.nav-btn {
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.left,
.right {
  position: absolute;
  z-index: 10;
}

.left {
  left: 20px;
}

.right {
  right: 20px;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.5);
}`,
      },
      open: false,
    },
    {
      component: <ImageCardWithOverlay />,
      description: "Images used in card components with text overlays.",
      id: "image-cards",
      title: "Image Card",
      usages: "Use for displaying content like articles, products, or events.",
      purpose:
        "Makes content visually appealing while maintaining a compact layout.",
      codeBlock: {
        "app.jsx": `import React from 'react';
import "./app.css";

export const App = () => {
  const imageCards = [... add your images here];

  return (
    <div className="overlay-card-container">
      {imageCards.slice(0, 3).map((card) => (
        <div key={card.id} className="overlay-card">
          <img src={card.imageUrl} alt={card.title} className="overlay-image" />
          <div className="overlay-text">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};`,
        "app.css": `.overlay-card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.overlay-card {
  position: relative;
  width: min(400px, 100%);
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.overlay-card:hover {
  transform: scale(1.05);
}

.overlay-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  transition: background 0.3s ease;
}

.overlay-card:hover .overlay-text {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3));
}

.overlay-text h3 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.overlay-text p {
  margin: 5px 0 0;
  font-size: 14px;
  opacity: 0.9;
}`,
      },
      open: false,
    },
    {
      component: <BackgroundImageCard />,
      description: "Images used as container backgrounds with layered content.",
      id: "background-images",
      title: "Background Image",
      usages: "Ideal for hero sections or content headers.",
      purpose:
        "Provides a visually striking design element while highlighting content.",
      codeBlock: {
        "app.jsx": `import React from 'react';
import "./app.css";

export const App = () => {
  const imageCards = [... add your images here];

  return (
    <div className="background-card-container">
      {imageCards.slice(3).map((card) => (
        <div
          key={card.id}
          className="background-card"
          style={{ backgroundImage: \`url(\${card.imageUrl})\` }}
        >
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button>{card.buttonLabel}</button>
          </div>
        </div>
      ))}
    </div>
  );
};`,
        "app.css": `.background-card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  width: min(400px, 100%);
}

.background-card {
  position: relative;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.background-card:hover {
  transform: scale(1.03);
}

.card-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  transition: background 0.3s ease;
}

.background-card:hover .card-content {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));
}

.card-content h2 {
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: bold;
}

.card-content p {
  margin: 0 0 15px;
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.9;
}

.card-content button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

.card-content button:hover {
  background-color: #ff4757;
}`,
      },
      open: false,
    },
    {
      component: <ImageGrid />,
      description: "A grid layout for multiple images.",
      id: "gallery-images",
      title: "Gallery Image",
      usages: "Use for portfolios, e-commerce, or image-heavy applications.",
      purpose: "Showcases multiple images in a structured and engaging way.",
      codeBlock: {
        "app.jsx": `import React from 'react';
import "./app.css";

export const App = () => {
  const imageCards = [... add your images here];
  
  return (
    <div className="image-grid-container">
      {imageCards.map((src, index) => (
        <div key={index} className="image-card">
          <img src={src.imageUrl} alt={imageCards.description} />
          <div className="overlay">
            <p>Image {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
};`,
        "app.css": `.image-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.image-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-card:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
}

.image-card:hover .overlay {
  transform: translateY(0);
}

.overlay p {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Responsive Image": "#responsive-images",
      "Rounded Image": "#rounded-images",
      "Image Card": "#image-cards",
      "Background Image": "#background-images",
      "Gallery Image": "#gallery-images",
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

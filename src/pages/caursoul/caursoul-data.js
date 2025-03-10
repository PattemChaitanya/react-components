// import { RoundedImageCarousel } from "../images/image-component";
import {
  AutoCarousel,
  CardCarousel,
  FullScreenCarousel,
} from "./caursoul-component";

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
    // "Image Carousel",
    "Card Carousel",
    "Auto-Scrolling Carousel",
    // "Multi-Item Carousel",
    "Fullscreen Carousel",
  ],
  interactiveDemo: "",
  accessibity:
    "Carousels should support keyboard navigation, focus management, and screen reader announcements. Use ARIA roles like `aria-live` to update screen readers about slide changes.",
  examples: [
    //     {
    //       component: <RoundedImageCarousel />,
    //       description:
    //         "A carousel showcasing images with indicators and navigation arrows.",
    //       id: "image-carousel",
    //       title: "Image Carousel",
    //       usages: "Use for photo galleries, advertisements, or featured content.",
    //       purpose:
    //         "Engages users visually with scrollable, organized image content.",
    //       codeBlock: {
    //         "app.jsx": `import React, { useState } from "react";
    // import "./app.css";

    // export const App = () => {
    //   const [currentIndex, setCurrentIndex] = useState(0);
    //   const cards = [... add your cards];

    //   const handlePrev = () => {
    //     setCurrentIndex((prevIndex) =>
    //       prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    //     );
    //   };

    //   const handleNext = () => {
    //     setCurrentIndex((prevIndex) =>
    //       prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    //     );
    //   };

    //   return (
    //     <div className="carousel-container">
    //       <button className="nav-button prev" onClick={handlePrev}>
    //         &#10094;
    //       </button>

    //       <div className="carousel-card">
    //         <img
    //           src={cards[currentIndex].imageUrl}
    //           alt={cards[currentIndex].title}
    //         />
    //         <div className="card-content">
    //           <h2>{cards[currentIndex].title}</h2>
    //           <p>{cards[currentIndex].description}</p>
    //           <button className="action-button">
    //             {cards[currentIndex].buttonText}
    //           </button>
    //         </div>
    //       </div>

    //       <button className="nav-button next" onClick={handleNext}>
    //         &#10095;
    //       </button>
    //     </div>
    //   );
    // };`,
    //         "app.css": ``,
    //       },
    //       open: false,
    //     },
    {
      component: <CardCarousel />,
      description:
        "A carousel displaying cards with text, buttons, and images.",
      id: "card-carousel",
      title: "Card Carousel",
      usages: "Use for product showcases, blog highlights, or testimonials.",
      purpose:
        "Provides a structured way to display rich content interactively.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [... add your cards];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-button prev" onClick={handlePrev}>
        &#10094;
      </button>

      <div className="carousel-card">
        <img
          src={cards[currentIndex].imageUrl}
          alt={cards[currentIndex].title}
        />
        <div className="card-content">
          <h2>{cards[currentIndex].title}</h2>
          <p>{cards[currentIndex].description}</p>
          <button className="action-button">
            {cards[currentIndex].buttonText}
          </button>
        </div>
      </div>

      <button className="nav-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};`,
        "app.css": `.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: min(400px, 100%);
  margin: 20px auto;
  padding: 10px;
}

.carousel-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 100%;
  height: 200px;
  transition: transform 0.5s ease-in-out;
  text-align: center;
}

.carousel-card img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h2 {
  margin: 10px 0;
  font-size: 1.5rem;
}

.card-content p {
  font-size: 0.9rem;
  margin: 10px 0;
}

.action-button {
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: #3700b3;
}

/* Navigation Buttons */
.nav-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
  transition: color 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  padding: 0 15px;
}

.nav-button:hover {
  color: #fff;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

@media (max-width: 480px) {
  .action-button {
    padding: 8px 15px;
  }
}`,
      },
      open: false,
    },
    {
      component: <AutoCarousel />,
      description: "A carousel that automatically scrolls through slides.",
      id: "auto-scrolling-carousel",
      title: "Auto-Scrolling Carousel",
      usages:
        "Use for hero banners, advertisements, or content that needs periodic attention.",
      purpose:
        "Engages users passively by rotating through slides automatically.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCards = [... add your images];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % imageCards.slice(0, 4).length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="auto-carousel-container">
      {imageCards.slice(0, 4).map((slide, index) => (
        <div
          key={index}
          className={\`slide \${index === currentIndex ? "active" : ""}\`}
        >
          <img src={slide.imageUrl} alt={slide.title} />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="dots-container">
        {imageCards.slice(0, 4).map((_, index) => (
          <span
            key={index}
            className={\`dot \${index === currentIndex ? "active" : ""}\`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};`,
        "app.css": `.auto-carousel-container {
  position: relative;
  width: min(400px, 100%);
  margin: 20px auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.slide {
  display: none;
  transition: opacity 0.8s ease-in-out;
  position: relative;
}

.slide.active {
  display: block;
}

.slide img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.slide-content {
  background: white;
  padding: 15px;
  text-align: center;
}

.slide-content h2 {
  font-size: 1.4rem;
  color: #333;
  margin: 10px 0;
}

.slide-content p {
  color: #555;
  font-size: 0.9rem;
  margin: 5px 0;
}

/* Dots for navigation */
.dots-container {
  text-align: center;
  margin: 10px 0;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: #6200ea;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: #6200ea;
}

@media (max-width: 480px) {
  .auto-carousel-container {
    max-width: 300px;
  }

  .slide-content h2 {
    font-size: 1.2rem;
  }

  .dot {
    height: 10px;
    width: 10px;
  }
}`,
      },
      open: false,
    },
    // {
    //   component: "Multi-Item Carousel",
    //   description: "A carousel that displays multiple items at once.",
    //   id: "multi-item-carousel",
    //   title: "Multi-Item Carousel",
    //   usages:
    //     "Use for image galleries, product carousels, or feature highlights.",
    //   purpose:
    //     "Maximizes screen space while showing multiple pieces of content simultaneously.",
    //   codeBlock: { "app.jsx": ``, "app.css": `` },
    //   open: false,
    // },
    {
      component: <FullScreenCarousel />,
      description: "A fullscreen carousel with immersive visuals.",
      id: "fullscreen-carousel",
      title: "Fullscreen Carousel",
      usages:
        "Use for portfolios, immersive product showcases, or image-based storytelling.",
      purpose:
        "Captures users' attention by filling the entire viewport with visual content.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const FullScreenCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCards = [... add your images];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % imageCards.slice(2, 5).length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="fullscreen-carousel">
      {imageCards.slice(2, 5).map((slide, index) => (
        <div
          key={index}
          className={\`carousel-slide \${index === currentIndex ? "active" : ""}\`}
          style={{ backgroundImage: \`url(\${slide.imageUrl})\` }}
        >
          <div className="slide-overlay">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="carousel-dots">
        {imageCards.slice(2, 5).map((_, index) => (
          <span
            key={index}
            className={\`dot \${index === currentIndex ? "active" : ""}\`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};`,
        "app.css": `.fullscreen-carousel {
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  margin: 0;
}

/* Each slide */
.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
  z-index: 1;
}

/* Text overlay */
.slide-overlay {
  position: absolute;
  bottom: 20%;
  left: 10%;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  max-width: 400px;
  text-align: left;
  animation: fadeInUp 1.5s ease-in-out;
}

.slide-overlay h1 {
  font-size: 2.5rem;
  margin: 0 0 10px;
}

.slide-overlay p {
  font-size: 1.2rem;
  margin: 0;
}

/* Navigation dots */
.carousel-dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
}

.dot {
  height: 14px;
  width: 14px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: white;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .slide-overlay {
    bottom: 15%;
    left: 5%;
    max-width: 300px;
  }

  .slide-overlay h1 {
    font-size: 2rem;
  }

  .slide-overlay p {
    font-size: 1rem;
  }

  .dot {
    height: 10px;
    width: 10px;
  }
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      // "Image Carousel": "#image-carousel",
      "Card Carousel": "#card-carousel",
      "Auto-Scrolling Carousel": "#auto-scrolling-carousel",
      // "Multi-Item Carousel": "#multi-item-carousel",
      "Fullscreen Carousel": "#fullscreen-carousel",
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

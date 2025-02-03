import {} from "./caursoul-component";

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

import { Slider } from "./slider-component";

export const sliderData = {
  seoTitle: "Slider Component – A Complete Guide",
  seoDescription:
    "Explore the versatility of sliders, an essential UI component for range selection, input control, and media navigation. Learn to design and implement sliders effectively.",
  seoKeywords: [
    "slider component",
    "range slider",
    "UI sliders",
    "input sliders",
    "volume slider",
    "media slider",
    "progress bar",
  ],
  pageTitle: "Slider",
  pageDescription: [
    "Sliders are interactive UI components that allow users to select values or ranges by dragging a handle along a track.",
    "They are commonly used for range selection, volume control, and media playback.",
  ],
  pageImage: "https://material-web.dev/components/images/slider/hero.webp",
  types: [
    "Range Slider",
    "Single Value Slider",
    "Volume Slider",
    "Media Slider",
  ],
  interactiveDemo:
    "https://material-web.dev/components/slider#interactive-demo",
  accessibity:
    "Sliders are accessible with keyboard support, screen reader announcements for values, and ARIA roles for better usability.",
  examples: [
    {
      component: <Slider />,
      description:
        "A range slider for selecting a range of values between two points.",
      id: "range-slider",
      title: "Price Range Slider",
      usages:
        "Use range sliders for selecting ranges, such as price filters or date ranges.",
      purpose:
        "To allow users to select a start and end value within a defined range.",
      codeBlock: `
<div class="slider-container">
  <label for="range-slider">Price Range: $0 - $100</label>
  <input type="range" id="range-slider-min" min="0" max="100" value="20">
  <input type="range" id="range-slider-max" min="0" max="100" value="80">
</div>
      `,
      open: false,
    },
    {
      component: "Single Value Slider Example",
      description:
        "A single slider for selecting one value within a defined range.",
      id: "single-slider",
      title: "Brightness Control Slider",
      usages:
        "Use single sliders for inputs like brightness, contrast, or other single-value settings.",
      purpose: "To adjust a single value interactively.",
      codeBlock: `
<div class="slider-container">
  <label for="brightness-slider">Brightness: 50%</label>
  <input type="range" id="brightness-slider" min="0" max="100" value="50">
</div>
      `,
      open: false,
    },
    {
      component: "Volume Slider Example",
      description:
        "A vertical or horizontal slider for adjusting volume levels.",
      id: "volume-slider",
      title: "Volume Control Slider",
      usages: "Use volume sliders for audio or media volume adjustment.",
      purpose: "To provide users with precise control over volume levels.",
      codeBlock: `
<div class="slider-container">
  <label for="volume-slider">Volume</label>
  <input type="range" id="volume-slider" min="0" max="100" value="75" orient="vertical">
</div>
      `,
      open: false,
    },
    {
      component: "Media Slider Example",
      description:
        "A slider for navigating or seeking through media, such as video or audio.",
      id: "media-slider",
      title: "Media Playback Slider",
      usages:
        "Use media sliders for video or audio playback, allowing users to seek specific timestamps.",
      purpose:
        "To enhance the media playback experience with precise seek control.",
      codeBlock: `
<div class="slider-container">
  <label for="media-slider">Playback Position</label>
  <input type="range" id="media-slider" min="0" max="300" value="120">
  <span>2:00 / 5:00</span>
</div>
      `,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    "Interactive Demo": "#interactive-demo",
    Accessibility: "#accessibity",
    Examples: {
      "Range Slider": "#range-slider",
      "Single Value Slider": "#single-slider",
      "Volume Slider": "#volume-slider",
      "Media Slider": "#media-slider",
    },
    References: "#references",
  },
  references: {
    "Material Design Sliders": "https://material.io/components/sliders",
    "HTML Input Range Documentation":
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range",
    "ARIA Slider Accessibility Guide":
      "https://www.w3.org/WAI/ARIA/apg/patterns/slider/",
  },
};

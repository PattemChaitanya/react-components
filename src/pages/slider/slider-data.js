import {
  DualRangeSlider,
  MusicPlayerSlider,
  Slider,
  VolumeSlider,
} from "./slider-component";

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
  types: ["Basic Slider", "Volume Slider", "Range Slider", "Media Slider"],
  interactiveDemo:
    "https://material-web.dev/components/slider#interactive-demo",
  accessibity:
    "Sliders are accessible with keyboard support, screen reader announcements for values, and ARIA roles for better usability.",
  examples: [
    {
      component: <Slider />,
      description:
        "A simple slider component that allows users to select a single value within a predefined range. The slider provides a smooth and interactive way to adjust numerical inputs.",
      id: "basic-slider",
      title: "Basic Slider",
      usages:
        "Used in volume controls, brightness adjustments, form inputs, progress tracking, and any UI requiring a single-value selection within a range.",
      purpose:
        "To provide a user-friendly input method for selecting a value within a defined range, improving accessibility and interaction.",
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
      component: <VolumeSlider />,
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
      component: <DualRangeSlider />,
      description:
        "A dual-handle range slider that allows users to select a minimum and maximum value, like price filter. It visually represents the selected range with a track between the handles.",
      id: "range-slider",
      title: "Range Slider",
      usages:
        "Used in pricing filters, budget selectors, volume controls, and other applications where users need to define a range of values.",
      purpose:
        "To provide an intuitive and interactive way for users to select a numerical range, ensuring better user experience in filtering and selection processes.",
      codeBlock: `
<div class="slider-container">
  <label for="media-slider">Playback Position</label>
  <input type="range" id="media-slider" min="0" max="300" value="120">
  <span>2:00 / 5:00</span>
</div>
      `,
      open: false,
    },
    {
      component: <MusicPlayerSlider />,
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
      "Basic Slider": "#basic-slider",
      "Volume Slider": "#volume-slider",
      "Range Slider": "#range-slider",
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
  previousNavigation: { title: "Check box", link: "/check-box" },
  nextNavigation: {
    title: "Input field",
    link: "/input",
  },
};

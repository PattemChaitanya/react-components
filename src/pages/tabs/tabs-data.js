import {
  IconAndTextTabs,
  IconTabs,
  ScrollableTabs,
  TextTabs,
} from "./tabs-component";

export const tabsData = {
  seoTitle: "Tabs",
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
      component: <TextTabs />,
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
      component: <IconTabs />,
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
      id: "icon-text-tabs",
      title: "Text and Icon Tabs",
      description: "Tabs represented using text and icons.",
      usages:
        "Ideal for dashboards or when the icons themselves are self-explanatory (e.g., home, settings, search).",
      purpose: "Saves space while still providing intuitive navigation.",
      component: <IconAndTextTabs />,
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
      component: <ScrollableTabs />,
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
    // "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Text Tabs": "#text-tabs",
      "Icon Tabs": "#icon-tabs",
      "Text and Icon Tabs": "#icon-text-tabs",
      "Scrollable Tabs": "#scrollable-tabs",
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

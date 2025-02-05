import ComplexDropDowns from "./complex-drop-downs";
import NotificationDropDowns from "./notification-drop-downs";
import SimpleDropDowns from "./simple-drop-downs";

export const jsonToPageDisplay = {
  pageTitle: "Drop downs",
  description: "Variety of drop downs",
  jsonToDisplay: [
    {
      title: "Click and Hover drop downs",
      subTitle: "Click and Hover drop downs",
      toDisplay: "",
      component: <SimpleDropDowns />,
      open: false,
    },
    {
      title: "Profile drop downs",
      subTitle: "Profile drop downs",
      toDisplay: "",
      component: <ComplexDropDowns />,
      open: false,
    },
    {
      title: "Notifications drop-downs",
      subTitle: "Notifications drop-downs",
      toDisplay: "",
      component: <NotificationDropDowns />,
      open: false,
    },
  ],
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
  pageTitle: "Dropdown",
  pageDescription: [
    "Dropdown menus are a versatile UI element that allow users to choose from a list of options in a compact space. They are widely used for navigation, form inputs, and various other applications.",
    "When designing dropdowns, make sure they are easy to open and close, and provide users with clear visual feedback. Dropdowns should also be easy to navigate via both mouse and keyboard, with an accessible design that caters to users with disabilities.",
    "Ensure dropdowns are responsive, adapting to different screen sizes. Consider using a combination of absolute and relative positioning to ensure the dropdown appears in the correct place, avoiding clipping or overlapping other elements.",
    "For accessibility, use `aria-expanded` to indicate whether the dropdown is open, and `aria-haspopup` to inform users of the available options. Additionally, use `aria-activedescendant` to highlight the currently selected option when navigating with the keyboard.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Basic Dropdown", "Dropdown with Icons", "Dropdown with Search"],
  interactiveDemo: "https://example.com/dropdown-demo",
  accessibity:
    "Dropdowns should support both mouse and keyboard navigation. Make sure to trap keyboard focus within the dropdown when it's open, and ensure that users can navigate options using `Up` and `Down` arrow keys. `Enter` should select an option, and `Escape` should close the dropdown. Use `aria-expanded` and `aria-haspopup` for state management and convey the dropdown's purpose.",
  examples: [
    {
      component: <SimpleDropDowns />,
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
      component: <ComplexDropDowns />,
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
      component: <NotificationDropDowns />,
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

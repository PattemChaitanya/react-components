import { ExtendedFAB, SimpleFAB } from "./fab-component";

export const fabData = {
  seoTitle: "Floating Action Button (FAB) Guide",
  seoDescription:
    "Learn how to implement a Floating Action Button (FAB) using Material Design principles, with examples, accessibility tips, and interactive demos.",
  seoKeywords: [
    "Material Design FAB",
    "Floating Action Button",
    "FAB UI Component",
    "Material Design Components",
  ],
  pageTitle: "Fab",
  pageDescription: [
    "The Floating Action Button (FAB) is a circular button that represents a primary action on a screen.",
    "It’s designed to provide prominence to a key action in your app, making it easily accessible while adhering to Material Design principles.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Default FAB", "Extended FAB"],
  interactiveDemo: "https://material-web.dev/components/fab",
  accessibity:
    "Ensure the FAB is accessible by adding proper ARIA roles and labels. For instance, use `aria-label` to describe the action of the button. Always position it in a way that doesn’t obstruct critical UI elements. If multiple FABs exist, prioritize one as the primary action for clarity.",
  examples: [
    {
      component: <SimpleFAB />,
      description: "A FAB with an icon that represents adding a new item.",
      id: "fab-add-default",
      title: "Default FAB Example",
      usages:
        "Use this for actions like creating a new document, adding a task, or initiating a primary action.",
      purpose:
        "Highlights the primary action without taking up much screen real estate.",
      codeBlock: {
        "app.jsx": `import React from "react";
        
export const SimpleFAB = () => {
  return (
    <div className="fab-container">
      <div id="presentation">
        <h1>Basic FAB with text</h1>
      </div>

      <div id="container-floating">
        <div class="nd3 nds">
          <p class="letter">Create a list</p>
        </div>

        <div class="nd2 nds">
          <p class="letter">Create a docs</p>
        </div>

        <div class="nd1 nds">
          <p class="letter">Create a text</p>
        </div>

        <div id="floating-button">
          <p class="plus">+</p>
          <img
            class="edit"
            src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
            alt="edit"
          />
        </div>
      </div>
    </div>
  );
};
        `,
        "app.css": `.fab-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  height: min(400px, 300px);
}

#presentation h1 {
  margin: 0;
  font-size: 24px;
}

#container-floating {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
  height: 60px;
}

.nds {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #4285f4;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, opacity 0.3s;
  transform: scale(0);
  width: max-content;
  opacity: 0;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  cursor: pointer;
  padding: 6px;
}

.letter {
  margin: 0;
  padding: 0;
}

#container-floating:hover .nds {
  opacity: 1;
}

.nd1 {
  transform: translateY(-140px);
}

.nd2 {
  transform: translateY(-100px);
}

.nd3 {
  transform: translateY(-60px);
}

#floating-button {
  width: 50px;
  height: 50px;
  background-color: #db4437;
  border-radius: 50%;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
}

#floating-button:hover {
  background-color: #c33c2e;
}

#floating-button .plus {
  font-size: 28px;
  color: white;
  margin: 0;
  position: absolute;
  transition: opacity 0.3s;
}

#floating-button .edit {
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity 0.3s;
}

#floating-button:hover .plus {
  opacity: 0;
}

#floating-button:hover .edit {
  opacity: 1;
}`,
      },
      open: false,
    },
    {
      component: <ExtendedFAB />,
      description: "An extended FAB with both an icon and text label.",
      id: "fab-extended",
      title: "Extended FAB Example",
      usages:
        "Best used when the action needs more context or is less familiar to the user.",
      purpose:
        "Provides more clarity while maintaining the primary action's prominence.",
      codeBlock: {
        "app.jsx": `import React from "react";
        
export const ExtendedFAB = () => {
  return (
    <div className="fab-container">
      <div id="presentation">
        <h1>Extended FAB with icons</h1>
      </div>

      <div id="container-floating">
        <div class="nd4 nds">
          <ListIcon />
          <p class="letter">Create a list</p>
        </div>

        <div class="nd5 nds">
          <ArticleIcon />
          <p class="letter">Create a docs</p>
        </div>

        <div class="nd6 nds">
          <CreateIcon />
          <p class="letter">Create a text</p>
        </div>

        <div id="floating-button">
          <p class="plus">+</p>
          <img
            class="edit"
            src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
            alt="edit"
          />
        </div>
      </div>
    </div>
  );
};`,
        "app.css": `.fab-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  height: min(400px, 300px);
}

#presentation h1 {
  margin: 0;
  font-size: 24px;
}

#container-floating {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
  height: 60px;
}

.nds {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #4285f4;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, opacity 0.3s;
  transform: scale(0);
  width: max-content;
  opacity: 0;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  cursor: pointer;
  padding: 6px;
}

.letter {
  margin: 0;
  padding: 0;
}

#container-floating:hover .nds {
  opacity: 1;
}

.nd4 {
  transform: translateY(-60px);
}

.nd5 {
  transform: translateY(-105px);
}

.nd6 {
  transform: translateY(-150px);
}

/* Floating Action Button */
#floating-button {
  width: 50px;
  height: 50px;
  background-color: #db4437;
  border-radius: 50%;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
}

#floating-button:hover {
  background-color: #c33c2e;
}

#floating-button .plus {
  font-size: 28px;
  color: white;
  margin: 0;
  position: absolute;
  transition: opacity 0.3s;
}

#floating-button .edit {
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity 0.3s;
}

#floating-button:hover .plus {
  opacity: 0;
}

#floating-button:hover .edit {
  opacity: 1;
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Default FAB": "#fab-add-default",
      "Extended FAB": "#fab-extended",
    },
    References: "#references",
  },
  references: {
    "Material Design Guidelines":
      "https://m3.material.io/components/floating-action-button",
    "Accessibility in Buttons":
      "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
    "Material Icons": "https://fonts.google.com/icons",
  },
  previousNavigation: { title: "Chips", link: "/all-components/chip" },
  nextNavigation: {
    title: "Icon Buttons",
    link: "/all-components/icon-buttons",
  },
};

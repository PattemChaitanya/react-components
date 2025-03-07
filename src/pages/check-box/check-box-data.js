import ParentCheckbox, {
  Checkbox,
  CheckboxThemed,
  // CheckboxWithIcon,
  CheckboxWithLabel,
} from "./checkbox-component";

export const checkboxData = {
  seoTitle: "Checkbox Component - Versatile Multi-Select Control",
  seoDescription:
    "Explore the Checkbox component for multi-select functionality and form inputs. Includes examples, creative styles, and accessibility tips.",
  seoKeywords: [
    "Checkbox",
    "UI Design",
    "Selection Control",
    "Form Elements",
    "Custom Checkbox",
  ],
  pageTitle: "Checkbox",
  pageDescription: [
    "The Check box component is a versatile form element that allows users to select one or more options from a set.",
    "Check boxes are ideal for multi-select scenarios, binary settings, and customizable form inputs.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Checkbox",
    "Checkbox with Labels",
    "Custom-Themed Checkbox",
    "Indeterminate Checkbox",
    // "Icon-Based Checkbox",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "Ensure each checkbox has a descriptive label, and use ARIA attributes like 'aria-checked' and 'aria-labelledby' where necessary. Keyboard navigation should support toggling the checkbox with Space or Enter, and focus indicators should be clear and visible. For indeterminate states, ensure they are communicated to assistive technologies.",
  examples: [
    {
      component: <Checkbox />,
      description: "A minimal checkbox for simple selection.",
      id: "basic",
      title: "Basic Checkbox",
      usages:
        "Used for scenarios like accepting terms, enabling features, or selecting preferences.",
      purpose: "Provides a straightforward way to toggle a binary state.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name="check-me"
        checked={checked}
        onChange={() => setChecked(!checked)}
        aria-checked={checked}
        aria-describedby="check-me-description"
      />
    </div>
  );
};`,
        "app.css": `.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: grid;
  place-content: center;
}

.checkbox input[type="checkbox"]:checked {
  border-color: var(--primary-color);
}

.checkbox input[type="checkbox"]::before {
  content: "";
  width: 12px;
  height: 12px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--color-primary-container);
  transform-origin: center;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.checkbox input[type="checkbox"]:checked::before {
  transform: scale(1);
}

.checkbox input[type="checkbox"]:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.checkbox-label {
  font-size: 1rem;
  cursor: pointer;
}`,
      },
      open: false,
    },
    {
      component: <CheckboxWithLabel />,
      description: "A checkbox paired with a text label for better context.",
      id: "labels",
      title: "Checkbox with Labels",
      usages:
        "Ideal for forms where clarity about the checkbox's function is necessary.",
      purpose:
        "Enhances user understanding by pairing the checkbox with descriptive text.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./styles.css";

export const CheckboxWithLabel = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        aria-checked={checked}
        aria-describedby="check-me-description"
      />
      <label htmlFor="check-me" className="checkbox-label">
        Check me
      </label>
      <span id="check-me-description" className="sr-only">
        This is a checkbox that you can check.
      </span>
    </div>
  );
};`,
        "app.css": `.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: grid;
  place-content: center;
}

.checkbox input[type="checkbox"]:checked {
  border-color: var(--primary-color);
}

.checkbox input[type="checkbox"]::before {
  content: "";
  width: 12px;
  height: 12px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--color-primary-container);
  transform-origin: center;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.checkbox input[type="checkbox"]:checked::before {
  transform: scale(1);
}

.checkbox input[type="checkbox"]:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.checkbox-label {
  font-size: 1rem;
  cursor: pointer;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`,
      },
      open: false,
    },
    {
      component: <CheckboxThemed />,
      description:
        "A checkbox styled with custom visuals such as colors or animations.",
      id: "custom-theme",
      title: "Custom-Themed Checkbox",
      usages:
        "Perfect for branded designs or applications with unique visual identities.",
      purpose:
        "Combines functionality with creative expression for better user engagement.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const CheckboxThemed = () => {
  let label = "check-me";
  let id = "check-me";
  let theme = { primaryColor: "#6200ea" };
  const [checked, setChecked] = React.useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  
  return (
    <div className="checkbox" style={{ "--primary-color": theprimaryColor }}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        aria-checked={checked}
        aria-describedby={U+0060check-me-descriptionU+0060}
      />
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
            <span id={U+0060check-me-description-{id}U+006className="sr-only">
        This is a checkbox that you can check.
      </span>
    </div>
  );
};`,
        "app.css": `.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: grid;
  place-content: center;
}

.checkbox input[type="checkbox"]:checked {
  border-color: var(--primary-color);
}

.checkbox input[type="checkbox"]::before {
  content: "";
  width: 12px;
  height: 12px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--color-primary-container);
  transform-origin: center;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.checkbox input[type="checkbox"]:checked::before {
  transform: scale(1);
}

.checkbox input[type="checkbox"]:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.checkbox-label {
  font-size: 1rem;
  cursor: pointer;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`,
      },
      open: false,
    },
    {
      component: <ParentCheckbox />,
      description: "A checkbox with a partial selection state.",
      id: "indeterminate",
      title: "Indeterminate Checkbox",
      usages:
        "Used in hierarchical selections, like when a parent option is partially selected.",
      purpose:
        "Communicates partial selection in a clear and accessible manner.",
      codeBlock: {
        "app.jsx": `import React, { useEffect, useRef, useState } from "react";
import "./app.css";

export const ParentCheckbox = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const allChecked = checkedItems.every(Boolean);
  const someChecked = checkedItems.some(Boolean) && !allChecked;
  const toggleParent = () => {
    setCheckedItems(allChecked ? [false, false, false] : [true, true, true]);
  };

  const toggleChild = (index) => {
    setCheckedItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };
  
  return (
    <div className="checkbox-in-group">
      <IndeterminateCheckbox
        label="Select All"
        isChecked={allChecked}
        isIndeterminate={someChecked}
        onChange={toggleParent}
      />
      {checkedItems.map((checked, index) => (
        <IndeterminateCheckbox
          key={index}
          label={Item {index + 1}}
          isChecked={checked}
          isIndeterminate={false}
          onChange={() => toggleChild(index)}
        />
      ))}
    </div>
  );
};
export default ParentCheckbox;

const IndeterminateCheckbox = ({
  label = "Select All",
  isChecked,
  isIndeterminate,
  onChange,
}) => {
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  return (
    <label className="checkbox-in-container">
      <input
        ref={checkboxRef}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="custom-checkbox-in"></span>
      <span className="checkbox-in-label">{label}</span>
    </label>
  );
};
      `,
        "app.css": `.checkbox-in-container {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 1rem;
  user-select: none;
  margin: 5px 0;
}

.checkbox-in-container input {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid var(--primary-color, #007bff);
  border-radius: 4px;
  background-color: white;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.checkbox-in-container input:checked {
  background-color: var(--primary-color, #007bff);
}

.checkbox-in-container input:checked::after {
  content: "✔";
  position: absolute;
  color: white;
  font-size: 14px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.checkbox-in-container input:indeterminate {
  background-color: var(--primary-color, #007bff);
}

.checkbox-in-container input:indeterminate::after {
  content: "—";
  position: absolute;
  color: white;
  font-size: 14px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.checkbox-in-label {
  font-size: 1rem;
}`,
      },
      open: false,
    },
    // {
    //   component: <CheckboxWithIcon />,
    //   description:
    //     "A checkbox that uses icons or images instead of a traditional square.",
    //   id: "icons",
    //   title: "Icon-Based Checkbox Example",
    //   usages:
    //     "Great for visually rich designs, like voting systems or feedback tools.",
    //   purpose:
    //     "Improves usability by making selections more visually intuitive.",
    //   codeBlock: "<checkbox id='icon' icon='✔️'>Mark as Complete</checkbox>",
    //   open: false,
    // },
  ],
  links: {
    Types: "#types",
    // "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Checkbox": "#basic",
      "Checkbox with Labels": "#labels",
      "Custom-Themed Checkbox": "#custom-theme",
      "Indeterminate Checkbox": "#indeterminate",
      // "Icon-Based Checkbox": "#icons",
    },
    References: "#references",
  },
  references: {
    "ARIA Guidelines for Checkboxes":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Checkbox_Role",
    "Best Practices for Checkbox Design":
      "https://uxplanet.org/checkbox-ui-design-best-practices-4e0184fbb1e0",
    "Keyboard Navigation in Forms":
      "https://webaim.org/techniques/forms/controls",
  },
  previousNavigation: { title: "Buttons", link: "/all-components/buttons" },
  nextNavigation: {
    title: "Slider",
    link: "/all-components/slider",
  },
};

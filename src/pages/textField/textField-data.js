import {
  MultiLineTextField,
  PasswordField,
  TextField,
  TextFieldWithPrefixSuffix,
  TextFieldWithValidation,
} from "./text-field-component";

export const textFieldData = {
  seoTitle: "Text Field Component - Modern UI Design",
  seoDescription:
    "Explore the Text Field component, an essential input element for capturing user data, with creative examples, accessibility considerations, and interactive demos.",
  seoKeywords: [
    "Text Field",
    "UI Design",
    "Input Elements",
    "Modern Forms",
    "User Data Entry",
  ],
  pageTitle: "Text Field",
  pageDescription: [
    "The Text Field component is a versatile input element designed for capturing textual data from users.",
    "It can adapt to a variety of use cases, from simple single-line inputs to complex, multi-line inputs with formatting and validation.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: [
    "Basic Text Field",
    "Multi-Line Text Field",
    "Text Field with Prefix/Suffix",
    "Password Text Field",
    "Text Field with Validation",
  ],
  interactiveDemo: "#demo",
  accessibity:
    "Text Fields should be fully navigable via keyboard, with clear focus indicators. Use ARIA attributes like 'aria-label' for naming the field and 'aria-invalid' for validation feedback. Provide real-time error messaging for users with screen readers and ensure that the contrast between text and background is sufficient.",
  examples: [
    {
      component: <TextField />,
      description:
        "A simple, single-line text field for capturing short text entries.",
      id: "basic",
      title: "Basic Text Field(Input)",
      usages:
        "Used for capturing single-line inputs like names, email addresses, or search queries.",
      purpose: "Provides a clean and minimalistic way to input text.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const TextField = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="basic-text-field">
        Enter Text:
      </label>
      <input
        id="basic-text-field"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
};`,
        "app.css": `.container {
  width: 300px;
  padding: 20px;
  margin: auto;
}
  
input[type="text"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
  
label {
  display: block;
  margin-bottom: 10px;
}
  
p {
  margin-top: 10px;
}`,
      },
      open: false,
    },
    {
      component: <MultiLineTextField />,
      description: "A text field that expands to accommodate longer inputs.",
      id: "multi",
      title: "Multi-Line Text Field(Input)",
      usages:
        "Ideal for capturing feedback, comments, or longer pieces of information.",
      purpose:
        "Creates a comfortable user experience for typing longer content.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const MultiLineTextField = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="multi-line-text-field">
        Enter your message:
      </label>
      <textarea
        id="multi-line-text-field"
        value={text}
        onChange={handleChange}
        placeholder="Type your message here..."
        rows="5"
      />
      <p>
        You wrote: <br />
        <em>{text}</em>
      </p>
    </div>
  );
};`,
        "app.css": `.container {
  padding: 20px;
  max-width: 400px;
  margin: auto;
}
  
label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}
  
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: "vertical",
}
  
p {
  margin-top: 10px;
}`,
      },
      open: false,
    },
    {
      component: <TextFieldWithPrefixSuffix />,
      description:
        "An input field with a prefix or suffix to provide context for the input.",
      id: "prefix-suffix",
      title: "Text Field(Input) with Prefix/Suffix",
      usages:
        "Perfect for inputs like currency (e.g., $100), measurements (e.g., 50kg), or units (e.g., 15min).",
      purpose:
        "Improves clarity by adding contextual cues directly inside the input field.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const TextFieldWithPrefixSuffix = () => {
  const [text, setText] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <label htmlFor="text-field-prefix-suffix">
        Amount:
      </label>
      <div className="text-area">
        <span>$</span>
        {/* Prefix */}
        <input
          id="text-field-prefix-suffix"
          type="number"
          value={text}
          onChange={handleChange}
          placeholder="Enter amount"
        />
        <span>USD</span>
        {/* Suffix */}
      </div>
      <p>
        You entered: {text ? \`$\${text} USD\` : "nothing yet"}
      </p>
    </div>
  );
};`,
        "app.css": `.container {
  padding: 20px;
  max-width: 400px;
  margin: auto;
}
  
label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}
  
.text-area {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  background-color: #f9f9f9;
}
  
span {
  margin-right: 5px;
  color: #555;
}
  
input[type="number"] {
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 16px;
}
  
p {
  margin-top: 10px;
}`,
      },
      open: false,
    },
    {
      component: <PasswordField />,
      description:
        "A secure text field for entering passwords, with a toggle to show or hide the input.",
      id: "password",
      title: "Password Text Field(Input)",
      usages:
        "Used for securely capturing sensitive information like passwords or PINs.",
      purpose:
        "Ensures privacy while giving users the flexibility to verify their input.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const PasswordField = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <label htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <button onClick={togglePasswordVisibility}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};`,
        "app.css": `.container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
  
label {
  display: block;
  margin-bottom: 8px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
  
button {
  position: absolute;
  right: 4px;
  top: 50%;
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
}`,
      },
      open: false,
    },
    {
      component: <TextFieldWithValidation />,
      description: "A text field that validates user input in real time.",
      id: "validation",
      title: "Text Field(Input) with Validation",
      usages:
        "Useful for validating email formats, phone numbers, or other specific patterns.",
      purpose:
        "Guides users to input data in the correct format, reducing errors.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";

export const TextFieldWithValidation = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length < 5) {
      setError("Text must be at least 5 characters long.");
    } else {
      setError(null);
    }
    setText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length >= 5) {
      setSuccess("Form submitted successfully!");
    } else {
      setError("Text must be at least 5 characters long.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-field-validation">
          Enter Text:
        </label>
        <input
          id="text-field-validation"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
        />
        {error && <p className="error-p">{error}</p>}
        {success && (
          <p className="success-p">{success}</p>
        )}
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};`,
        "app.css": `.container {
  padding: 20px;
  max-width: 400px;
  margin: auto;
}
  
label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}
  
input[type="text"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  oultine: none;
}
  
button {
  margin-top: 10px;
}

.error-p {
  color: red;
  margin-top: 5px;
}

.success-p {
  color: green;
  margin-top: 5px;
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    // "Interactive Demo": "#demo",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Text Field(Input)": "#basic",
      "Multi-Line Text Field(Input)": "#multi",
      "Text Field(Input) with Prefix/Suffix": "#prefix-suffix",
      "Password Text Field(Input)": "#password",
      "Text Field(Input) with Validation": "#validation",
    },
    References: "#references",
  },
  references: {
    "Accessible Rich Internet Applications (ARIA)":
      "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",
    "Text Field Design Principles":
      "https://uxdesign.cc/designing-better-text-fields-best-practices-and-tips-85e22a717c4d",
    "Keyboard Accessibility Guidelines":
      "https://webaim.org/techniques/keyboard/",
  },
  previousNavigation: { title: "Slider", link: "/all-components/slider" },
  nextNavigation: {
    title: "Chips",
    link: "/all-components/chip",
  },
};

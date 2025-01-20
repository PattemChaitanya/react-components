// Convert the react component into string format to show in the code block.

import { isValidElement } from "react";
// import { renderToString } from "react-dom/server";

const convertReactToString = (component) => {
  console.log(component);
  // Handle null or undefined
  if (!component) {
    console.log("1");
    return "";
  }

  // Handle primitive values
  if (typeof component !== "object") {
    console.log("2");
    return String(component);
  }

  // Handle React elements
  if (isValidElement(component)) {
    const { type, props } = component;
    console.log("3");

    // Get component name
    const componentName =
      typeof type === "function" ? type.name || "Anonymous" : type;

    console.log(componentName, "3");

    // Convert props to string
    const propsString = Object.entries(props)
      .filter(([key]) => key !== "children")
      .map(([key, value]) => {
        // Handle different prop value types
        const propValue =
          typeof value === "string"
            ? `"${value}"`
            : typeof value === "function"
            ? value.name || "function()"
            : JSON.stringify(value);

        return `${key}={${propValue}}`;
      })
      .join(" ");

    // Handle children
    const children = props.children
      ? Array.isArray(props.children)
        ? props.children.map((child) => convertReactToString(child)).join("\n")
        : convertReactToString(props.children)
      : "";

    // Format the component string
    if (children) {
      return `<${componentName} ${propsString}>\n  ${children}\n</${componentName}>`;
    } else {
      return `<${componentName} ${propsString} />`;
    }
  }

  // Handle arrays
  if (Array.isArray(component)) {
    return component.map((item) => convertReactToString(item)).join("\n");
  }

  // Handle functional components
  if (typeof component === "function") {
    try {
      const rendered = component();
      return convertReactToString(rendered);
    } catch (e) {
      return `[Function ${component.name || "Anonymous"}]`;
    }
  }

  return String(component);
};

// Helper function to add code formatting

// const convertReactToString = (component) => {
//   return renderToString(component);
// };

const formatWithIndents = (htmlString) => {
  const lines = htmlString
    .replace(/></g, ">\n<") // Break tags into separate lines
    .split("\n");

  let indentLevel = 0;
  const indentedLines = lines.map((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("</")) {
      // Closing tag, reduce indent
      indentLevel = Math.max(indentLevel - 1, 0);
    }

    const indentedLine = "  ".repeat(indentLevel) + trimmedLine;

    if (
      trimmedLine.startsWith("<") &&
      !trimmedLine.startsWith("</") &&
      !trimmedLine.endsWith("/>")
    ) {
      // Opening tag, increase indent
      indentLevel += 1;
    }

    return indentedLine;
  });

  return indentedLines.join("\n");
};

const formatAsCodeBlock = (component) => {
  const stringVersion = convertReactToString(component);
  const formattedString = formatWithIndents(stringVersion);
  return formattedString;
};

export { convertReactToString, formatAsCodeBlock };

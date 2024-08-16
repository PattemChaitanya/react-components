import OutlinedButton from "./outlined-button";
import SimpleButton from "./simple-button";

export const jsonToPageDisplay = {
  pageTitle: "Buttons",
  description: "Variety of buttons",
  jsonToDisplay: [
    {
      title: "Simple button",
      subTitle: "Simple button",
      toDisplay: `import React from "react";

const SimpleButton = () => {
  const styles = {
    base: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      margin: "5px",
    },
    primary: {
      backgroundColor: "#007bff",
      color: "white",
    },
    disabled: {
      backgroundColor: "#e0e0e0",
      color: "#9e9e9e",
      cursor: "not-allowed",
    },
    success: {
      backgroundColor: "#28a745",
      color: "white",
    },
  };

  return (
    <div>
      <button style={{ ...styles.base, ...styles.primary }}>Primary</button>
      <button style={{ ...styles.base, ...styles.disabled }} disabled>
        Disabled
      </button>
      <button style={{ ...styles.base, ...styles.success }}>Success</button>
    </div>
  );
};

export default SimpleButton;
`,
      component: <SimpleButton />,
      open: false,
    },
    {
      title: "Outlined button",
      subTitle: "Outlined button",
      toDisplay: `import React from "react";

const OutlinedButton = () => {
  const styles = {
    base: {
      padding: "10px 15px",
      border: "2px solid",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      margin: "5px",
      backgroundColor: "transparent",
      transition: "all 0.3s ease",
    },
    primary: {
      borderColor: "#007bff",
      color: "#007bff",
      "&:hover": {
        backgroundColor: "#007bff",
        color: "#fff",
      },
    },
    secondary: {
      borderColor: "#6c757d",
      color: "#6c757d",
      "&:hover": {
        backgroundColor: "#6c757d",
        color: "#fff",
      },
    },
    danger: {
      borderColor: "#dc3545",
      color: "#dc3545",
      "&:hover": {
        backgroundColor: "#dc3545",
        color: "#fff",
      },
    },
    disabled: {
      borderColor: "#cccccc",
      color: "#cccccc",
      cursor: "not-allowed",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#cccccc",
      },
    },
  };

  return (
    <div>
      <button style={{ ...styles.base, ...styles.primary }}>Primary</button>
      <button style={{ ...styles.base, ...styles.secondary }}>Secondary</button>
      <button style={{ ...styles.base, ...styles.danger }}>Danger</button>
      <button style={{ ...styles.base, ...styles.disabled }} disabled>
        Disabled
      </button>
    </div>
  );
};

export default OutlinedButton;
`,
      component: <OutlinedButton />,
      open: false,
    },
  ],
};

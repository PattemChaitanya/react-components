import AvatarImage from "./avatar-image";
import AvatarLetter from "./avatar-letter";

export const jsonToPageDisplay = {
  pageTitle: "Avatar",
  description: "Variety of Avatar",
  jsonToDisplay: [
    {
      title: "Avatar with Image",
      subTitle: "Avatar with Image",
      component: <AvatarImage />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';

const Alert = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('info'); // info, success, warning, error

  const showAlert = (msg, alertType = 'info') => {
    setMessage(msg);
    setType(alertType);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000); // Alert will disappear after 3 seconds
  };

  const handleShowInfo = () => showAlert('This is an info alert.', 'info');
  const handleShowSuccess = () => showAlert('This is a success alert.', 'success');
  const handleShowWarning = () => showAlert('This is a warning alert.', 'warning');
  const handleShowError = () => showAlert('This is an error alert.', 'error');

  return (
    <div style={styles.container}>
      <div>
        <button style={styles.button} onClick={handleShowInfo}>Show Info</button>
        <button style={styles.button} onClick={handleShowSuccess}>Show Success</button>
        <button style={styles.button} onClick={handleShowWarning}>Show Warning</button>
        <button style={styles.button} onClick={handleShowError}>Show Error</button>
      </div>
      {visible && (
        <div style={{ ...styles.alert, ...styles[type] }}>
          {message}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  alert: {
    marginTop: '20px',
    padding: '15px',
    borderRadius: '5px',
    color: 'white',
    textAlign: 'center',
  },
  info: {
    backgroundColor: '#2196F3',
  },
  success: {
    backgroundColor: '#4CAF50',
  },
  warning: {
    backgroundColor: '#FF9800',
  },
  error: {
    backgroundColor: '#F44336',
  },
};

export default Alert;
    `,
    },
    {
      title: "Avatar with letters",
      subTitle: "Avatar with letters",
      component: <AvatarLetter />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';

const Alert = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('info'); // info, success, warning, error

  const showAlert = (msg, alertType = 'info') => {
    setMessage(msg);
    setType(alertType);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000); // Alert will disappear after 3 seconds
  };

  const handleShowInfo = () => showAlert('This is an info alert.', 'info');
  const handleShowSuccess = () => showAlert('This is a success alert.', 'success');
  const handleShowWarning = () => showAlert('This is a warning alert.', 'warning');
  const handleShowError = () => showAlert('This is an error alert.', 'error');

  return (
    <div style={styles.container}>
      <div>
        <button style={styles.button} onClick={handleShowInfo}>Show Info</button>
        <button style={styles.button} onClick={handleShowSuccess}>Show Success</button>
        <button style={styles.button} onClick={handleShowWarning}>Show Warning</button>
        <button style={styles.button} onClick={handleShowError}>Show Error</button>
      </div>
      {visible && (
        <div style={{ ...styles.alert, ...styles[type] }}>
          {message}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  alert: {
    marginTop: '20px',
    padding: '15px',
    borderRadius: '5px',
    color: 'white',
    textAlign: 'center',
  },
  info: {
    backgroundColor: '#2196F3',
  },
  success: {
    backgroundColor: '#4CAF50',
  },
  warning: {
    backgroundColor: '#FF9800',
  },
  error: {
    backgroundColor: '#F44336',
  },
};

export default Alert;
    `,
    },
  ],
};

export const avatarData = {
  seoTitle: "Design Avatar Component Guide",
  seoDescription:
    "Learn how to implement Design Avatars with examples, accessibility tips, and customization options for user profiles and more.",
  seoKeywords: [
    "Design Avatar",
    "Avatar UI Component",
    "Circular Avatar",
    "Profile Picture UI",
  ],
  pageTitle: "Avatar",
  pageDescription: [
    "Avatars are circular representations of images, text, or icons used to represent a user or entity.",
    "They are commonly used in user profiles, lists, or as part of interactive UI elements like menus.",
  ],
  pageImage: "https://material-web.dev/components/images/avatar/hero.webp",
  types: ["Image Avatar", "Text Avatar", "Icon Avatar", "Grouped Avatar"],
  interactiveDemo: "https://material-web.dev/components/avatar",
  accessibity:
    "Ensure avatars are accessible by using `alt` attributes for images and `aria-label` for icon-based avatars. For decorative avatars, add `role='img'` with a descriptive `aria-label` to provide context to screen readers.",
  examples: [
    {
      id: "image-avatar",
      title: "Image Avatar",
      description: "A simple avatar displaying a user’s profile picture.",
      usages:
        "Use when a user’s profile picture or identifiable image is available.",
      purpose:
        "Provides a personal touch, making it easy for users to recognize profiles.",
      component: "Image Avatar",
      codeBlock: `
<img class="avatar" src="https://example.com/user.jpg" alt="User Profile Picture">
`,
      open: false,
    },
    {
      id: "text-avatar",
      title: "Text Avatar",
      description:
        "An avatar with the user’s initials as a fallback for when no profile picture is available.",
      usages:
        "Use when an image isn't available but the user's name or initials can represent them.",
      purpose:
        "Ensures avatars remain functional and visually consistent, even without images.",
      component: "Text Avatar",
      codeBlock: `
<div class="avatar text-avatar" role="img" aria-label="John Doe">JD</div>
`,
      open: false,
    },
    {
      id: "icon-avatar",
      title: "Icon Avatar",
      description: "An avatar with an icon as a placeholder.",
      usages:
        "Use for placeholders or when representing non-user entities, like system notifications.",
      purpose:
        "Provides a consistent, recognizable visual element without requiring user-specific content.",
      component: "Icon Avatar",
      codeBlock: `
<div class="avatar icon-avatar" role="img" aria-label="Default User">
  <span class="material-icons">person</span>
</div>
`,
      open: false,
    },
    {
      id: "grouped-avatar",
      title: "Grouped Avatar",
      description: "A set of avatars displayed together, often overlapping.",
      usages:
        "Use to represent multiple users, such as members of a team or participants in a group chat.",
      purpose:
        "Indicates collaboration or a collective entity in a compact space.",
      component: "Grouped Avatar",
      codeBlock: `
<div class="grouped-avatar">
  <img class="avatar" src="https://example.com/user1.jpg" alt="User 1">
  <img class="avatar" src="https://example.com/user2.jpg" alt="User 2">
  <div class="avatar text-avatar" role="img" aria-label="John Doe">+3</div>
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
      "Image Avatar Example": "#image-avatar",
      "Text Avatar Example": "#text-avatar",
      "Icon Avatar Example": "#icon-avatar",
      "Grouped Avatar Example": "#grouped-avatar",
    },
    References: "#references",
  },
  references: {
    "Material Design Guidelines for Avatars":
      "https://m3.material.io/components/avatar",
    "ARIA Roles for Decorative Images":
      "https://www.w3.org/WAI/tutorials/images/decorative/",
    "Material Icons": "https://fonts.google.com/icons",
  },
};

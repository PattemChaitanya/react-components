import {
  GroupedAvatar,
  IconAvatar,
  ImageAvatar,
  TextAvatar,
} from "./avatar-component";
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
  pageImage: "",
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
      component: <ImageAvatar />,
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";
import Flower1 from "../../assets/mansoryImages/1.jpg";
import Flower2 from "../../assets/mansoryImages/2.jpg";
import Flower3 from "../../assets/mansoryImages/3.jpg";

export const ImageAvatar = ({ alt = "component", size = "40px" }) => {
  return (
    <div className="container">
      {[Flower1, Flower2, Flower3].map((item) => (
        <img
          src={item}
          alt={alt}
          className="image"
          style={{
            width: size,
            height: size,
          }}
          aria-label={alt}
        />
      ))}
    </div>
  );
};`,
        "app.css": `.container {
  display: flex;
  gap: 40px;
};

.image {
  border-radius: 50%;
  object-fit: cover;
}`,
      },
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
      component: <TextAvatar />,
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";

export const TextAvatar = () => {
  return (
    <div className="container">
      {[..."Design"].map((letter, index) => (
        <span key={index} className="letter-avatar">
          {letter}
        </span>
      ))}
    </div>
  );
};`,
        "app.css": `.container {
  display: flex;
  gap: 30px;
};

.letter-avatar {
  border-radius: 50%;
  object-fit: cover;
  color: var(--color-surface-container);
  background-color: var(--color-on-background);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: upperCase;
  width: 50px;
  height: 50px;
  font-weight: 600;
  transition: 0.5s color ease-in-out, 0.5s background-color ease-in-out;
}`,
      },
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
      component: <IconAvatar />,
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";
import { SettingsRounded, SearchRounded } from "@mui/icons-material";

export const IconAvatar = ({ icon, size = "40px" }) => {
  return (
    <div className="container">
      {[SettingsRounded, SearchRounded].map((IconComponent, index) => (
        <IconComponent
          key={index}
          style={{
            width: size,
            height: size,
          }}
          className="icon-component"
        />
      ))}
    </div>
  );
};`,
        "app.css": `.container {
  display: flex;
  gap: 40px;
};

.icon-component {
  border-radius: 50%;
  object-fit: cover;
}`,
      },
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
      component: <GroupedAvatar />,
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";

export const GroupedAvatar = ({ size = "40px" }) => {
  let images = [Flower1, Flower3, Flower2];

  return (
    <div style={{ display: "flex" }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Avatar"
          style={{
            width: size,
            height: size,
            marginLeft: index === 0 ? 0 : "-20px",
          }}
            className="image"
          aria-label="Avatar"
        />
      ))}
    </div>
  );
};`,
        "app.css": `.container {
  display: "flex",
};

.image {
  border-radius: 50%;
  object-fit: cover;
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Image Avatar": "#image-avatar",
      "Text Avatar": "#text-avatar",
      "Icon Avatar": "#icon-avatar",
      "Grouped Avatar": "#grouped-avatar",
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

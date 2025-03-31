import React from 'react';

/**
 * SkipLink Component - Allows keyboard users to skip navigation and go straight to main content
 * @param {Object} props - Component props
 * @param {string} props.targetId - ID of the element to skip to
 * @param {string} [props.text="Skip to main content"] - Link text
 * @param {string} [props.className="skip-link"] - CSS class for the link
 */
const SkipLink = ({ targetId, text = "Skip to main content", className = "skip-link" }) => {
  return (
    <a 
      href={`#${targetId}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus();
          // Remove tabindex after focus to prevent tabbing issues
          setTimeout(() => targetElement.removeAttribute('tabindex'), 1000);
        }
      }}
    >
      {text}
    </a>
  );
};

export default SkipLink; 
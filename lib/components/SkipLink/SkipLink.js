import React from 'react';
import PropTypes from 'prop-types';

/**
 * SkipLink component for accessibility - allows keyboard users to skip to main content
 */
const SkipLink = ({ mainContentId = 'main-content', className = '', children = 'Skip to main content' }) => {
  return (
    <a 
      href={`#${mainContentId}`} 
      className={`skip-link ${className}`}
    >
      {children}
    </a>
  );
};

SkipLink.propTypes = {
  /**
   * ID of the main content element to skip to
   */
  mainContentId: PropTypes.string,
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
  /**
   * Link text content
   */
  children: PropTypes.node
};

export default SkipLink; 
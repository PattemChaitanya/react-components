import React, { useState } from 'react';
import './NewComponent.css'; // Component-specific styles

const NewComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="content-container">
      {/* Using a mix of common and component-specific styles */}
      <h2 className="text-center component-title">Component Title</h2>
      
      <div className="card component-card">
        <p>This component uses both common styles from index.css and component-specific styles from NewComponent.css</p>
        
        <div className="flex-row justify-between align-center gap-md">
          <div className={`component-status ${isActive ? 'component-status-active' : ''}`}>
            {isActive ? 'Active' : 'Inactive'}
          </div>
          
          <button 
            className="btn btn-primary" 
            onClick={toggleActive}
          >
            Toggle Status
          </button>
        </div>
      </div>
      
      <div className="component-actions flex-row justify-center gap-md">
        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default NewComponent; 
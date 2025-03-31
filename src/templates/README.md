# Component Templates

This directory contains templates to help you create new components following the project's balanced styling approach.

## Balanced Styling Approach

Our project uses a balanced approach to CSS:

1. **Common styles** from index.css provide consistency, layout patterns, and reusable UI elements
2. **Component-specific styles** allow for specialized behaviors, animations, and visual treatments

## How to Use These Templates

### Creating a New Component

1. Copy the `component-template` directory to your target location
2. Rename both files to match your component name (`MyComponent.js` and `MyComponent.css`)
3. Update the import path in the JS file: `import './MyComponent.css'`
4. Modify the component according to your requirements

### Styling Guidelines

When styling your component:

1. **Always use common styles first** for layout, spacing, and basic UI elements
   ```jsx
   <div className="content-container">
     <h2 className="text-center">My Title</h2>
   </div>
   ```

2. **Add component-specific classes** only for unique behaviors or styles
   ```jsx
   <div className="content-container my-special-container">
     <h2 className="text-center my-title">My Title</h2>
   </div>
   ```

3. **Only add CSS rules to your component CSS file** for styles that aren't covered by common styles
   ```css
   /* In MyComponent.css */
   .my-special-container {
     /* Only add rules that aren't covered by content-container */
   }
   
   .my-title {
     /* Only add rules that aren't covered by text-center */
   }
   ```

## Example Structure

```jsx
import React from 'react';
import './MyComponent.css';

const MyComponent = () => {
  return (
    <div className="content-container">
      {/* Common layout with component-specific title styling */}
      <h2 className="text-center my-component-title">Title</h2>
      
      {/* Common card with component-specific details */}
      <div className="card my-component-card">
        Content goes here
      </div>
      
      {/* Common layout utilities */}
      <div className="flex-row justify-between">
        <button className="btn btn-primary">Primary Action</button>
        <button className="btn btn-secondary">Secondary Action</button>
      </div>
    </div>
  );
};

export default MyComponent;
```

See the `NewComponent.js` and `NewComponent.css` files for a complete example. 
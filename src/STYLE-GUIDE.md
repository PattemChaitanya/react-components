# Component Style Guide

This document outlines the styling approach in our application. We use a balanced mix of common (global) styles and component-specific styles to maintain consistency while allowing for component-specific customization.

## CSS Organization

Our CSS is organized into two main categories:

1. **Common Styles (index.css)**: These styles provide a consistent foundation for all components, including reusable UI patterns, layout utilities, and base design elements.

2. **Component-Specific Styles (component.css)**: These styles are unique to particular components or component families, including specialized behaviors, animations, and visual treatments.

### When to Use Common Styles

Use common styles for:
- Basic layout structures
- Common UI elements that appear throughout the application
- Design system foundations (colors, typography, spacing)
- Reusable patterns that should remain consistent across components

### When to Use Component-Specific Styles

Use component-specific styles for:
- Specialized behaviors unique to a component
- Custom animations
- Component-specific visual treatments
- Modifications to common styles that only apply to a specific component

## Form Controls

### Inputs

```html
<input type="text" className="form-input" placeholder="Enter text..." />
```

### Form Groups

```html
<div className="form-group">
  <label className="form-label">Username</label>
  <input type="text" className="form-input" />
</div>
```

### Form Rows (horizontal layout)

```html
<div className="form-row">
  <input type="text" className="form-input" />
  <button className="btn btn-primary">Submit</button>
</div>
```

## Buttons

### Basic Button

```html
<button className="btn">Default Button</button>
```

### Button Variants

```html
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-danger">Danger</button>
```

## Containers

### Content Container

For general content blocks with consistent padding and styling:

```html
<div className="content-container">
  <h2>Container Title</h2>
  <p>Container content...</p>
</div>
```

### Card

For card-like UI elements:

```html
<div className="card">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>
```

## Lists

### List Container

```html
<ul className="list-container">
  <li className="list-item">Item 1</li>
  <li className="list-item">Item 2</li>
  <li className="list-item">Item 3</li>
</ul>
```

## Dropdowns

```html
<div className="dropdown">
  <button className="dropdown-toggle">Select an option</button>
  <div className="dropdown-menu">
    <div className="dropdown-item">Option 1</div>
    <div className="dropdown-item">Option 2</div>
    <div className="dropdown-item">Option 3</div>
  </div>
</div>
```

## Layout Utilities

### Flex Layouts

```html
<!-- Row with space between items and centered vertically -->
<div className="flex-row justify-between align-center">
  <div>Left content</div>
  <div>Right content</div>
</div>

<!-- Column with items centered horizontally -->
<div className="flex-column justify-center">
  <div>Top content</div>
  <div>Bottom content</div>
</div>
```

### Spacing

```html
<div className="gap-sm">Small gap (5px)</div>
<div className="gap-md">Medium gap (10px)</div>
<div className="gap-lg">Large gap (20px)</div>
```

### Text Alignment

```html
<h2 className="text-center">Centered Heading</h2>
```

## Custom Form Controls

### Checkbox

```html
<label className="custom-control custom-checkbox">
  <input type="checkbox" className="custom-control-input" />
  <span className="custom-control-indicator"></span>
  <span>Checkbox label</span>
</label>
```

### Radio Button

```html
<label className="custom-control custom-radio">
  <input type="radio" className="custom-control-input" name="radioGroup" />
  <span className="custom-control-indicator"></span>
  <span>Radio label</span>
</label>
```

## Combining Common and Component-Specific Styles

You can combine common styles with component-specific styles:

```html
<!-- Using both common and component-specific classes -->
<div className="content-container">
  <h2 className="text-center basic-todo-heading">Todo List</h2>
  
  <ul className="list-container todo-list-container">
    <li className="list-item todo-item completed">
      Task that's completed
    </li>
  </ul>
</div>
```

## Best Practices

1. **Prioritize common styles** for basic layout and UI patterns
2. **Only create component-specific styles** when needed for unique behaviors
3. **Avoid duplication** by leveraging common styles as much as possible
4. **Document component-specific styles** with clear comments
5. **Use CSS variables** for theming and consistent values
6. **Create meaningful class names** that describe purpose rather than appearance
7. **Group related styles** in component CSS files
8. **Keep specificity low** by using simple selectors when possible 
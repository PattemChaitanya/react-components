# Style Guide

This document outlines the styling approach in the JSX to Web component library. We use a balanced mix of common (global) styles and component-specific styles to maintain consistency while allowing for component-specific customization.

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

## Component Style Examples

### Form Controls

#### Inputs

```html
<input type="text" className="form-input" placeholder="Enter text..." />
```

#### Form Groups

```html
<div className="form-group">
  <label className="form-label">Username</label>
  <input type="text" className="form-input" />
</div>
```

#### Form Rows (horizontal layout)

```html
<div className="form-row">
  <input type="text" className="form-input" />
  <button className="btn btn-primary">Submit</button>
</div>
```

### Buttons

#### Basic Button

```html
<button className="btn">Default Button</button>
```

#### Button Variants

```html
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-danger">Danger</button>
```

### Containers

#### Content Container

For general content blocks with consistent padding and styling:

```html
<div className="content-container">
  <h2>Container Title</h2>
  <p>Container content...</p>
</div>
```

#### Card

For card-like UI elements:

```html
<div className="card">
  <h3>Card Title</h3>
  <p>Card content...</p>
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

## Best Practices

1. **Prioritize common styles** for basic layout and UI patterns
2. **Only create component-specific styles** when needed for unique behaviors
3. **Avoid duplication** by leveraging common styles as much as possible
4. **Document component-specific styles** with clear comments
5. **Use CSS variables** for theming and consistent values
6. **Create meaningful class names** that describe purpose rather than appearance
7. **Group related styles** in component CSS files
8. **Keep specificity low** by using simple selectors when possible 
# API Reference

This document provides a comprehensive API reference for the JSX to Web component library.

## Contents

- [Basic Components](#basic-components)
- [Form Elements](#form-elements)
- [Layout Components](#layout-components)
- [Interactive Components](#interactive-components)

## Basic Components

### Button

A customizable button component with multiple variants.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `string` | `'default'` | Button style variant: `'default'`, `'primary'`, `'secondary'`, `'danger'` |
| `size` | `string` | `'medium'` | Button size: `'small'`, `'medium'`, `'large'` |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `fullWidth` | `boolean` | `false` | Whether the button should take full width |
| `onClick` | `function` | - | Function called when button is clicked |
| `type` | `string` | `'button'` | Button type: `'button'`, `'submit'`, `'reset'` |
| `children` | `node` | - | Button content |

**Example:**
```jsx
<Button 
  variant="primary" 
  size="large" 
  onClick={() => console.log('Button clicked')}
>
  Click Me
</Button>
```

### Card

Container component for grouping related content.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title |
| `subtitle` | `string` | - | Card subtitle |
| `elevation` | `number` | `1` | Shadow depth (0-5) |
| `variant` | `string` | `'default'` | Card style variant: `'default'`, `'outlined'` |
| `children` | `node` | - | Card content |

**Example:**
```jsx
<Card 
  title="Card Title" 
  subtitle="Card Subtitle" 
  elevation={2}
>
  <p>Card content goes here</p>
</Card>
```

## Form Elements

### Checkbox

Selectable checkbox component.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `label` | `string` | - | Label text for the checkbox |
| `name` | `string` | - | Name attribute for the checkbox input |
| `onChange` | `function` | - | Function called when checkbox state changes |

**Example:**
```jsx
<Checkbox 
  label="Remember me" 
  checked={isChecked} 
  onChange={(e) => setIsChecked(e.target.checked)} 
/>
```

### TextField

Text input component.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | Input type |
| `value` | `string` | - | Input value |
| `placeholder` | `string` | - | Placeholder text |
| `label` | `string` | - | Label for the input |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `error` | `boolean` | `false` | Whether the input has an error |
| `helperText` | `string` | - | Helper text to display |
| `onChange` | `function` | - | Function called when input value changes |

**Example:**
```jsx
<TextField 
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>
```

## Layout Components

### Accordion

Expandable content panels.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Accordion header title |
| `expanded` | `boolean` | `false` | Whether the accordion is expanded |
| `onChange` | `function` | - | Function called when accordion state changes |
| `children` | `node` | - | Accordion content |

**Example:**
```jsx
<Accordion 
  title="Section 1" 
  expanded={expanded}
  onChange={() => setExpanded(!expanded)}
>
  <p>Content for section 1</p>
</Accordion>
```

## Interactive Components

### Todo List

Task management component.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `array` | `[]` | Array of todo items with shape `{ id, text, completed }` |
| `onToggle` | `function` | - | Function called when item is toggled |
| `onDelete` | `function` | - | Function called when item is deleted |
| `onAdd` | `function` | - | Function called when new item is added |

**Example:**
```jsx
<TodoList 
  items={todoItems} 
  onToggle={(id) => toggleTodo(id)}
  onDelete={(id) => deleteTodo(id)}
  onAdd={(text) => addTodo(text)}
/>
```

### Drag and Drop

Component for drag-and-drop functionality.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `array` | `[]` | Array of draggable items |
| `onDragEnd` | `function` | - | Function called when drag operation ends |
| `renderItem` | `function` | - | Render function for each item |

**Example:**
```jsx
<DragAndDrop
  items={items}
  onDragEnd={handleDragEnd}
  renderItem={(item, index) => (
    <div>{item.content}</div>
  )}
/>
``` 
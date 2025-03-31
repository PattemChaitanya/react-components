# Components

JSX to Web provides a wide range of ready-to-use UI components inspired by Google Material Design. This document provides an overview of all available components, their usage, and examples.

## Components List

### Layout Components

- [Accordion](#accordion)
- [Cards](#cards)
- [Container](#container)
- [Drawer](#drawer)
- [Footer](#footer)
- [Navbar](#navbar)
- [Responsive Layout](#responsive-layout)
- [Sidebar](#sidebar)
- [Table](#table)
- [Tabs](#tabs)

### Form Elements

- [Button](#button)
- [Button Group](#button-group)
- [Checkbox](#checkbox)
- [Datepicker](#datepicker)
- [Dropdown](#dropdown)
- [Icon Button](#icon-button)
- [Radio Button](#radio-button)
- [Select Box](#select-box)
- [Slider](#slider)
- [Switch](#switch)
- [Text Field](#text-field)

### UI Elements

- [Alert](#alert)
- [Avatar](#avatar)
- [Badge](#badge)
- [Banner](#banner)
- [Breadcrumbs](#breadcrumbs)
- [Chips](#chips)
- [Fab (Floating Action Button)](#fab)
- [Images](#images)
- [Lists](#lists)
- [Menu](#menu)
- [Top Navigation](#top-navigation)
- [Bottom Navigation](#bottom-navigation)

### Interactive Components

- [Carousel](#carousel)
- [Chat Bubble](#chat-bubble)
- [Clipboard](#clipboard)
- [Drag and Drop](#drag-and-drop)
- [Gallery](#gallery)
- [Todo List](#todo-list)

## Component Details

### Accordion

Expandable panels that can be toggled to reveal content.

**Usage:**
```jsx
<Accordion title="Section 1">
  <p>Content for section 1</p>
</Accordion>
```

### Button

Standard button with various styles and states.

**Usage:**
```jsx
<Button variant="primary">Click Me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
```

### Todo List

Interactive todo list component with task management.

**Usage:**
```jsx
<TodoList 
  items={[
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build an app', completed: false }
  ]}
/>
```

### Drag and Drop

Component for implementing drag and drop functionality.

**Usage:**
```jsx
<DragDropContext onDragEnd={handleDragEnd}>
  <Droppable droppableId="items">
    {(provided) => (
      <div ref={provided.innerRef} {...provided.droppableProps}>
        {items.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {item.content}
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>
```

## Component Props

For detailed API documentation of each component, refer to the [API Reference](./api-reference.md) section.

## Best Practices

1. **Consistency** - Use components consistently throughout your application
2. **Accessibility** - Ensure all components have proper ARIA attributes
3. **Responsiveness** - Use responsive components that adapt to different screen sizes
4. **Theming** - Utilize the theming system for consistent styling 
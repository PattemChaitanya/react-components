import AdvancedTodoList from "./advanced-todo";
import BasicTodo from "./basic-todo";
import TodoList from "./todoList";

export const jsonToPageDisplay = {
  pageTitle: "Todo",
  description: "Variety of Todo",
  jsonToDisplay: [
    {
      component: <TodoList />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
      />
      <button onClick={addTask} style={{ marginTop: '10px', width: '100%', padding: '8px' }}>
        Add Task
      </button>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {tasks.map(task => (
          <li key={task.id} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} style={{ float: 'right' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
`,
    },
  ],
};

export const todoData = {
  seoTitle: "Design To-Do List Component Guide",
  seoDescription:
    "Create efficient to-do lists with Design principles, featuring interactive checkboxes, categories, and filters for task management.",
  seoKeywords: [
    "Design To-Do List",
    "Task Manager UI",
    "Interactive To-Do",
    "Frontend To-Do Component",
  ],
  pageTitle: "To-Do List",
  pageDescription: [
    "To-Do Lists help users track tasks efficiently, offering simple or advanced features like categories and filters.",
    "Design emphasizes intuitive and interactive UI for productivity tools like to-do lists.",
  ],
  pageImage: "https://material-web.dev/components/images/todo/hero.webp",
  types: ["Basic To-Do List", "Advanced To-Do List"],
  interactiveDemo: "",
  accessibity:
    "Ensure to-do lists are accessible by supporting keyboard navigation, ARIA roles like `aria-checked` for tasks, and labels for checkboxes.",
  examples: [
    {
      id: "basic-todo-list",
      title: "Basic To-Do List",
      description:
        "A straightforward to-do list with add, mark complete, and delete functionality.",
      usages: "Use for simple task tracking without advanced categorization.",
      purpose: "Enables users to manage tasks quickly with minimal setup.",
      component: <BasicTodo />,
      codeBlock: `
<div class="todo">
  <h3>My Tasks</h3>
  <ul class="todo-list">
    <li>
      <label>
        <input type="checkbox"> Buy groceries
      </label>
      <button class="delete-btn" aria-label="Delete Task">✖</button>
    </li>
    <li>
      <label>
        <input type="checkbox"> Finish project report
      </label>
      <button class="delete-btn" aria-label="Delete Task">✖</button>
    </li>
  </ul>
  <div class="todo-input">
    <input type="text" placeholder="Add a new task" aria-label="Add new task">
    <button>Add</button>
  </div>
</div>
`,
      open: false,
    },
    {
      component: <AdvancedTodoList />,
      description:
        "A to-do list with categories, due dates, and filters for organizing tasks effectively.",
      id: "advanced-todo-list",
      title: "Advanced To-Do List",
      usages:
        "Use for task management apps or when detailed task tracking is needed.",
      purpose:
        "Helps users organize and prioritize tasks with advanced features.",
      codeBlock: `
<div class="todo-advanced">
  <h3>My Tasks</h3>
  <div class="filters">
    <button data-filter="all" class="active">All</button>
    <button data-filter="work">Work</button>
    <button data-filter="personal">Personal</button>
  </div>
  <ul class="todo-list">
    <li data-category="work">
      <label>
        <input type="checkbox"> Complete presentation
      </label>
      <span class="due-date">Due: Jan 15</span>
      <button class="delete-btn" aria-label="Delete Task">✖</button>
    </li>
    <li data-category="personal">
      <label>
        <input type="checkbox"> Call the plumber
      </label>
      <span class="due-date">Due: Jan 14</span>
      <button class="delete-btn" aria-label="Delete Task">✖</button>
    </li>
  </ul>
  <div class="todo-input">
    <input type="text" placeholder="Add a new task" aria-label="Add new task">
    <select>
      <option value="work">Work</option>
      <option value="personal">Personal</option>
    </select>
    <button>Add</button>
  </div>
</div>
`,
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Basic To-Do List": "#basic-todo-list",
      "Advanced To-Do List": "#advanced-todo-list",
    },
    References: "#references",
  },
  references: {
    "Material Design To-Do Guidelines": "https://m3.material.io/design/todo/",
    "ARIA Roles for To-Do List Accessibility":
      "https://www.w3.org/WAI/tutorials/forms/",
    "Interactive Lists with Material Design":
      "https://developer.mozilla.org/en-US/docs/Web/CSS/Interactive_lists",
  },
};

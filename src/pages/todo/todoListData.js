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
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
import "./app.css";
        
export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
        
  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };
        
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
        
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
        
  return (
    <div className="todo-container">
      <h1 className="basic-h1">To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`,
        "app.css": `.todo-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}

.basic-h1 {
  text-align: center;
  color: #333;
}

.todo-input {
  display: flex;
  gap: 10px;
}

.todo-input input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.todo-input button {
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-input button:hover {
  background: #0056b3;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin-top: 15px;
  height: 220px;
  overflow: auto;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.todo-list li:hover {
  background: #e9e9e9;
}

.todo-list li.completed span {
  text-decoration: line-through;
  color: #888;
}

.todo-list button {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.todo-list button:hover {
  background: #d93636;
}`,
      },
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
      codeBlock: {
        "app.jsx": `import React, { useState, useRef } from "react";
import "./app.css";
      
export const App = () => {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Learn React", completed: false },
    { id: "2", text: "Build a To-Do List", completed: false },
    { id: "3", text: "Master Native Drag & Drop", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
      
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
      
  const handleDragStart = (index) => {
    dragItem.current = index;
  };
      
  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };
      
  const handleDragEnd = () => {
    const updatedTasks = [...tasks];
    const draggedItem = updatedTasks.splice(dragItem.current, 1)[0];
    updatedTasks.splice(dragOverItem.current, 0, draggedItem);
      
    setTasks(updatedTasks);
    dragItem.current = null;
    dragOverItem.current = null;
  };
      
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
      
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };
      
  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };
      
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
      
  return (
    <div className="todo-container">
      <h2 className="advanced-h2">Advanced To-Do List</h2>
      
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a new task..."
          aria-label="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
            className={\`todo-item \${task.completed ? "completed" : ""}\`}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleComplete(task.id)}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              aria-label={\`Mark \${task.text} as completed\`}
            />
            <span>{task.text}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`,
        "app.css": `.advanced-h2 {
  text-align: center;
  color: #333;
  margin-bottom: 15px;
}

.add-task {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.add-task input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

.add-task input:focus {
  border-color: #007bff;
}

.add-task button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-task button:hover {
  background-color: #0056b3;
}

.todo-item {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: grab;
  transition: transform 0.2s, background 0.3s;
}

.todo-item:active {
  background: #e3e3e3;
  transform: scale(0.98);
  cursor: grabbing;
}

.todo-item:hover {
  background: #f9f9f9;
}

.completed span {
  text-decoration: line-through;
  color: gray;
}

input[type="checkbox"] {
  margin-right: 10px;
  cursor: pointer;
}`,
      },
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

import React, { useState, useRef } from "react";
import "./todo.css";

const AdvancedTodoList = () => {
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
            className={`todo-item ${task.completed ? "completed" : ""}`}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleComplete(task.id)}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              aria-label={`Mark ${task.text} as completed`}
            />
            <span>{task.text}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvancedTodoList;

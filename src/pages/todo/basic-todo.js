import React, { useState, useRef } from "react";
import "./todo.css";
import SkipLink from "../../components/SkipLink";

const BasicTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [animatedTaskIndex, setAnimatedTaskIndex] = useState(null);
  const inputRef = useRef(null);

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
      
      // Announce new task to screen readers
      const statusAnnouncement = document.getElementById('basic-status-announcement');
      if (statusAnnouncement) {
        statusAnnouncement.textContent = `Added new task: ${input}`;
      }
      
      // Return focus to input after adding task
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const toggleComplete = (index) => {
    setAnimatedTaskIndex(index);
    setTimeout(() => setAnimatedTaskIndex(null), 800);
    
    const newTasks = [...tasks];
    const newStatus = !newTasks[index].completed;
    newTasks[index].completed = newStatus;
    setTasks(newTasks);
    
    // Announce status change to screen readers
    const statusAnnouncement = document.getElementById('basic-status-announcement');
    if (statusAnnouncement) {
      statusAnnouncement.textContent = `Task ${newTasks[index].text} marked as ${newStatus ? 'completed' : 'incomplete'}`;
    }
  };

  const handleDelete = (index) => {
    const taskText = tasks[index].text;
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    
    // Announce deletion to screen readers
    const statusAnnouncement = document.getElementById('basic-status-announcement');
    if (statusAnnouncement) {
      statusAnnouncement.textContent = `Deleted task: ${taskText}`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTask();
    }
  };

  // Function to handle keyboard navigation within task items
  const handleTaskKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleComplete(index);
    } else if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      handleDelete(index);
    }
  };

  return (
    <section className="content-container">
      <SkipLink targetId="basic-todo-heading" text="Skip to todo list" />
      
      <h1 id="basic-todo-heading" className="text-center basic-todo-heading">To-Do List</h1>
      
      {/* Accessibility announcement region (visually hidden) */}
      <div id="basic-status-announcement" className="sr-only" aria-live="polite" aria-atomic="true"></div>
      
      <form 
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
        aria-labelledby="basic-input-label"
      >
        <div className="form-row">
          <div className="todo-input-wrapper">
            <label id="basic-input-label" htmlFor="basic-task-input" className="sr-only">
              Add a new task
            </label>
            <input
              id="basic-task-input"
              type="text"
              className="form-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Add a new task..."
              required
              aria-label="New task text"
              ref={inputRef}
              autoComplete="off"
            />
          </div>
          <button 
            type="submit"
            className="btn btn-primary todo-button"
            aria-label="Add task"
          >
            Add
          </button>
        </div>
      </form>

      <div className="task-list-container">
        <h2 id="basic-task-list-heading" className="sr-only">Your tasks</h2>
        
        {tasks.length === 0 ? (
          <p className="empty-list-message" aria-live="polite" role="status">
            No tasks yet. Add one to get started!
          </p>
        ) : (
          <ul 
            className="list-container todo-list-container"
            aria-labelledby="basic-task-list-heading"
            role="list"
          >
            {tasks.map((task, index) => (
              <li 
                key={index} 
                className={`list-item todo-item ${task.completed ? "completed" : ""} ${animatedTaskIndex === index ? "task-complete-animation" : ""}`}
                tabIndex="0"
                role="listitem"
                aria-label={`${task.text}, ${task.completed ? 'completed' : 'not completed'}`}
                onKeyDown={(e) => handleTaskKeyDown(e, index)}
              >
                <div className="todo-content">
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      id={`basic-task-${index}`}
                      className="sr-only"
                      checked={task.completed}
                      onChange={() => toggleComplete(index)}
                      aria-label={`Mark ${task.text} as ${task.completed ? 'not completed' : 'completed'}`}
                    />
                    <label 
                      htmlFor={`basic-task-${index}`}
                      className="custom-checkbox"
                      onClick={() => toggleComplete(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleComplete(index);
                        }
                      }}
                    >
                      <span className="custom-control-indicator" aria-hidden="true"></span>
                      <span className={task.completed ? "task-text completed" : "task-text"}>
                        {task.text}
                      </span>
                    </label>
                  </div>
                </div>
                <button 
                  className="btn btn-danger todo-button" 
                  onClick={() => handleDelete(index)}
                  aria-label={`Delete task: ${task.text}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Keyboard help section (visually hidden) */}
      <div className="sr-only" id="keyboard-help">
        <h2>Keyboard shortcuts</h2>
        <p>Press Enter on a task to toggle completion</p>
        <p>Press Delete or Backspace on a task to delete it</p>
      </div>
    </section>
  );
};

export default BasicTodo;

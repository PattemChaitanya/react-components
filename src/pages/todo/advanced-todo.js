/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useRef } from "react";
import "./todo.css";
import SkipLink from "../../components/SkipLink";

const AdvancedTodoList = () => {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Learn React", completed: false },
    { id: "2", text: "Build a To-Do List", completed: false },
    { id: "3", text: "Master Native Drag & Drop", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [animatedTaskId, setAnimatedTaskId] = useState(null);
  const [dragMode, setDragMode] = useState(false);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const inputRef = useRef(null);
  const taskRefs = useRef({});

  const handleDragStart = (index, e) => {
    dragItem.current = index;
    // Set drag data for screen readers
    e.dataTransfer.setData('text/plain', tasks[index].text);
    // Announce drag start to screen readers
    const dragAnnouncement = document.getElementById('drag-announcement');
    if (dragAnnouncement) {
      dragAnnouncement.textContent = `Started dragging task ${tasks[index].text}`;
    }
    
    // Add dragMode visual indication
    setDragMode(true);
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const updatedTasks = [...tasks];
      const draggedItem = updatedTasks.splice(dragItem.current, 1)[0];
      updatedTasks.splice(dragOverItem.current, 0, draggedItem);
      setTasks(updatedTasks);
      
      // Announce drag completion to screen readers
      const dragAnnouncement = document.getElementById('drag-announcement');
      if (dragAnnouncement) {
        dragAnnouncement.textContent = `Moved task to position ${dragOverItem.current + 1}`;
      }
      
      // Set focus to the moved item
      setTimeout(() => {
        if (taskRefs.current[draggedItem.id]) {
          taskRefs.current[draggedItem.id].focus();
        }
      }, 0);
    }
    
    dragItem.current = null;
    dragOverItem.current = null;
    setDragMode(false);
  };

  const toggleComplete = (id) => {
    setAnimatedTaskId(id);
    setTimeout(() => setAnimatedTaskId(null), 800);
    
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const newStatus = !task.completed;
          // Announce status change to screen readers
          const statusAnnouncement = document.getElementById('status-announcement');
          if (statusAnnouncement) {
            statusAnnouncement.textContent = `Task ${task.text} marked as ${newStatus ? 'completed' : 'incomplete'}`;
          }
          return { ...task, completed: newStatus };
        }
        return task;
      })
    );
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = { 
        id: Date.now().toString(), 
        text: newTask, 
        completed: false 
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
      
      // Announce new task to screen readers
      const statusAnnouncement = document.getElementById('status-announcement');
      if (statusAnnouncement) {
        statusAnnouncement.textContent = `Added new task: ${newTask}`;
      }
      
      // Return focus to input
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  const handleDelete = (index, taskText) => {
    // const deletedTaskId = tasks[index].id;
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    
    // Determine where to move focus after deletion
    let focusIndex = index;
    if (focusIndex >= newTasks.length) {
      focusIndex = newTasks.length - 1;
    }
    
    // Announce deletion to screen readers
    const statusAnnouncement = document.getElementById('status-announcement');
    if (statusAnnouncement) {
      statusAnnouncement.textContent = `Deleted task: ${taskText}`;
    }
    
    // Set focus on the next item or the input if no items remain
    setTimeout(() => {
      if (newTasks.length === 0 && inputRef.current) {
        inputRef.current.focus();
      } else if (newTasks.length > 0 && focusIndex >= 0) {
        const focusId = newTasks[focusIndex].id;
        if (taskRefs.current[focusId]) {
          taskRefs.current[focusId].focus();
        }
      }
    }, 0);
  };

  // Function to handle keyboard navigation for reordering tasks
  const handleKeyboardReorder = (index, e) => {
    if (e.shiftKey) {
      if (e.key === "ArrowUp" && index > 0) {
        // Move task up
        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(index, 1);
        updatedTasks.splice(index - 1, 0, movedTask);
        setTasks(updatedTasks);
        e.preventDefault();
        
        // Announce movement to screen readers
        const statusAnnouncement = document.getElementById('status-announcement');
        if (statusAnnouncement) {
          statusAnnouncement.textContent = `Moved task ${movedTask.text} up one position`;
        }
        
        // Focus the moved task
        setTimeout(() => {
          if (taskRefs.current[movedTask.id]) {
            taskRefs.current[movedTask.id].focus();
          }
        }, 0);
      } else if (e.key === "ArrowDown" && index < tasks.length - 1) {
        // Move task down
        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(index, 1);
        updatedTasks.splice(index + 1, 0, movedTask);
        setTasks(updatedTasks);
        e.preventDefault();
        
        // Announce movement to screen readers
        const statusAnnouncement = document.getElementById('status-announcement');
        if (statusAnnouncement) {
          statusAnnouncement.textContent = `Moved task ${movedTask.text} down one position`;
        }
        
        // Focus the moved task
        setTimeout(() => {
          if (taskRefs.current[movedTask.id]) {
            taskRefs.current[movedTask.id].focus();
          }
        }, 0);
      }
    }
  };

  return (
    <section className="content-container">
      <SkipLink targetId="todo-heading" text="Skip to advanced todo list" />
      
      <h2 id="todo-heading" className="text-center">Advanced To-Do List</h2>
      
      {/* Accessibility announcement regions (visually hidden) */}
      <div id="status-announcement" className="sr-only" aria-live="polite" aria-atomic="true"></div>
      <div id="drag-announcement" className="sr-only" aria-live="assertive" aria-atomic="true"></div>
      
      <form 
        className="todo-form" 
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
        aria-labelledby="input-label"
      >
        <div className="form-row">
          <div className="todo-input-wrapper">
            <label id="input-label" htmlFor="new-task-input" className="sr-only">
              Add a new task
            </label>
            <input
              id="new-task-input"
              type="text"
              className="form-input"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Add a new task..."
              aria-label="New task text"
              ref={inputRef}
              autoComplete="off"
              required
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
        <h3 id="task-list-heading" className="sr-only">Your tasks</h3>
        <p id="drag-instructions" className="sr-only">
          Use shift plus up and down arrow keys to reorder tasks, or drag and drop with the mouse.
        </p>
        
        {tasks.length === 0 ? (
          <p className="empty-list-message" aria-live="polite" role="status">
            No tasks yet. Add one to get started!
          </p>
        ) : (
          <ul 
            className="list-container todo-list-container" 
            aria-labelledby="task-list-heading"
            aria-describedby="drag-instructions"
            role="list"
          >
            {tasks.map((task, index) => (
              <li
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(index, e)}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
                className={`list-item todo-item ${task.completed ? "completed" : ""} ${dragItem.current === index ? "dragging" : ""} ${animatedTaskId === task.id ? "task-complete-animation" : ""} ${dragMode ? "drag-mode" : ""}`}
                tabIndex="0"
                ref={el => taskRefs.current[task.id] = el}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleComplete(task.id);
                    e.preventDefault();
                  } else if (e.key === "Delete" || e.key === "Backspace") {
                    handleDelete(index, task.text);
                    e.preventDefault();
                  } else {
                    handleKeyboardReorder(index, e);
                  }
                }}
                role="listitem"
                aria-label={`${task.text}, ${task.completed ? 'completed' : 'not completed'}, item ${index + 1} of ${tasks.length}, drag to reorder`}
              >
                <div className="todo-content flex-row gap-sm">
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      id={`task-${task.id}`}
                      className="custom-control-input sr-only"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                      aria-label={`Mark ${task.text} as ${task.completed ? 'not completed' : 'completed'}`}
                    />
                    <label 
                      htmlFor={`task-${task.id}`} 
                      className="custom-checkbox" 
                      aria-hidden="true"
                    >
                      <span className="custom-control-indicator"></span>
                    </label>
                  </div>
                  <span 
                    className={task.completed ? "task-text completed" : "task-text"}
                    onClick={() => toggleComplete(task.id)}
                  >
                    {task.text}
                  </span>
                </div>
                <button 
                  className="btn btn-danger todo-button" 
                  onClick={() => handleDelete(index, task.text)}
                  aria-label={`Delete task: ${task.text}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="advanced-todo-controls">
        <p className="text-center help-text">
          <small>Drag and drop tasks to reorder or use Shift+↑/↓ with keyboard</small>
        </p>
      </div>
      
      {/* Keyboard help section (visually hidden) */}
      <div className="sr-only" id="advanced-keyboard-help">
        <h3>Keyboard shortcuts</h3>
        <ul>
          <li>Press Enter or Space on a task to toggle completion</li>
          <li>Press Delete or Backspace to delete a task</li>
          <li>Press Shift+Up Arrow to move a task up</li>
          <li>Press Shift+Down Arrow to move a task down</li>
        </ul>
      </div>
    </section>
  );
};

export default AdvancedTodoList;

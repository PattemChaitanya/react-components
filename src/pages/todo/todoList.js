import React, { useState, useRef } from 'react';
import './todo.css';
import SkipLink from "../../components/SkipLink";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [animatedTaskId, setAnimatedTaskId] = useState(null);
  
  const inputRef = useRef(null);
  const taskRefs = useRef({});

  const addTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    
    // Announce new task to screen readers
    const statusAnnouncement = document.getElementById('simple-status-announcement');
    if (statusAnnouncement) {
      statusAnnouncement.textContent = `Added new task: ${newTask}`;
    }
    
    // Return focus to input after adding task
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const removeTask = (taskId) => {
    const taskToRemove = tasks.find(task => task.id === taskId);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskToRemove) {
      const newTasks = tasks.filter(task => task.id !== taskId);
      setTasks(newTasks);
      
      // Determine where to move focus after deletion
      let focusIndex = taskIndex;
      if (focusIndex >= newTasks.length) {
        focusIndex = newTasks.length - 1;
      }
      
      // Announce deletion to screen readers
      const statusAnnouncement = document.getElementById('simple-status-announcement');
      if (statusAnnouncement) {
        statusAnnouncement.textContent = `Deleted task: ${taskToRemove.text}`;
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
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setAnimatedTaskId(taskId);
    setTimeout(() => setAnimatedTaskId(null), 800);
    
    setTasks(
      tasks.map(task => {
        if (task.id === taskId) {
          const newStatus = !task.completed;
          
          // Announce status change to screen readers
          const statusAnnouncement = document.getElementById('simple-status-announcement');
          if (statusAnnouncement) {
            statusAnnouncement.textContent = `Task ${task.text} marked as ${newStatus ? 'completed' : 'incomplete'}`;
          }
          
          return { ...task, completed: newStatus };
        }
        return task;
      })
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  };
  
  // Function to handle keyboard navigation within task items
  const handleTaskKeyDown = (e, taskId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTaskCompletion(taskId);
    } else if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      removeTask(taskId);
    }
  };

  return (
    <section className="content-container">
      <SkipLink targetId="simple-todo-heading" text="Skip to simple todo list" />
      
      <h2 id="simple-todo-heading" className="text-center basic-todo-heading">Simple Todo List</h2>
      
      {/* Accessibility announcement region (visually hidden) */}
      <div id="simple-status-announcement" className="sr-only" aria-live="polite" aria-atomic="true"></div>
      
      <form 
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
        aria-labelledby="simple-input-label"
      >
        <div className="form-group">
          <label id="simple-input-label" htmlFor="simple-task-input" className="sr-only">
            Add a new task
          </label>
          <div className="todo-input-wrapper">
            <input
              id="simple-task-input"
              type="text"
              className="form-input"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Add a new task"
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
            Add Task
          </button>
        </div>
      </form>
      
      <div className="task-list-container">
        <h3 id="simple-task-list-heading" className="sr-only">Your tasks</h3>
        
        {tasks.length === 0 ? (
          <p className="empty-list-message" aria-live="polite" role="status">
            Your todo list is empty. Add tasks to get started.
          </p>
        ) : (
          <ul 
            className="list-container todo-list-container"
            aria-labelledby="simple-task-list-heading"
            role="list"
          >
            {tasks.map(task => (
              <li 
                key={task.id} 
                className={`list-item todo-item ${task.completed ? "completed" : ""} ${animatedTaskId === task.id ? "task-complete-animation" : ""}`}
                tabIndex="0"
                role="listitem"
                aria-label={`${task.text}, ${task.completed ? 'completed' : 'not completed'}`}
                onKeyDown={(e) => handleTaskKeyDown(e, task.id)}
                ref={el => taskRefs.current[task.id] = el}
              >
                <div className="todo-content flex-row gap-sm">
                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      id={`simple-task-${task.id}`}
                      className="sr-only"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                      aria-label={`Mark ${task.text} as ${task.completed ? 'not completed' : 'completed'}`}
                    />
                    <label 
                      htmlFor={`simple-task-${task.id}`}
                      className="custom-checkbox"
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
                  onClick={() => removeTask(task.id)}
                  aria-label={`Delete task: ${task.text}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Keyboard help section (visually hidden) */}
      <div className="sr-only" id="simple-keyboard-help">
        <h3>Keyboard shortcuts</h3>
        <p>Press Enter or Space on a task to toggle completion</p>
        <p>Press Delete or Backspace on a task to delete it</p>
      </div>
    </section>
  );
};

export default TodoList;

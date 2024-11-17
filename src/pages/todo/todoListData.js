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

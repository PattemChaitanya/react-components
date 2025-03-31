# Usage Examples

This document provides real-world examples of using JSX to Web components in practical scenarios.

## Basic Form

A simple login form using multiple components:

```jsx
import React, { useState } from 'react';
import { 
  TextField, 
  Checkbox, 
  Button, 
  Card 
} from 'jsx-web-component';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, rememberMe });
  };
  
  return (
    <Card title="Login" elevation={3}>
      <form onSubmit={handleSubmit} className="form-container">
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        
        <Checkbox
          label="Remember me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        
        <Button 
          variant="primary" 
          type="submit" 
          fullWidth
        >
          Login
        </Button>
      </form>
    </Card>
  );
}

export default LoginForm;
```

## Todo Application

A complete todo application using multiple components:

```jsx
import React, { useState } from 'react';
import { 
  Card,
  TextField,
  Button,
  TodoList,
  Checkbox
} from 'jsx-web-component';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Deploy to production', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');
  
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    const newId = Math.max(...todos.map(t => t.id), 0) + 1;
    setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
    setNewTodo('');
  };
  
  const handleToggle = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <Card title="Todo Application" elevation={2}>
      <form onSubmit={handleAddTodo} className="form-row">
        <TextField
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <Button variant="primary" type="submit">Add</Button>
      </form>
      
      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
              label={todo.text}
            />
            <Button 
              variant="danger" 
              size="small"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
      
      <div className="todo-summary">
        <p>Total tasks: {todos.length}</p>
        <p>Completed: {todos.filter(t => t.completed).length}</p>
        <p>Remaining: {todos.filter(t => !t.completed).length}</p>
      </div>
    </Card>
  );
}

export default TodoApp;
```

## Dashboard Layout

An example of creating a dashboard layout with multiple components:

```jsx
import React from 'react';
import {
  Navbar,
  Sidebar,
  Card,
  Button,
  Table
} from 'jsx-web-component';

function Dashboard() {
  const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' }
  ];
  
  return (
    <div className="dashboard-container">
      <Navbar title="Admin Dashboard" />
      
      <div className="dashboard-content">
        <Sidebar 
          items={[
            { label: 'Dashboard', icon: 'dashboard', url: '/dashboard' },
            { label: 'Users', icon: 'people', url: '/users' },
            { label: 'Settings', icon: 'settings', url: '/settings' }
          ]} 
        />
        
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <Button variant="primary">Add New User</Button>
          </div>
          
          <div className="dashboard-stats">
            <Card title="Total Users" subtitle="3">
              <p>Current active users in the system</p>
            </Card>
            
            <Card title="Active Projects" subtitle="7">
              <p>Projects currently in progress</p>
            </Card>
            
            <Card title="Completed Tasks" subtitle="25">
              <p>Tasks completed this week</p>
            </Card>
          </div>
          
          <Card title="User Management">
            <Table
              headers={['ID', 'Name', 'Email', 'Role', 'Actions']}
              data={userData.map(user => [
                user.id,
                user.name,
                user.email,
                user.role,
                <div className="action-buttons">
                  <Button variant="secondary" size="small">Edit</Button>
                  <Button variant="danger" size="small">Delete</Button>
                </div>
              ])}
            />
          </Card>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
```

## Responsive Gallery

An example of a responsive image gallery:

```jsx
import React, { useState } from 'react';
import {
  Gallery,
  Modal,
  Button
} from 'jsx-web-component';

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { id: 1, src: '/images/photo1.jpg', alt: 'Nature', title: 'Beautiful Landscape' },
    { id: 2, src: '/images/photo2.jpg', alt: 'City', title: 'Urban Architecture' },
    { id: 3, src: '/images/photo3.jpg', alt: 'People', title: 'Street Photography' },
    { id: 4, src: '/images/photo4.jpg', alt: 'Abstract', title: 'Modern Art' },
    { id: 5, src: '/images/photo5.jpg', alt: 'Food', title: 'Culinary Delights' },
    { id: 6, src: '/images/photo6.jpg', alt: 'Travel', title: 'World Destinations' }
  ];
  
  return (
    <div className="gallery-container">
      <h1>Photo Gallery</h1>
      
      <Gallery
        items={images}
        columns={3}
        gap={16}
        onItemClick={(image) => setSelectedImage(image)}
        renderItem={(image) => (
          <div className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <div className="gallery-caption">{image.title}</div>
          </div>
        )}
      />
      
      {selectedImage && (
        <Modal
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage.title}
        >
          <div className="modal-content">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image" 
            />
            <p>{selectedImage.title}</p>
            <Button onClick={() => setSelectedImage(null)}>Close</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default PhotoGallery;
``` 
# Getting Started

This guide will help you get started with JSX to Web, a modern UI framework inspired by Google Material Design.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Install as a Project Dependency

```bash
npm install jsx-web-component
```

### Clone the Repository

If you want to contribute or explore the code:

```bash
git clone https://github.com/PattemChaitanya/react-components.git
cd react-components
npm install
```

## Usage

### Basic Usage

Import the components you need:

```jsx
import React from 'react';
import { Button, Card } from 'jsx-web-component';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <Card title="My Card">
        <p>Card content goes here</p>
      </Card>
    </div>
  );
}

export default App;
```

### Running the Demo

To run the development server and see the component examples:

```bash
npm start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── src/
│   ├── components/       # Core components
│   ├── pages/            # Component examples & documentation
│   ├── assets/           # Images and static files
│   ├── config/           # Configuration files
│   ├── constants/        # Constant values
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── templates/        # Component templates
└── public/               # Public assets
```

## Next Steps

- Explore the [Components](./components.md) documentation
- Learn about our [Style Guide](./style-guide.md)
- Check out [Examples](./examples.md) for practical usage scenarios 
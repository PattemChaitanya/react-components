import Dnd from "./dnd";
import { DraggableList, FileDropZone } from "./dnd-component";
import OneWayDrop from "./drop";
import Kanban from "./kanban";

export const jsonToPageDisplay = {
  pageTitle: "Drag and Drop",
  description: "Variety of Drag and Drop",
  jsonToDisplay: [
    {
      title: "Simple Drag and drop",
      subTitle: "Simple Drag and drop",
      component: <OneWayDrop />,
      toDisplay: `
import React, { useState } from 'react';

const OneWayDrop = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ]);

  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const item = items.find((item) => item.id === id);
    if (item) {
      setDroppedItems((prevItems) => [...prevItems, item]);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div>
        <h3>Draggable Items</h3>
        {items.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            style={{
              padding: '8px',
              margin: '4px',
              backgroundColor: 'white',
              border: '1px solid black',
              cursor: 'move',
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          padding: '16px',
          backgroundColor: 'lightgray',
          minHeight: '200px',
          border: '2px dashed black',
        }}
      >
        <h3>Droppable Area</h3>
        {droppedItems.map((item) => (
          <div
            key={item.id}
            style={{
              padding: '8px',
              border: '1px solid black',
              margin: '4px',
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneWayDrop;
`,
      open: false,
    },
    {
      title: "Kanban Drag and drop",
      subTitle: "Kanban Drag and drop",
      component: <Kanban />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';

const Kanban = () => {
  const initialColumns = {
    todo: [
      { id: '1', text: 'Item 1' },
      { id: '2', text: 'Item 2' },
    ],
    inProgress: [
      { id: '3', text: 'Item 3' },
      { id: '4', text: 'Item 4' },
    ],
    done: [
      { id: '5', text: 'Item 5' },
      { id: '6', text: 'Item 6' },
    ],
  };

  const [columns, setColumns] = useState(initialColumns);

  const handleDragStart = (e, item, sourceColumn) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ item, sourceColumn }));
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    const { item, sourceColumn } = JSON.parse(e.dataTransfer.getData('text/plain'));

    if (sourceColumn !== targetColumn) {
      setColumns((prevColumns) => {
        const sourceItems = prevColumns[sourceColumn].filter((i) => i.id !== item.id);
        const targetItems = [...prevColumns[targetColumn], item];

        return {
          ...prevColumns,
          [sourceColumn]: sourceItems,
          [targetColumn]: targetItems,
        };
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {Object.keys(columns).map((columnKey) => (
        <div key={columnKey} style={{ width: '30%', margin: '0 10px' }}>
          <h3>{columnKey.charAt(0).toUpperCase() + columnKey.slice(1)}</h3>
          <div
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, columnKey)}
            style={{
              minHeight: '200px',
              padding: '16px',
              backgroundColor: 'lightgray',
              border: '2px dashed black',
            }}
          >
            {columns[columnKey].map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item, columnKey)}
                style={{
                  padding: '8px',
                  margin: '4px',
                  backgroundColor: 'white',
                  border: '1px solid black',
                  cursor: 'move',
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kanban;

    `,
    },
    {
      title: "Drag and drop by dnd libaray",
      subTitle: "Drag and drop by dnd libaray",
      component: <Dnd />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Kanban = () => {
  const initialColumns = {
    todo: [
      { id: '1', text: 'Item 1' },
      { id: '2', text: 'Item 2' },
    ],
    inProgress: [
      { id: '3', text: 'Item 3' },
      { id: '4', text: 'Item 4' },
    ],
    done: [
      { id: '5', text: 'Item 5' },
      { id: '6', text: 'Item 6' },
    ],
  };

  const [columns, setColumns] = useState(initialColumns);

  const moveItem = (itemId, sourceColumn, targetColumn) => {
    const item = columns[sourceColumn].find(i => i.id === itemId);
    if (item) {
      setColumns(prevColumns => ({
        ...prevColumns,
        [sourceColumn]: prevColumns[sourceColumn].filter(i => i.id !== itemId),
        [targetColumn]: [...prevColumns[targetColumn], item],
      }));
    }
  };

  const Column = ({ title, items }) => {
    const [, drop] = useDrop({
      accept: 'ITEM',
      drop: (draggedItem) => {
        moveItem(draggedItem.id, draggedItem.sourceColumn, title);
      },
    });

    return (
      <div ref={drop} style={{ width: '30%', margin: '0 10px' }}>
        <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
        <div
          style={{
            minHeight: '200px',
            padding: '16px',
            backgroundColor: 'lightgray',
            border: '2px dashed black',
          }}
        >
          {items.map(item => (
            <Item key={item.id} item={item} column={title} />
          ))}
        </div>
      </div>
    );
  };

  const Item = ({ item, column }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'ITEM',
      item: { ...item, sourceColumn: column },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });

    return (
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          padding: '8px',
          margin: '4px',
          backgroundColor: 'white',
          border: '1px solid black',
          cursor: 'move',
        }}
      >
        {item.text}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        {Object.keys(columns).map(columnKey => (
          <Column
            key={columnKey}
            title={columnKey}
            items={columns[columnKey]}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default Kanban;
`,
    },
  ],
};

export const dragandDropData = {
  seoTitle: "Drag and Drop Component",
  seoDescription:
    "Learn how to implement drag-and-drop functionality with interactive examples, accessibility considerations, and best practices.",
  seoKeywords: [
    "drag and drop",
    "HTML5 drag and drop",
    "drag and drop accessibility",
    "interactive UI",
  ],
  pageTitle: "Drag and Drop",
  pageDescription: [
    "Drag and Drop allows users to interact with elements by dragging them and dropping them into designated areas.",
    "This guide includes examples of drag-and-drop implementations, accessibility best practices, and interactive demos.",
  ],
  pageImage: "https://material-web.dev/components/images/tabs/hero.webp",
  types: ["Basic Drag and Drop", "Sortable List", "File Upload"],
  interactiveDemo: "",
  accessibity:
    "Ensure drag-and-drop interactions are keyboard-accessible by providing alternatives like buttons or ARIA roles. Use proper focus management for dropped elements.",
  examples: [
    {
      component: <OneWayDrop />,
      description:
        "A simple drag-and-drop implementation using HTML5 drag events.",
      id: "basic-drag-drop",
      title: "Basic Drag and Drop",
      usages:
        "Use for moving elements from one area to another in a straightforward manner.",
      purpose:
        "To demonstrate basic drag-and-drop functionality with minimal setup.",
      codeBlock: {
        "app.jsx": `import React, { useState } from "react";
      
export const App = () => {
  const [items, setItems] = useState([
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
  ]);
      
  const [droppedItems, setDroppedItems] = useState([]);
      
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };
      
  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const item = items.find((item) => item.id === id);
    if (item) {
      setDroppedItems((prevItems) => [...prevItems, item]);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };
      
  const handleDragOver = (e) => {
    e.preventDefault();
  };
      
  return (
    <div className="container">
      <div>
        <h3>Draggable Items</h3>
        {items.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            className="draggable-item"
          >
            {item.text}
          </div>
        ))}
      </div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="droppable-area"
      >
        <h3>Droppable Area</h3>
        {droppedItems.map((item) => (
          <div
            key={item.id}
            className="droppable-area-item"
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};`,
        "app.css": `.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  color: #292929;
};

.draggable-item {
  padding: 8px;
  margin: 4px;
  background-color: white;
  border: 1px solid black;
  cursor: move;
};

.droppable-area {
  padding: 16px;
  background-color: lightgray;
  minHeight: 200px;
  border: 2px dashed black;
};

.droppable-area-item {
  padding: 8px;
  border: 1px solid black;
  margin: 4px;
}`,
      },
      open: false,
    },
    {
      component: <DraggableList />,
      description:
        "A draggable and sortable list where items can be rearranged.",
      id: "sortable-list",
      title: "Sortable List",
      usages: "Use for lists or grids where users need to reorder items.",
      purpose:
        "To demonstrate how to create a sortable list using drag-and-drop events.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";

export const App = () => {
  const [items, setItems] = useState(initialItems);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);
    setDraggedItemIndex(null);
  };

  return (
    <div className="draggable-list">
      {items.map((item, index) => (
        <div
          key={index}
          className={\`list-item \${
            draggedItemIndex === index ? "dragging" : ""
          }\`}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};`,
        "app.css": `.draggable-list {
  width: 300px;
  margin: 40px auto;
  padding: 0;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
  color: #292929
}

.list-item {
  padding: 15px 20px;
  background-color: white;
  margin: 5px;
  border-radius: 4px;
  cursor: grab;
  user-select: none;
  transition: transform 0.2s ease, background-color 0.3s ease;
  border: 1px solid #ddd;
}

.list-item:hover {
  background-color: #e6f7ff;
}

.list-item.dragging {
  background-color: #d0eaff;
  transform: scale(1.05);
  opacity: 0.9;
  cursor: grabbing;
}

.list-item:active {
  cursor: grabbing;
}`,
      },
      open: false,
    },
    {
      component: <FileDropZone />,
      description:
        "A file upload drop zone where users can drag and drop files or click to select them for upload.",
      id: "file-drop-zone",
      title: "File Drop Zone",
      usages:
        "Use for uploading files in forms, dashboards, or content management systems where intuitive file upload is required.",
      purpose:
        "To demonstrate how to create an interactive file upload area using native drag-and-drop events along with file input support.",
      codeBlock: {
        "app.jsx": `import React from "react";
import "./app.css";

export const FileDropZone = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <div className="file-drop-container">
      <div
        className={\`drop-zone \${isDragging ? "dragging" : ""}\`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag & Drop files here or click to upload 📤</p>
        <input
          type="file"
          multiple
          className="file-input"
          onChange={handleFileSelect}
        />
      </div>

      {files.length > 0 && (
        <div className="file-list">
          <h4>Uploaded Files:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};`,
        "app.css": `.file-drop-container {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.drop-zone {
  border: 2px dashed #aaa;
  padding: 30px;
  border-radius: 8px;
  background-color: #fafafa;
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
  position: relative;
}

.drop-zone.dragging {
  background-color: #e0f7fa;
  border-color: #00796b;
}

.drop-zone p {
  margin: 0;
  color: #555;
  font-size: 16px;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-list {
  margin-top: 20px;
  text-align: left;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.file-list h4 {
  margin-bottom: 10px;
  color: #333;
}

.file-list ul {
  list-style: none;
  padding: 0;
}

.file-list li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

.file-list li:last-child {
  border-bottom: none;
}`,
      },
      open: false,
    },
  ],
  links: {
    Types: "#types",
    Accessibity: "#accessibity",
    Examples: {
      "Basic Drag and Drop": "#basic-drag-drop",
      "Sortable List": "#sortable-list",
      "File Drop Zone": "#file-drop-zone",
    },
    References: "#references",
  },
  references: {
    MDN: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API",
    W3C: "https://www.w3.org/TR/dnd-html5/",
    "CSS Tricks":
      "https://css-tricks.com/snippets/javascript/creating-a-draggable-element/",
  },
};

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
      codeBlock: `
<div id="drag-container" style="display: flex; gap: 20px;">
  <div id="drag-item" draggable="true" style="padding: 10px; background: #007bff; color: #fff; cursor: grab;">Drag Me</div>
  <div id="drop-zone" style="padding: 20px; background: #f8f9fa; border: 2px dashed #ccc; text-align: center;">
    Drop Here
  </div>
</div>

<script>
  const dragItem = document.getElementById("drag-item");
  const dropZone = document.getElementById("drop-zone");

  dragItem.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", "This is the dragged content");
    dropZone.style.borderColor = "#007bff";
  });

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = "#e0f7fa";
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    dropZone.innerText = data || "Dropped!";
    dropZone.style.backgroundColor = "#f8f9fa";
    dropZone.style.borderColor = "#ccc";
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.style.backgroundColor = "#f8f9fa";
  });
</script>
      `,
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
      codeBlock: `
<ul id="sortable-list" style="list-style: none; padding: 0;">
  <li draggable="true" style="padding: 10px; background: #f1f1f1; margin-bottom: 5px; cursor: grab;">Item 1</li>
  <li draggable="true" style="padding: 10px; background: #f1f1f1; margin-bottom: 5px; cursor: grab;">Item 2</li>
  <li draggable="true" style="padding: 10px; background: #f1f1f1; margin-bottom: 5px; cursor: grab;">Item 3</li>
</ul>

<script>
  const list = document.getElementById("sortable-list");

  let draggedItem = null;

  list.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
    setTimeout(() => event.target.style.display = "none", 0);
  });

  list.addEventListener("dragend", (event) => {
    event.target.style.display = "block";
    draggedItem = null;
  });

  list.addEventListener("dragover", (event) => {
    event.preventDefault();
    const hoveredItem = event.target;
    if (hoveredItem !== draggedItem && hoveredItem.tagName === "LI") {
      const rect = hoveredItem.getBoundingClientRect();
      const next = (event.clientY - rect.top) / rect.height > 0.5;
      list.insertBefore(draggedItem, next ? hoveredItem.nextSibling : hoveredItem);
    }
  });
</script>
      `,
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
      codeBlock: `
<ul id="sortable-list" style="list-style: none; padding: 0;">
  <li draggable="true" style="padding: 10px; background: #f1f1f1; margin-bottom: 5px; cursor: grab;">Item 1</li>
  <li draggable="true" style="padding: 10px; background: #f1f1f1; margin-bottom: 5px; cursor: grab;">Item 2</li>
  <li draggable="true" style="padding: 10px; background: #f1f1f1; margin-bottom: 5px; cursor: grab;">Item 3</li>
</ul>

<script>
  const list = document.getElementById("sortable-list");

  let draggedItem = null;

  list.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
    setTimeout(() => event.target.style.display = "none", 0);
  });

  list.addEventListener("dragend", (event) => {
    event.target.style.display = "block";
    draggedItem = null;
  });

  list.addEventListener("dragover", (event) => {
    event.preventDefault();
    const hoveredItem = event.target;
    if (hoveredItem !== draggedItem && hoveredItem.tagName === "LI") {
      const rect = hoveredItem.getBoundingClientRect();
      const next = (event.clientY - rect.top) / rect.height > 0.5;
      list.insertBefore(draggedItem, next ? hoveredItem.nextSibling : hoveredItem);
    }
  });
</script>
      `,
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

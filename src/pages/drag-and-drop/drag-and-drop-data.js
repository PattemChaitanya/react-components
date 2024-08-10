import Dnd from "./dnd";
import OneWayDrop from "./drop";
import Kanban from "./kanban";

export const jsonToDisplay = [
  {
    title: "Simple Drag and drop",
    subTitle: "Simple Drag and drop",
    component: <OneWayDrop />,
    "toDisplay": `
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
    "open": false
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

    `
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
`
  }
]

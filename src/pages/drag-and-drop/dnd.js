import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Dnd = () => {
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

export default Dnd;

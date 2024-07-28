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
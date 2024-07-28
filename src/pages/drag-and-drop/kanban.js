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

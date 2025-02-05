import React, { useState } from "react";
import "./dnd.css";

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

export const DraggableList = () => {
  const [items, setItems] = useState(initialItems);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Necessary to allow drop
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
          className={`list-item ${
            draggedItemIndex === index ? "dragging" : ""
          }`}
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
};

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
        className={`drop-zone ${isDragging ? "dragging" : ""}`}
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
};

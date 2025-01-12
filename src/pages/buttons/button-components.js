import React from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";

export const ElevatedButton = () => {
  return (
    <button className="button-component-base elevated">Elevated Button</button>
  );
};

export const IconButton = () => {
  return (
    <button className="button-component-base icon">
      <AddIcon />
      <p>Add name</p>
    </button>
  );
};

export const FilledTonalButton = () => {
  return (
    <button className="button-component-base filled-tonal">
      Filled Tonal Button
    </button>
  );
};

export const OutlinedButton = () => {
  return (
    <button className="button-component-base outlined">Outlined Button</button>
  );
};

export const TextButton = () => {
  return <button className="button-component-base text">Text Button</button>;
};

export const DisabledButton = () => {
  return (
    <>
      <button className="button-component-base disabled" disabled>
        Disabled Button
      </button>
    </>
  );
};

// export const IconButton = () => {
//   return (
//     <button className="button-component-base icon-button">
//       Elevated Button
//     </button>
//   );
// };

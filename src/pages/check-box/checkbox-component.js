import React, { useState } from "react";
import "./styles.css";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox">
      <input
        id="check-me"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        aria-checked={checked}
        aria-describedby="check-me-description"
      />
      {/* <label htmlFor="check-me" className="checkbox-label">
        Check me
      </label>
      <span id="check-me-description" className="sr-only">
        This is a checkbox that you can check.
      </span> */}
    </div>
  );
};

export const CheckboxWithLabel = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox">
      <input
        id="check-me"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        aria-checked={checked}
        aria-describedby="check-me-description"
      />
      <label htmlFor="check-me" className="checkbox-label">
        Check me
      </label>
      <span id="check-me-description" className="sr-only">
        This is a checkbox that you can check.
      </span>
    </div>
  );
};

export const CheckboxThemed = () => {
  let label = "check-me";
  let id = "check-me";
  let theme = { primaryColor: "#6200ea" };
  const [checked, setChecked] = React.useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="checkbox" style={{ "--primary-color": theme.primaryColor }}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        aria-checked={checked}
        aria-describedby={`check-me-description`}
      />
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
      <span id={`check-me-description-${id}`} className="sr-only">
        This is a checkbox that you can check.
      </span>
    </div>
  );
};

export const CheckboxWithIcon = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox-icon">
      <input
        // className="checkbox-icon"
        id="check-me"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        aria-checked={checked}
        aria-describedby="check-me-description"
      />
      <label htmlFor="check-me" className="checkbox-icon-label">
        Check me
      </label>
      <span id="check-me-description" className="sr-only">
        This is a checkbox that you can check.
      </span>
    </div>
  );
};

// export const CheckboxWithLabel = () => {
//   const [checked, setChecked] = React.useState(false);

//   return (
//     <div className="checkbox">
//       <input
//         id="check-me"
//         type="checkbox"
//         checked={checked}
//         onChange={() => setChecked(!checked)}
//         aria-checked={checked}
//         aria-describedby="check-me-description"
//       />
//       <label htmlFor="check-me" className="checkbox-label">
//         Check me
//       </label>
//       <span id="check-me-description" className="sr-only">
//         This is a checkbox that you can check.
//       </span>
//     </div>
//   );
// };

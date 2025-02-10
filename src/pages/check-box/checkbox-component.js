import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox">
      <input
        // id="check-me"
        type="checkbox"
        name="check-me"
        checked={checked}
        onChange={() => setChecked(!checked)}
        aria-checked={checked}
        aria-describedby="check-me-description"
      />
    </div>
  );
};

export const CheckboxWithLabel = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox">
      <input
        // id="check-me"
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

const IndeterminateCheckbox = ({
  label = "Select All",
  isChecked,
  isIndeterminate,
  onChange,
}) => {
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  return (
    <label className="checkbox-in-container">
      <input
        ref={checkboxRef}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="custom-checkbox-in"></span>
      <span className="checkbox-in-label">{label}</span>
    </label>
  );
};

export const ParentCheckbox = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const allChecked = checkedItems.every(Boolean);
  const someChecked = checkedItems.some(Boolean) && !allChecked;

  const toggleParent = () => {
    setCheckedItems(allChecked ? [false, false, false] : [true, true, true]);
  };

  const toggleChild = (index) => {
    setCheckedItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="checkbox-in-group">
      <IndeterminateCheckbox
        label="Select All"
        isChecked={allChecked}
        isIndeterminate={someChecked}
        onChange={toggleParent}
      />
      {checkedItems.map((checked, index) => (
        <IndeterminateCheckbox
          key={index}
          label={`Item ${index + 1}`}
          isChecked={checked}
          isIndeterminate={false}
          onChange={() => toggleChild(index)}
        />
      ))}
    </div>
  );
};

export default ParentCheckbox;

export const CheckboxWithIcon = () => {
  let checkedIcon = "🌟";
  let uncheckedIcon = "⚪";
  let label = "Favorite";
  const [checked, setChecked] = useState(false);
  console.log(checked);

  const toggleCheckbox = (e) => {
    setChecked(!checked);
    e.stopPropagation();
  };

  return (
    <div>
      <h2>Custom Icon Checkbox</h2>
      {/* <IconCheckbox /> */}
      {/* <IconCheckbox checkedIcon="✅" uncheckedIcon="⬜" label="Agree" />
      <IconCheckbox checkedIcon="🖤" uncheckedIcon="♡" label="Like" /> */}
      <label className="icon-checkbox" onClick={(e) => toggleCheckbox(e)}>
        <span className="icon-check">
          {checked ? checkedIcon : uncheckedIcon}
        </span>
        <span className="checkbox-label">{label}</span>
        <input
          type="checkbox"
          checked={checked}
          // onChange={() => {}}
          className="sr-only"
        />
      </label>
    </div>
  );
};

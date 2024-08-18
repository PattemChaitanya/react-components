import React from "react";

const disabledStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "300px",
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
};

const DisableRadioButton = () => {
  return (
    <div style={disabledStyles.container}>
      <label>Gender Selection</label>
      <br />
      <form style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" name="gender" value="female" />
        </div>
        <div>
          <label htmlFor="other">Other</label>
          <input type="radio" id="other" name="gender" value="other" disabled />
        </div>
      </form>
    </div>
  );
};

export default DisableRadioButton;

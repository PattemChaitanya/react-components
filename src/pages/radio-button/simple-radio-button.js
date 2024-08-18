import React from "react";

const simpleRadioButtonStyles = {
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
};

const VerticalRadioButton = () => {
  return (
    <div style={simpleRadioButtonStyles.container}>
      <form>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
      </form>
    </div>
  );
};

export default VerticalRadioButton;

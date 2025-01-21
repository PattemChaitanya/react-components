import React from "react";
import {
  convertReactToString,
  formatAsCodeBlock,
} from "../../utils/converter-function";

const complexRadioButtonStyles = {
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

const HorizontalRadioButton = () => {
  return (
    <div style={complexRadioButtonStyles.container}>
      <label>Gender</label>
      <br />
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </div>
      </form>
    </div>
  );
};

export default HorizontalRadioButton;

// const codeBlock = formatAsCodeBlock(<HorizontalRadioButton />);
// console.log(codeBlock, "codeBlock");

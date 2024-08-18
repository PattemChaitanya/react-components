import HorizontalRadioButton from "./complex-radio-button";
import DisableRadioButton from "./disable-radio";
import LabelPosition from "./label-position";
import VerticalRadioButton from "./simple-radio-button";

export const jsonToPageDisplay = {
  pageTitle: "Radio button",
  description: "Variety of radio button",
  jsonToDisplay: [
    {
      title: "Simple radio button",
      subTitle: "Simple radio button",
      toDisplay: `import React from "react";

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
`,
      component: <VerticalRadioButton />,
      open: false,
    },
    {
      title: "Complex radio button",
      subTitle: "Complex radio button",
      toDisplay: `import React from "react";

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
`,
      component: <HorizontalRadioButton />,
      open: false,
    },
    {
      title: "Complex radio button",
      subTitle: "Complex radio button",
      toDisplay: `import React from "react";

const labelPositionStyles = {
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

const LabelPosition = () => {
  return (
    <div style={labelPositionStyles.container}>
      <label style={labelPositionStyles.label}>Label Position</label>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <label htmlFor="left">Left</label>
          <input type="radio" id="left" name="labelPosition" value="left" />
        </div>
        <div style={{ display: "flex" }}>
          <input type="radio" id="right" name="labelPosition" value="right" />
          <label htmlFor="right">Right</label>
        </div>
        <div>
          <label htmlFor="top">Top</label>
          <input type="radio" id="top" name="labelPosition" value="top" />
        </div>
        <div>
          <input type="radio" id="bottom" name="labelPosition" value="bottom" />
          <label htmlFor="bottom">Bottom</label>
        </div>
      </form>
    </div>
  );
};

export default LabelPosition;
`,
      component: <LabelPosition />,
      open: false,
    },
    {
      title: "Complex radio button",
      subTitle: "Complex radio button",
      toDisplay: `import React from "react";

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
`,
      component: <DisableRadioButton />,
      open: false,
    },
  ],
};

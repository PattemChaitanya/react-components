import React from "react";
import "./styles.css";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const LiveDemo = ({ demo, id }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div id={id} className="live-demo">
      <h2>Demo</h2>
      <button onClick={() => setIsOpen(!isOpen)} className="demo-button">
        Toggle for demo.
        <i>
          {isOpen ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
        </i>
      </button>
      {isOpen && <div className="demo-container">{demo}</div>}
    </div>
  );
};

export default LiveDemo;

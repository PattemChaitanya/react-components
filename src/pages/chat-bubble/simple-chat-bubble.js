import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./style.css";

const TextChatBubble = () => {
  const [isOpen, setIsOpen] = useState(true);
  const src = "";

  return (
    <div
      className="container"
      style={{ height: "220px" }}
      onClick={() => isOpen && setIsOpen(false)}
    >
      <div className="bubbleContainer">
        <div className="imageContainer">
          {src ? <img src="" alt="avatar" /> : <p>C</p>}
        </div>
        <div className="messageContainer">
          <div className="messageContainerContent">
            <div className="messageHeaderContainer">
              <h4>John Doe</h4>
              <caption>11:46</caption>
            </div>
            <p>
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
          </div>
          <DoneAllIcon fontSize="small" style={{ marginLeft: "auto" }} />
        </div>
        <div>
          <MoreVertIcon onClick={() => setIsOpen(!isOpen)} />
        </div>

        {isOpen && (
          <div className="optionsMenu">
            <p>reply</p>
            <p>forward</p>
            <p>copy</p>
            <p>delete</p>
            <p>report</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextChatBubble;
// components to create for chat bubble.
// text format
// image
// any file
// url sharing

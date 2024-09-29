import React, { useState } from "react";
import "./style.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const ComplexChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const src = "";

  return (
    <div className="container" onClick={() => isOpen && setIsOpen(false)}>
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
            <img
              src="https://th.bing.com/th/id/R.d94e0a1deb51120c1d4781ce5daef8ca?rik=aKKBo%2bO%2bTLfd3g&riu=http%3a%2f%2fbabblingpanda.com%2fwp-content%2fuploads%2f2018%2f05%2fEmail.jpeg&ehk=VvElNWZwmrOSRN4LQlcv4BPkB%2bpp4%2fCWnx32UadBEHY%3d&risl=&pid=ImgRaw&r=0"
              alt="computer man"
            />
            <p>
              That's awesome. I think our employees will really appreciate you
              feedback.
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

export default ComplexChatBubble;

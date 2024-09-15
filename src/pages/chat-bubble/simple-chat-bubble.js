import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const textChatBubbleStyles = {
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
  bubbleContainer: {
    display: "flex",
    width: "inherit",
    gap: "8px",
  },
  imageContainer: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  messageContainer: {
    border: "1px solid black",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "8px 4px",
    position: "relative",
  },
};

const TextChatBubble = () => {
  return (
    <div style={textChatBubbleStyles.container}>
      <div style={textChatBubbleStyles.bubbleContainer}>
        <div style={textChatBubbleStyles.imageContainer}>
          <img
            src=""
            alt="avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={textChatBubbleStyles.messageContainer}>
          <h5>Name</h5>
          <p>description</p>
          <p>description</p>
          <p>description</p>
          <DoneAllIcon
            fontSize="small"
            style={{ position: "absolute", right: 0, bottom: "-8px" }}
          />
        </div>
        <div>
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
};

export default TextChatBubble;
// components to create for chat bubble.
// text format
// image
// any file
// music

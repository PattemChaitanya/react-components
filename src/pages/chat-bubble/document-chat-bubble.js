import React, { useState } from "react";
import "./style.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import { IconButton } from "@mui/material";

const DocumentChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const src = "";
  const documentDetails = {
    title: "document",
    pages: 18,
    fileSize: 18,
    fileType: "pdf",
  };

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

            <div className="docs-container">
              <div className="docs">
                <div className="docs-header">
                  {/* <img src="" alt="pdf" /> */}
                  <PictureAsPdfRoundedIcon fontSize="small" />
                  <strong>{documentDetails.title}</strong>
                </div>
                <div className="doc-container">
                  <p>{documentDetails.pages} Pages</p>
                  <div className="docs-dots" />
                  <p>{documentDetails.fileSize} MB</p>
                  <div className="docs-dots" />
                  <p>{documentDetails.fileType}</p>
                </div>
              </div>
              <IconButton>
                <DownloadRoundedIcon />
              </IconButton>
            </div>
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

export default DocumentChatBubble;

import React, { useState } from "react";
import "./style.css";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { IconButton } from "@mui/material";
import Avatar from "../../components/avatar/avatar";

const NotificationDropDowns = () => {
  const [isOpen, setIsOpen] = useState(true);
  const notification = [
    {
      profileUrl: "Jese image",
      message:
        "New message from Jese Leos: 'Hey, what's up? All set for the presentation?'",
      received: "a few moments ago",
    },
    {
      profileUrl: "Joseph image",
      message: "Joseph Mcfall and 5 others started following you.",
      received: "10 minutes ago",
    },
    {
      profileUrl: "Bonnie image",
      message:
        "Bonnie Green and 141 others love your story. See it and view more stories.",
      received: "44 minutes ago",
    },
    {
      profileUrl: "Leslie image",
      message:
        "Leslie Livingston mentioned you in a comment: @bonnie.green what do you say?",
      received: "1 hour ago",
    },
    {
      profileUrl: "Robert image",
      message:
        "Robert Brown posted a new video: Glassmorphism - learn how to implement the new design trend.",
      received: "3 hours ago",
    },
  ];

  return (
    <div className="container">
      <div className="dropDownContainer">
        <div className="icon-button">
          <IconButton onClick={() => setIsOpen(true)}>
            <NotificationsRoundedIcon />
          </IconButton>
        </div>
        <div
          className="content-container"
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          <div className="content-header">
            <h3>Notification</h3>
          </div>
          <div className="content-info">
            {notification.map((item) => (
              <div className="info-message">
                <div style={{ width: "36px", height: "36px" }}>
                  <Avatar url="" name={item.profileUrl} />
                </div>
                <div>
                  <p>{item.message}</p>
                  <small>{item.received}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropDowns;

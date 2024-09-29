import React, { useState } from "react";
import "./style.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import GithubImage from "../../assets/github-image.jpg";

const UrlSharingChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const src = "";
  const githubLinkCard = {
    image: GithubImage,
    title: "github - PattemChaitanya/react-components",
    description: "Contribute to PattemChaitanya/react-components development.",
    domain: "github.com",
  };

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
            <a
              href="https://github.com/PattemChaitanya/react-components"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="link-card">
                <img src={githubLinkCard.image} alt={githubLinkCard.title} />
                <div className="link-card-content">
                  <p className="link-card-title">
                    {githubLinkCard.title.length > 35
                      ? githubLinkCard.title.slice(0, 35) + "..."
                      : githubLinkCard.title}
                  </p>
                  <p className="link-card-description">
                    {githubLinkCard.description.length > 45
                      ? githubLinkCard.description.slice(0, 45) + "..."
                      : githubLinkCard.description}
                  </p>
                  <small>{githubLinkCard.domain}</small>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/PattemChaitanya/react-components"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/PattemChaitanya/react-components
            </a>
            <p>Would don't mind to share the feedback of the company.</p>
          </div>
          <DoneAllIcon fontSize="small" style={{ marginLeft: "auto" }} />
        </div>
        <div>
          <MoreVertIcon
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          />
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

export default UrlSharingChatBubble;

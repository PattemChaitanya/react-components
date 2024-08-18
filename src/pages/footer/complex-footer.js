/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const complexFooterStyles = {
  container: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "40px 0",
    width: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  column: {
    flex: "1",
    marginRight: "20px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    marginBottom: "10px",
  },
  link: {
    color: "#ddd",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  bottomBar: {
    borderTop: "1px solid #555",
    marginTop: "30px",
    paddingTop: "20px",
    textAlign: "center",
  },
};

const ComplexFooter = () => {
  return (
    <footer style={complexFooterStyles.container}>
      <div style={complexFooterStyles.content}>
        <div style={complexFooterStyles.column}>
          <h3 style={complexFooterStyles.title}>About Us</h3>
          <ul style={complexFooterStyles.list}>
            <li style={complexFooterStyles.listItem}>
              <a href="#" style={complexFooterStyles.link}>
                Our Story
              </a>
            </li>
            <li style={complexFooterStyles.listItem}>
              <a href="#" style={complexFooterStyles.link}>
                Team
              </a>
            </li>
            <li style={complexFooterStyles.listItem}>
              <a href="#" style={complexFooterStyles.link}>
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div style={complexFooterStyles.column}>
          <h3 style={complexFooterStyles.title}>Services</h3>
          <ul style={complexFooterStyles.list}>
            <li style={complexFooterStyles.listItem}>
              <a href="#" style={complexFooterStyles.link}>
                Web Design
              </a>
            </li>
            <li style={complexFooterStyles.listItem}>
              <a href="#" style={complexFooterStyles.link}>
                Development
              </a>
            </li>
            <li style={complexFooterStyles.listItem}>
              <a href="#" style={complexFooterStyles.link}>
                Marketing
              </a>
            </li>
          </ul>
        </div>
        <div style={complexFooterStyles.column}>
          <h3 style={complexFooterStyles.title}>Contact</h3>
          <ul style={complexFooterStyles.list}>
            <li style={complexFooterStyles.listItem}>
              <a href="#" style={complexFooterStyles.link}>
                Contact Us
              </a>
            </li>
            <li style={complexFooterStyles.listItem}>
              <a href="#" style={complexFooterStyles.link}>
                Support
              </a>
            </li>
            <li style={complexFooterStyles.listItem}>
              <a href="#" style={complexFooterStyles.link}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={complexFooterStyles.bottomBar}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ComplexFooter;

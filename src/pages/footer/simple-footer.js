import React from "react";

const footerStyles = {
  container: {
    backgroundColor: "#f8f9fa",
    padding: "20px 0",
    borderTop: "1px solid #e7e7e7",
    width: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  text: {
    color: "#6c757d",
    fontSize: "14px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    marginLeft: "20px",
  },
};

const SimpleFooter = () => {
  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.content}>
        <p style={footerStyles.text}>
          &copy; 2023 Your Company. All rights reserved.
        </p>
        <div>
          <a href="#" style={footerStyles.link}>
            Privacy Policy
          </a>
          <a href="#" style={footerStyles.link}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;

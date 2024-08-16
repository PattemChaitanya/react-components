import ComplexFooter from "./complex-footer";
import SimpleFooter from "./simple-footer";

export const jsonToPageDisplay = {
  pageTitle: "Footer",
  description: "Variety of footer",
  jsonToDisplay: [
    {
      title: "Simple footer",
      subTitle: "Simple footer",
      toDisplay: `import React from "react";

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
`,
      component: <SimpleFooter />,
      open: false,
    },
    {
      title: "Complex footer",
      subTitle: "Complex footer",
      toDisplay: `import React from "react";

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
`,
      component: <ComplexFooter />,
      open: false,
    },
  ],
};

import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const complexBreadcrumbsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    borderRadius: "10px",
    width: "300px",
  },
  breadcrumb: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    flexDirection: "row",
  },
  breadcrumbItem: {
    fontSize: "14px",
    cursor: "pointer",
  },
  breadcrumbSeparator: {
    fontSize: "14px",
    margin: "0 4px",
  },
};

const ComplexBreadcrumbs = () => {
  return (
    <div style={complexBreadcrumbsStyles.container}>
      <div style={complexBreadcrumbsStyles.breadcrumb}>
        <ol style={{ display: "flex", alignItems: "center" }}>
          <li style={complexBreadcrumbsStyles.breadcrumbSeparator}>
            <HomeIcon fontSize="small" />
          </li>
          <li style={complexBreadcrumbsStyles.breadcrumbItem}>
            <Link style={complexBreadcrumbsStyles.breadcrumbItem}>Home</Link>
          </li>
          <li style={complexBreadcrumbsStyles.breadcrumbSeparator}>
            <span style={complexBreadcrumbsStyles.breadcrumbSeparator}>
              &#47;
            </span>
          </li>
          <li style={complexBreadcrumbsStyles.breadcrumbItem}>
            <Link style={complexBreadcrumbsStyles.breadcrumbItem}>
              Features
            </Link>
          </li>
          <li style={complexBreadcrumbsStyles.breadcrumbSeparator}>
            <span style={complexBreadcrumbsStyles.breadcrumbSeparator}>
              &#47;
            </span>
          </li>
          <li style={complexBreadcrumbsStyles.breadcrumbItem}>
            <Link style={complexBreadcrumbsStyles.breadcrumbItem}>Pricing</Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ComplexBreadcrumbs;

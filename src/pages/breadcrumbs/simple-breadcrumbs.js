import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const simpleBreadcrumbsStyles = {
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

const SimpleBreadcrumbs = () => {
  return (
    <div style={simpleBreadcrumbsStyles.container}>
      <div style={simpleBreadcrumbsStyles.breadcrumb}>
        <ol style={{ display: "flex", alignItems: "center" }}>
          <li style={simpleBreadcrumbsStyles.breadcrumbSeparator}>
            <HomeIcon fontSize="small" />
          </li>
          <li style={simpleBreadcrumbsStyles.breadcrumbItem}>
            <Link style={simpleBreadcrumbsStyles.breadcrumbItem}>Home</Link>
          </li>
          <li style={simpleBreadcrumbsStyles.breadcrumbSeparator}>
            <span style={simpleBreadcrumbsStyles.breadcrumbSeparator}>
              &gt;
            </span>
          </li>
          <li style={simpleBreadcrumbsStyles.breadcrumbItem}>
            <Link style={simpleBreadcrumbsStyles.breadcrumbItem}>Features</Link>
          </li>
          <li style={simpleBreadcrumbsStyles.breadcrumbSeparator}>
            <span style={simpleBreadcrumbsStyles.breadcrumbSeparator}>
              &gt;
            </span>
          </li>
          <li style={simpleBreadcrumbsStyles.breadcrumbItem}>
            <Link style={simpleBreadcrumbsStyles.breadcrumbItem}>Pricing</Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SimpleBreadcrumbs;

import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = ({ title, description, keywords, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords?.join(", ")} />
      </Helmet>
      {children}
    </>
  );
};

export default HelmetComponent;

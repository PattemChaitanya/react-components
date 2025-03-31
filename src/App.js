import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./config/routes";
import SkipLink from "./components/SkipLink";

function App() {
  return (
    <>
      <SkipLink targetId="main-content" />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

// name/url of the project - "jsexamplewithreact.netlify.app"
// name/url of the project - "jsexamplewithreact.web.app"
// name/url of the project - "jsexamplewithreact.com"
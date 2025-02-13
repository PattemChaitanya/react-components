import { createBrowserRouter } from "react-router-dom";
import Header from "../components/navbar/header";
import Sidebar from "../components/sidebar/sidebar";
import {
  homeScreenCards,
} from "../constants/sidebarConstants";
import Home from "../pages/home/home";
import PageNotFound from "../pages/errors";
import WelcomeSection from "../pages/welcome-apge/welcome-page";
import ComingSoon from "../pages/errors/coming-soon";

const childHomeRouteMapping = () => {
  let allRoutes = homeScreenCards.map((item) => {
    return item.components;
  });
  return allRoutes.flat().map((item) => {
    return { path: item.path, element: item.component };
  });
};

const mergingAllRoutes = [
  ...childHomeRouteMapping()
];

const routeMapping = [
  { element: <WelcomeSection />, path: "/" },
  {
    element: <Header />,
    path: "/all-components",
    children: [
      {
        element: <Sidebar />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          ...mergingAllRoutes,
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
    status: 404,
  },
  { path: "/coming-soon", element: <ComingSoon /> },
];

const routes = createBrowserRouter(routeMapping);

export default routes;

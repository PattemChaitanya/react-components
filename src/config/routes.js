import { createBrowserRouter } from "react-router-dom";
import Header from "../components/navbar/header";
import Sidebar from "../components/sidebar/sidebar";
import {
  newMenu,
  components,
  homeScreenCards,
} from "../constants/sidebarConstants";
import Home from "../pages/home/home";

const childrenRouteMapping = () => {
  return newMenu.map((item) => {
    return { path: item.path, element: item.component };
  });
};

const childRouteMapping = () => {
  return components.map((item) => {
    return { path: item.path, element: item.component };
  });
};

const childHomeRouteMapping = () => {
  let allRoutes = homeScreenCards.map((item) => {
    return item.components;
  });
  return allRoutes.flat().map((item) => {
    return { path: item.path, element: item.component };
  });
};

const mergingAllRoutes = [
  ...childrenRouteMapping(),
  ...childRouteMapping(),
  ...childHomeRouteMapping(),
];

const routeMapping = [
  {
    element: <Header />,
    children: [
      {
        path: "/",
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
];

const routes = createBrowserRouter(routeMapping);

export default routes;

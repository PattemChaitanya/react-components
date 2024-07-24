import { createBrowserRouter } from "react-router-dom";
import Header from "../components/navbar/header";
import Sidebar from "../components/sidebar/sidebar";
import { menu, components } from "../constants/sidebarConstants";
import Components from "../pages/components/components";
import Home from "../pages/home/home";

const childrenRouteMapping = () => {
  return menu.map((item) => {
    return { path: item.path, element: item.component };
  });
};

const childRouteMapping = () => {
  return components.map((item) => {
    return { path: item.path, element: item.component };
  });
};

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
          ...childrenRouteMapping(),
          {
            path: "components",
            element: <Components />,
            children: [...childRouteMapping()],
          },
        ],
      },
    ],
  },
];

const routes = createBrowserRouter(routeMapping);

export default routes;

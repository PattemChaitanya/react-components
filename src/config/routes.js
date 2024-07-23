import { createBrowserRouter } from "react-router-dom";
import Header from "../components/navbar/header";
import Sidebar from "../components/sidebar/sidebar";
import Home from "../pages/home/home";
import DragAndDrop from "../pages/drag-and-drop/drag-and-drop";

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
          {
            path: "drop",
            element: <DragAndDrop />,
          },
          // {
          //   path: "myCookbooks",
          //   element: <UserCookBooks />,
          // },
          // {
          //   path: "likedRecipes",
          //   element: <LikedRecipes />,
          // },
        ],
      },
    ],
  },
];

const routes = createBrowserRouter(routeMapping);

export default routes;

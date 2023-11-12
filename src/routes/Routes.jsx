import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import HomePage from "../home/HomePage.jsx";
import Menu from "../pages/menu/Menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import HomePage from "../home/HomePage.jsx";
import Menu from "../pages/menu/Menu.jsx";
import Order from "../pages/order/Order.jsx";

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
      // {
      //   path: "/order",
      //   element: <Order />,
      // },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
]);

export default router;

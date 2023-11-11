import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import HomePage from "../home/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;

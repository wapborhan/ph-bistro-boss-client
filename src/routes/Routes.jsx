import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import Dash from "../layout/Dash.jsx";
import HomePage from "../home/HomePage.jsx";
import Menu from "../pages/menu/Menu.jsx";
import Order from "../pages/order/Order.jsx";
import SignIn from "../pages/signin/SignIn.jsx";
import SignUp from "../pages/signup/SignUp.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Cart from "../dashboard/cart/Cart.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import AllUsers from "../dashboard/all-user/AllUsers.jsx";

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
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dash />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

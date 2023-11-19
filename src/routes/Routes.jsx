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
import AddItem from "../dashboard/add-items/AddItem.jsx";
import ManageItems from "../dashboard/manage-items/ManageItems.jsx";

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
        path: "home",
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
      {
        path: "addItems",
        element: (
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <PrivateRoute>
            <ManageItems />
          </PrivateRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

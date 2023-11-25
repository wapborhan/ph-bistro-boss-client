import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import Dash from "../layout/Dash.jsx";
import HomePage from "../home/HomePage.jsx";
import Menu from "../pages/menu/Menu.jsx";
import Order from "../pages/order/Order.jsx";
import SignIn from "../pages/signin/SignIn.jsx";
import SignUp from "../pages/signup/SignUp.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AdminRoute from "./AdminRoute.jsx";
import Cart from "../dashboard/cart/Cart.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import AllUsers from "../dashboard/all-user/AllUsers.jsx";
import AddItem from "../dashboard/add-items/AddItem.jsx";
import ManageItems from "../dashboard/manage-items/ManageItems.jsx";
import UpdateItems from "./../dashboard/update-items/UpdateItems.jsx";
import Payment from "../dashboard/payment/Payment.jsx";
import AdminHome from "../dashboard/admin-home/AdminHome.jsx";
import UserHome from "../dashboard/user-home/UserHome.jsx";
import PaymentHistory from "../dashboard/payment-history/PaymentHistory.jsx";

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

      // normal user routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },

      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin only routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItems />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3300/menu/${params.id}`),
      },
      {
        path: "bookings",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;

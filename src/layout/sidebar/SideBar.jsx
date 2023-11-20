import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const SideBar = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);
  // const isAdmin = true;
  return (
    <div className="lg:w-64 md:w-64 lg:min-h-screen md:min-h-screen  bg-orange-400">
      <ul className="menu p-4 sticky top-0">
        {isAdmin ? (
          <>
            <li>
              <NavLink to="/dashboard/home">
                <FaHome></FaHome>
                Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addItems">
                <FaUtensils></FaUtensils>
                Add Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageItems">
                <FaList></FaList>
                Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
                <FaBook></FaBook>
                Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/users">
                <FaUsers></FaUsers>
                All Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">
                <FaShoppingCart></FaShoppingCart>
                My Cart ({cart.length})
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar>
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">
                <FaShoppingCart></FaShoppingCart>
                My Cart ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review">
                <FaAd></FaAd>
                Add a Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
                <FaList></FaList>
                My Bookings
              </NavLink>
            </li>
          </>
        )}
        {/* shared nav links */}
        <div className="divider"></div>
        <li>
          <NavLink to="/">
            <FaHome></FaHome>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">
            <FaSearch></FaSearch>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/order/contact">
            <FaEnvelope></FaEnvelope>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

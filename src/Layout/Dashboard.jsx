import { FaHome, FaList, FaShoppingCart, FaUsers } from "react-icons/fa";
import {  FaBook, FaCalendar, FaUtensils } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import { MdOutline10K, MdOutlineMenuOpen } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO:get isAdmin Value form the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/*dashboard side bar */}
      <div className="w-64 min-h-screen bg-gray-900">
        <div className="text-white p-6">
          <h2 className="font-extrabold text-2xl">BISTRO BOSS</h2>
          <p className="font-bold">Resturent</p>
        </div>
        <ul className="menu p-4 gap-5">
          {isAdmin ? (
            <>
            <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Adimn Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additems">
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
                  My Cart({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutline10K></MdOutline10K>
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>
                  My Booking
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
            <NavLink to="/menu">
              <MdOutlineMenuOpen></MdOutlineMenuOpen>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <GiShoppingBag></GiShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus">
              <GrContact></GrContact>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      {/*dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

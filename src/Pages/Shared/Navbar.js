import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        {user ? (
          <button className="btn btn-outline" onClick={logout}>
            LogOut
          </button>
        ) : (
          <Link className="btn btn-outline" to="/login">
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-300">
      <div className="navbar-start px-8">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-serif w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img className="h-[40px] w-[160px]" src={logo} alt="" />
      </div>
      <div className="navbar-center px-8 font-bold font-serif text-blue-600 hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;

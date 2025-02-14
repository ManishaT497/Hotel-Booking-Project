// src/components/Navbar.jsx

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUser from "../context/useUser";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { user, logoutUser } = useUser();

  const navigation = useNavigate();
  return (
    <nav className="bg-[#344A71] text-white p-4  w-full  opacity-100 ">
      <div className="container  flex items-center justify-between">
        <img
          onClick={() => navigation("/")}
          className="h-14 w-fit cursor-pointer"
          src="/images/logo.png"
          alt="Logo"
        />

        <div className="hidden md:flex md:items-center  text-sm">
          <Link
            to="/"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            HOME
          </Link>
          <Link
            to="/hotels"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            HOTEL
          </Link>
          <Link
            to="/roomtype"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            ROOMTYPES
          </Link>
          <Link
            to="/allrooms"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            All ROOM
          </Link>

          <Link
            to="/contact"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            CONTACT
          </Link>
          <Link
            to="/feedback"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            FEEDBACK
          </Link>
          {user?.accessToken ? (
            <div
              onClick={() => {
                logoutUser();
                navigation("/");
                toast.success("Logged out successfully");
              }}
              className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  cursor-pointer"
            >
              LOGOUT
            </div>
          ) : (
            <Link
              to="/login"
              className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
            >
              LOGIN
            </Link>
          )}

          {!user?.accessToken && (
            <Link
              to="/register"
              className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
            >
              REGISTER
            </Link>
          )}
        </div>
        <button onClick={() => setShowNav(!showNav)} className="flex md:hidden">
          <RxHamburgerMenu size={40} />
        </button>

        <div
          onScroll={() => setShowNav(false)}
          className={`lg:hidden fixed ${
            showNav ? "top-16 opacity-80" : "-top-[600px] opacity-0 "
          } transition-all ease-in duration-600 right-0 px-5 bg-[#344A71] flex flex-col items-center gap-10 py-4`}
        >
          <Link
            to="/"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            HOME
          </Link>
          <Link
            to="/hotels"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            HOTEL
          </Link>
          <Link
            to="/roomtype"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            ROOMTYPES
          </Link>
          <Link
            to="/allrooms"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            All ROOM
          </Link>

          <Link
            to="/contact"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            CONTACT
          </Link>
          <Link
            to="/feedback"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            FEEDBACK
          </Link>
          {user?.accessToken ? (
            <Link
              to="/logout"
              className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
            >
              LOGOUT
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
            >
              LOGIN
            </Link>
          )}
          <Link
            to="/button"
            className="px-2 hover:bg-[#FDE55B] hover:text-black py-4 transition-all ease-in  "
          >
            BUTTON
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

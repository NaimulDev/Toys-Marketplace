import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";
import Header from "./Header";
import "./Navbar.css";
import logo from "../../../public/logo.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="">
      <Header></Header>
      <div className="relative ">
        <div className="bg-[#09ccd0] text-white  flex items-center justify-between py-2">
          <ul className="nav-ul items-center hidden  lg:flex font-bold md:mx-20">
            <li>
              <NavLink
                id="nav"
                to="/"
                aria-label="home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/alltoys"
                aria-label="alltoys"
                title="All Toys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/Blogs"
                aria-label="blogs"
                title="blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/addtoys"
                id="nav"
                aria-label="addtoys"
                title="addtoys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Add Toys
              </NavLink>
            </li>

            <li className="flex ">
              {user ? (
                <>
                  <NavLink
                    id="nav"
                    to="/mytoys"
                    aria-label="mytoys"
                    title="mytoys"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    My Toys
                  </NavLink>

                  <button id="nav" className="" onClick={handleLogOut}>
                    Logout
                  </button>
                  <div className=" flex ml-60">
                    <p className="bg-secondary rounded-2xl py-2 px-3 mr-4">
                      {user?.email}
                    </p>

                    <div className="avatar cursor-pointer">
                      <div
                        className="w-10 h-10 rounded-full relative ring ring-primary ring-offset-base-100 ring-offset-2"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <img src={user?.photoURL} alt="User Avatar" />
                        {isHovered && (
                          <span className="absolute top-1 text-xs">
                            {user?.displayName}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  id="nav"
                  to="/login"
                  aria-label="login"
                  title="Login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="ToyTown"
                      title="ToyTown"
                      className="inline-flex items-center"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-200">
                        <img
                          src={logo}
                          alt=""
                          className="flex-shrink-0 w-5 h-5 rounded-full "
                        />
                      </div>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        TT
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/alltoys"
                        aria-label="AllToys"
                        title="AllToys"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        All Toys
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/blogs"
                        aria-label="Blogs"
                        title="Blogs"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blogs
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/login"
                        aria-label="Login"
                        title="Login"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

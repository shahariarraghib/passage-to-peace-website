import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import TopNave from "../Shared/TopNave";
import "./Hedder.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <TopNave></TopNave>
      <div>
        <div class="navbar bg-[#FFFFFF] p-3">
          <div class="navbar-start ">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#FFFFFF] rounded-box w-52 "
              >
                <li>
                  <button>
                    <NavLink to="/home">HOME</NavLink>
                  </button>
                </li>
                <li>
                  <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li tabindex="0">
                  <a class="justify-between">
                    DESHBOARD
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul class="p-0">
                    <li>
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <button class="btn btn-warning">
                        <NavLink to="/mybooking">MY BOOKING</NavLink>
                      </button>
                    </li>
                    <li>
                      <NavLink to="/allbooking">ALL BOOKING</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/place">ADD PLACE</NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/home" class="btn btn-ghost normal-case  ">
              <p class="md:text-3xl font-bold text-gray-900">
                PASSAGE <span class="text-amber-300">TO</span> PEACE
              </p>
            </NavLink>

            <div class="navbar-center hidden lg:flex mx-5 md:text-base font-bold ">
              <ul class="menu menu-horizontal ">
                <li class="licolor">
                  <button class="hover-underline-animation">
                    <NavLink to="/home">HOME</NavLink>
                  </button>
                </li>
                <li>
                  <button class="hover-underline-animation">
                    <NavLink to="/about">ABOUT</NavLink>
                  </button>
                </li>
                <li tabindex="0" class="dropdown flex">
                  <a class="hover-underline-animation">
                    DESHBOARD
                    <svg
                      class="fill-current "
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>

                  <ul class="p-0 menu menu-compact dropdown-content mt-0 shadow rounded-box w-52 bg-[#ffffff] mt-4">
                    <li>
                      <NavLink to="/mybooking">MY BOOKING</NavLink>
                    </li>
                    <li>
                      <NavLink to="/allbooking">ALL BOOKING</NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <button class="hover-underline-animation">
                    <NavLink to="/place">ADD PLACE</NavLink>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div class="navbar-end">
            {user.email ? (
              <>
                <div class="sm:invisible md:visible">
                  <span class="mx-10" style={{ color: "gray" }}>
                    Hello {user.displayName}
                  </span>
                </div>
                <div class="dropdown dropdown-end ">
                  {user.email ? (
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                      <div class="w-10 rounded-full">
                        {user.photoURL ? <img src={user.photoURL} /> : <></>}
                      </div>
                    </label>
                  ) : (
                    <></>
                  )}
                  <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content  shadow bg-base-ffc107 rounded-box w-52 bg-[#ffffff] mt-4"
                  >
                    <li>
                      {user.email ? (
                        <>
                          <div>
                            <NavLink to="/mybooking">My Bookings</NavLink>
                          </div>

                          <div>
                            <button
                              onClick={logOut}
                              className="btn btn-xs sm:btn-sm md:btn-md  btn-warning text-red-700"
                            >
                              Log Out
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <NavLink to="/login">
                            <button color="success" variant="contained">
                              Log In
                            </button>
                          </NavLink>
                        </>
                      )}
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <NavLink to="/login">
                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning">
                  Log in
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

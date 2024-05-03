import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="w-full p-4 absolute left-0 top-0 z-10">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <Link to="/">
              <h2 className="text-[26px] text-secondary font-medium font-roboto leading-[140%]">
                DocThread
              </h2>
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex items-center gap-[77px]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-navLink"
                        : "text-primary text-base font-medium font-roboto leading-[140%]"
                    }  `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-navLink"
                        : "text-primary text-base font-medium font-roboto leading-[140%]"
                    }  `
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-navLink"
                        : "text-primary text-base font-medium font-roboto leading-[140%]"
                    }  `
                  }
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-navLink"
                        : "text-primary text-base font-medium font-roboto leading-[140%]"
                    }  `
                  }
                  to="/appointment"
                >
                  Appointment
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-navLink"
                        : "text-primary text-base font-medium font-roboto leading-[140%]"
                    }  `
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <HiMiniBars3BottomLeft className="text-3xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

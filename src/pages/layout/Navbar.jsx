import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="p-4 lg:p-8">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <h2 className="text-[26px] text-secondary font-normal font-roboto capitalize">
                DocThread
              </h2>
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex items-center justify-between gap-x-16">
              <li>
                <NavLink className="text-[18px] text-primary font-medium font-roboto leading-[140%]">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[18px] text-primary font-medium font-roboto leading-[140%]">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[18px] text-primary font-medium font-roboto leading-[140%]">
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[18px] text-primary font-medium font-roboto leading-[140%]">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[18px] text-primary font-medium font-roboto leading-[140%]">
                  Appointment
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <HiBars3BottomLeft />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

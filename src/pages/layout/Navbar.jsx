import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Sidebar } from "../../components";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebar = () => {
    !sidebarOpen ? setSidebarOpen(true) : setSidebarOpen(false);
  };
  return (
    <nav className="p-4 lg:p-8 relative z-50">
      <div className="max-w-container mx-auto">
        {sidebarOpen && <Sidebar />}
        <div className="flex items-center justify-between relative">
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
                <NavLink
                  to="/"
                  className="text-[18px] text-primary font-medium font-roboto leading-[140%]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-[18px] text-primary font-medium font-roboto leading-[140%]"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className="text-[18px] text-primary font-medium font-roboto leading-[140%]"
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-[18px] text-primary font-medium font-roboto leading-[140%]"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appointment"
                  className="text-[18px] text-primary font-medium font-roboto leading-[140%]"
                >
                  Appointment
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:hidden" onClick={handleSidebar}>
            <HiBars3BottomLeft className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

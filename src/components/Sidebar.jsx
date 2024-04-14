import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

const Sidebar = () => {
  return (
    <section className="p-8 h-[65%] w-[250px] bg-secondary absolute top-0 left-0">
      <div className="py-8 text-center space-y-2">
        <Link className="text-white text-2xl font-roboto font-normal text-center">
          DocThread
        </Link>
        <div className="mx-auto h-[50px] w-[50px] bg-btnBg rounded-full"></div>
        <h3 className="text-lg text-white">John Doe</h3>
      </div>
      <div>
        <ul className="space-y-4 text-center">
          <li>
            <Link
              to="/"
              className="text-white hover:text-btnBg text-base font-medium font-roboto"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-btnBg text-base font-medium font-roboto"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="text-white hover:text-btnBg text-base font-medium font-roboto"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-btnBg text-base font-medium font-roboto"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/appointment"
              className="text-white hover:text-btnBg text-base font-medium font-roboto"
            >
              Appointment
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-6 flex items-center justify-center">
        <Button text="Logout" />
      </div>
    </section>
  );
};

export default Sidebar;

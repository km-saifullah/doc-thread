import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Item from "../../utils/Item";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orangeColor to-yellowColor py-[65px] lg:px-[90px]">
      <div className="max-w-container mx-auto">
        <div className="space-y-4">
          <h2 className="text-secondary text-[30px] font-bold font-roboto leading-[135%] text-center">
            DocThread
          </h2>
          <p className=" text-base text-primary font-normal font-poppins leading-[135%] text-center capitalize">
            Empowering patients with comprehensive health resources, connecting
            them with trusted doctors
          </p>
        </div>
        <div className="px-4 py-[70px] border-y border-primary mt-[40px] flex items-center justify-between gap-y-10 gap-x-[100px] flex-wrap lg:flex-nowrap">
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="text-[22px] text-secondary font-bold font-roboto leading-[135%] capitalize">
                Contact
              </h4>
              <p className="text-[18px] text-primary font-normal font-poppins leading[135%] capitalize">
                Dhanmondi, Dhaka Bangladesh
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div>
                  <IoMdMail className="text-2xl" />
                </div>
                <div>
                  <p className="text-[18px] text-primary font-normal font-poppins leading-[135%]">
                    <a href="mailto:info@docthread.com">info@docthread.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <div>
                  <p className="text-xl text-primary font-normal font-poppins leading-[135%]">
                    <a href="tel:(+880) 123456789">(+880) 123456789</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[22px] text-secondary font-bold font-roboto leading-[135%] capitalize">
              about
            </h4>
            <ul className="space-y-3 pt-4">
              <Item path="/about" title="about" />
              <Item path="/contact" title="contact us" />
              <Item path="/service" title="services" />
              <Item path="/help" title="help" />
            </ul>
          </div>
          <div>
            <h4 className="text-[22px] text-secondary font-bold font-roboto leading-[135%] capitalize">
              department
            </h4>
            <ul className="space-y-3 pt-4">
              <Item title="ENT" />
              <Item title="cardiology" />
              <Item title="dermatology" />
              <Item title="surgery" />
            </ul>
          </div>
          <div>
            <h4 className="text-[22px] text-secondary font-bold font-roboto leading-[135%] capitalize">
              Quick Access
            </h4>
            <ul className="space-y-3 pt-4">
              <Item title="online reports" />
              <Item title="appointment" />
              <Item title="doctors" />
            </ul>
          </div>
        </div>
        <div className="pt-10">
          <p className="text-base text-primary font-normal font-poppins leading-[135%] text-center capitalize">
            © All Rights Reserved by Khaled Md Saifullah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

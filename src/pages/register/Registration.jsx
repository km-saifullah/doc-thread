import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../utils/Input";
import { useFirebase } from "../../context/Firebase";

const Registration = () => {
  let firebase = useFirebase();

  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  // handle input data
  const handleInput = (e) => {
    const registerInfo = { ...registerData };
    registerInfo[e.target.name] = e.target.value;
    setRegisterData(registerInfo);
  };

  // handle registration
  const handleRegistration = (e) => {
    console.log(registerData);
    firebase.signUpUserWithEmailAndPassword(
      registerData.email,
      registerData.password
    );
    setRegisterData({
      fullname: "",
      email: "",
      phone: "",
      password: "",
    });
    e.preventDefault();
  };

  return (
    <section className="py-[100px]">
      <div className="max-w-container mx-auto">
        <h2 className="pb-[27px] text-center text-[44px] text-primary font-medium font-roboto leading-[140%] capitalize">
          Register Yourself
        </h2>
        <form className="">
          <div className="px-4 lg:px-0 flex items-center flex-col gap-y-7 justify-center">
            <Input
              type="text"
              name="fullname"
              value={registerData.fullname}
              placeholder="Full Name"
              onChange={handleInput}
            />
            <Input
              type="email"
              name="email"
              value={registerData.email}
              placeholder="Email"
              onChange={handleInput}
            />
            <Input
              type="tel"
              name="phone"
              value={registerData.phone}
              placeholder="Mobile Number"
              onChange={handleInput}
            />
            <Input
              type="password"
              name="password"
              value={registerData.password}
              placeholder="Password"
              onChange={handleInput}
            />
            <button
              className="w-full lg:w-[1000px] inline-block bg-btnBg py-[20px] px-[25px] border-none outline-none text-xl text-white font-medium font-roboto leading-[140%] rounded-[5px]"
              onClick={handleRegistration}
            >
              Registration
            </button>
            <h5 className="text-xl text-primary font-normal font-poppins leading-[135%] capitalize">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline decoration-solid text-btnBg"
              >
                Login
              </Link>
            </h5>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;

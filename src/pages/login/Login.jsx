import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../utils/Input";
import { useFirebase } from "../../context/Firebase";
import {
  emailValidation,
  passwordValidation,
} from "../../validation/validation";

const Login = () => {
  const firebase = useFirebase();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  // handle input for login
  const handleInput = (e) => {
    const loginInfo = { ...loginData };
    loginInfo[e.target.name] = e.target.value;
    setLoginData(loginInfo);
  };

  // handle login form
  const handleLogin = (e) => {
    setError({
      ...error,
      emailError: emailValidation(loginData.email),
      // passwordError: passwordValidation(loginData.password),
    });

    if (!error.emailError) {
      firebase
        .signInUserWithEmailAndPassword(loginData.email, loginData.password)
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch(() => {});
    }

    setLoginData({
      email: "",
      password: "",
    });
    e.preventDefault();
  };
  return (
    <section className="py-[100px]">
      <div className="max-w-container mx-auto">
        <h2 className="pb-[27px] text-center text-[44px] text-primary font-medium font-roboto leading-[140%] capitalize">
          Login Yourself
        </h2>
        <form className="">
          <div className="px-4 lg:px-0 flex items-center flex-col gap-y-7 justify-center">
            <Input
              type="email"
              name="email"
              value={loginData.email}
              placeholder="Email"
              onChange={handleInput}
            />
            <Input
              type="password"
              name="password"
              value={loginData.password}
              placeholder="Password"
              onChange={handleInput}
            />
            <button
              className="w-full lg:w-[1000px] inline-block bg-btnBg py-[20px] px-[25px] border-none outline-none text-xl text-white font-medium font-roboto leading-[140%] rounded-[5px]"
              onClick={handleLogin}
            >
              Login
            </button>
            <h5 className="text-xl text-primary font-normal font-poppins leading-[135%] capitalize">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="underline decoration-solid text-btnBg"
              >
                Registration
              </Link>
            </h5>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

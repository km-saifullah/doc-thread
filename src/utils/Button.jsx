import React from "react";

const Button = ({ text }) => {
  return (
    <button className="cursor-pointer bg-btnBg px-[25px] py-3 text-[18px] text-white font-medium font-poppins leading-[135%] rounded-[5px] inline-block">
      {text}
    </button>
  );
};

export default Button;

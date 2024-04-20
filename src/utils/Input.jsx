import React from "react";

const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full lg:w-[1000px] py-[20px] px-[25px] border-none outline-none text-xl text-primary font-medium font-roboto leading-[140%] drop-shadow-inputShadow rounded-[5px]"
    />
  );
};

export default Input;

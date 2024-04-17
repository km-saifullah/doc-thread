import React from "react";

const Heading = ({ text }) => {
  return (
    <h2 className="text-2xl lg:text-[44px] text-primary font-medium font-roboto leading-[140%] capitalize">
      {text}
    </h2>
  );
};

export default Heading;

import React from "react";
import { Link } from "react-router-dom";

const Item = ({ path, title }) => {
  return (
    <li className="text-[18px] text-primary font-normal font-poppins leading-[135%] capitalize">
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default Item;

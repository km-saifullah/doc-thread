import React from "react";

const Image = ({ imgSrc, altText }) => {
  return (
    <img src={imgSrc} alt={altText} className="h-full w-full object-cover" />
  );
};

export default Image;

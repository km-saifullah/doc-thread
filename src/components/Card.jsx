import React from "react";
import Image from "../utils/Image";

const Card = ({ imgSrc, altText, title }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 w-[300px] h-[300px] bg-gradient-to-b from-orangeColor to-yellowColor rounded-[5px]">
      <div className="h-[150px] w-[130px]">
        <Image imgSrc={imgSrc} altText={altText} />
      </div>
      <div>
        <h3 className="text-2xl text-primary font-roboto font-semibold leading-[140%]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;

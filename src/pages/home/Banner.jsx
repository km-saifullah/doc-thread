import React from "react";
import Button from "../../utils/Button";
import Image from "../../utils/Image";
import bannerImg from "../../assets/images/banner_img.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-orangeColor to-yellowColor relative pt-20 lg:pt-32">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap">
          <div className="space-y-5 pl-4">
            <h1 className="w-full lg:w-[669px] text-2xl text-center lg:text-left lg:text-6xl text-primary font-normal font-poppins leading-[140%] capitalize">
              Entrust your health to top-notch specialists
            </h1>
            <p className="w-full lg:w-[553px] text-base text-center md:text-left lg:text-2xl text-secondary font-light font-poppins leading-[135%] capitalize">
              Prioritize your well-being with expert care and personalized
              medical attention today
            </p>
            <div className="flex items-center justify-center lg:justify-normal pb-10 lg:pb-0">
              <Link to="/register">
                <Button text="Register" />
              </Link>
            </div>
          </div>
          <div className="h-[525px] w-[496px]">
            <Image imgSrc={bannerImg} altText="Banner Image Missing!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

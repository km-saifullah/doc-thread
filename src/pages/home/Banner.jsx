import React from "react";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";
import Image from "../../utils/Image";
import bannerImg from "../../assets/images/banner_img.png";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-orangeColor to-yellowColor absolute left-0 top-0 w-full pt-44">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="w-[570px] md:w-[670px] text-6xl text-primary font-medium font-poppins leading-[140%] capitalize">
              Entrust your health to top-notch specialists
            </h1>
            <p className="w-[554px] text-2xl text-secondary font-light font-poppins leading-[135%] capitalize">
              Prioritize your well-being with expert care and personalized
              medical attention today
            </p>
            <div>
              <Link to="/">
                <Button text="register" />
              </Link>
            </div>
          </div>
          <div className="h-[525px] w-[496px] overflow-hidden">
            <Image imgSrc={bannerImg} altText="Banner Image Missing!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

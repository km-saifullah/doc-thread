import React from "react";
import Heading from "../../utils/Heading";
import docImg from "../../assets/images/doctor_img.png";
import Image from "../../utils/Image";
import { Card } from "../../components";
import docReport from "../../assets/images/doc_withReport.png";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <section className="py-4 lg:py-[77px] px-2">
      <div className="max-w-container mx-auto">
        <div className="text-center w-full lg:w-[863px] mx-auto">
          <Heading
            text="Streamline your solution process with easy tailored steps for quick results"
            className="text-center"
          />
        </div>
        <div className="flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-2 pt-5 lg:pt-[54px]">
          {[0, 1, 2, 3].map((item, index) => (
            <Card key={index} imgSrc={docImg} title="Specialist Doctor" />
          ))}
        </div>
        <div className="flex items-start flex-wrap lg:flex-nowrap gap-x-[80px] pt-6 lg:pt-[77px]">
          <div className="w-full lg:w-[553px] h-[584px]">
            <Image imgSrc={docReport} altText="" />
          </div>
          <div className="w-full] lg:w-[535px] space-y-7 pl-5 lg:pl-0 pt-5 lg:pt-0">
            <Heading text="We consistently prioritize top-quality medical care for your well-being" />
            <ul className="flex items-start justify-start flex-col gap-y-6">
              <li className="list-disc text-base lg:text-xl text-textColor font-medium font-poppins leading-[135%] capitalize">
                Leading expert physician
              </li>
              <li className="list-disc text-base lg:text-xl text-textColor font-medium font-poppins leading-[135%] capitalize">
                Cutting-edge medical care
              </li>
              <li className="list-disc text-base lg:text-xl text-textColor font-medium font-poppins leading-[135%] capitalize">
                Convenient online scheduling available
              </li>
              <li className="list-disc text-base lg:text-xl text-textColor font-medium font-poppins leading-[135%] capitalize">
                Caring and Loveable ambience
              </li>
            </ul>
            <div>
              <Link to="/signup">
                <Button text="Register" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;

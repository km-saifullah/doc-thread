import React from "react";
import Heading from "../../utils/Heading";
import { Card } from "../../components";
import neurology from "../../assets/images/neurology.png";
import orthopedics from "../../assets/images/orthopedics.png";
import dentist from "../../assets/images/dentist.png";
import cardiology from "../../assets/images/cardiology.png";

const Department = () => {
  return (
    <section className="pb-[77px] px-3">
      <div className="max-w-container mx-auto">
        <div className="text-center w-full lg:w-[507px] mx-auto pt-4">
          <Heading text="Available for all kinds of medical problems" />
        </div>
        <div className="flex items-center gap-[51px] justify-center lg:justify-between flex-wrap lg:flex-nowrap  pt-[40px] lg:pt-[71px]">
          <Card imgSrc={neurology} altText="Image Missing" title="Neurology" />
          <Card
            imgSrc={cardiology}
            altText="Image Missing"
            title="Cardiology"
          />
          <Card
            imgSrc={orthopedics}
            altText="Image Missing"
            title="Othopedics"
          />
          <Card imgSrc={dentist} altText="Image Missing" title="Dentist" />
        </div>
      </div>
    </section>
  );
};

export default Department;

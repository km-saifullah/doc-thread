import React, { useState } from "react";
import Image from "../../utils/Image";
import appointImg from "../../assets/images/appointment.jpg";
import Input from "../../utils/Input";

const Appointment = () => {
  const [appointData, setAppointData] = useState({
    patientName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
  });

  // handle input for appointment
  const handleInput = (e) => {
    const appointInfo = { ...appointData };
    appointInfo[e.target.name] = e.target.value;
    setAppointData(appointInfo);
  };

  // handle appointment
  const handleAppointment = (e) => {
    console.log(appointData),
      setAppointData({
        patientName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        doctor: "",
      });
    e.preventDefault();
  };
  return (
    <section className="pt-[77px]">
      <div className="bg-gradient-to-r from-orangeColor to-yellowColor py-6 lg:py-[160px] w-full">
        <div className="max-w-container mx-auto space-y-3">
          <p className="text-center text-xl lg:text-[35px] text-primary font-normal font-poppins leading-[135%] capitalize">
            Easy to manage appointment
          </p>
          <h2 className="text-center text-2xl lg:text-[44px] text-primary font-roboto font-bold leading-[140%] capitalize">
            Appointment
          </h2>
        </div>
      </div>
      <div className="max-w-container mx-auto py-8 lg:py-[165px]">
        <div className="flex gap-[50px] items-center lg:items-start justify-center lg:justify-start flex-wrap lg:flex-nowrap">
          <div className="w-[300px] lg:w-[650px] h-[700px] rounded-[5px]">
            <Image
              imgSrc={appointImg}
              altText="Image Missing"
              className="rounded-[100px]"
            />
          </div>
          <div>
            <div className="space-y-4">
              <h4 className="text-[22px] text-primary font-medium font-roboto leading-[135%] capitalize">
                Appointment
              </h4>
              <h2 className="text-[35px] text-secondary font-semibold font-poppins leading-[140%] capitalize pb-4">
                Book your appointment
              </h2>
            </div>
            <form>
              <div className="w-full lg:w-[569px] flex items-start gap-x-5 gap-y-8 flex-col">
                <Input
                  type="text"
                  name="patientName"
                  value={appointData.patientName}
                  onChange={handleInput}
                  placeholder="Patient's Name"
                  style={{
                    width: "100%",
                    border: "1px solid #F79F23",
                  }}
                />
                <Input
                  type="email"
                  name="email"
                  value={appointData.email}
                  onChange={handleInput}
                  placeholder="Email"
                  style={{
                    width: "100%",
                    border: "1px solid #F79F23",
                  }}
                />
                <Input
                  type="tel"
                  name="phone"
                  value={appointData.phone}
                  onChange={handleInput}
                  placeholder="Phone"
                  style={{
                    width: "100%",
                    border: "1px solid #F79F23",
                  }}
                />
                <div className="w-full flex items-center justify-between gap-x-5">
                  <Input
                    type="date"
                    name="date"
                    value={appointData.date}
                    onChange={handleInput}
                    placeholder="Date"
                    style={{
                      width: "256px",
                      border: "1px solid #F79F23",
                    }}
                  />
                  <Input
                    type="time"
                    name="time"
                    value={appointData.time}
                    onChange={handleInput}
                    placeholder="Time"
                    style={{
                      width: "256px",
                      border: "1px solid #F79F23",
                    }}
                  />
                </div>
                <div className="w-full">
                  <select name="" id="">
                    <option value=""></option>
                    <option value="">Mr c</option>
                  </select>
                </div>
                <div className="w-[570px]">
                  <button
                    onClick={handleAppointment}
                    className="w-full bg-btnBg py-[20px] px-[25px] rounded-[5px] text-[22px] text-white font-bold font-roboto leading-[135%] capitalize"
                  >
                    book appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

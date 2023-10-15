import React from "react";
import { BsCreditCard, BsTruck } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlinePhone } from "react-icons/ai";
import Banner2 from "@/assets/Banner2.jpg";

const Main = () => {
  return (
    <>
      <div className="w-full text-sm flex justify-around py-5">
        <div className="flex items-center gap-1">
          <i className="text-[1.25rem] text-secondary">
            <BsCreditCard />
          </i>
          Low price guarantee
        </div>
        <div className="flex items-center gap-1">
          <i className="text-[1.25rem] text-secondary">
            <AiOutlineFieldTime />
          </i>
          Low price guarantee
        </div>{" "}
        <div className="flex items-center gap-1">
          <i className="text-[1.25rem] text-secondary">
            <BsTruck />
          </i>
          Low Price Guarantee
        </div>{" "}
        <div className="flex items-center gap-1">
          <i className="text-[1.25rem] text-secondary">
            <AiOutlinePhone />
          </i>
          Ask Our Experts:{" "}
          <span className="text-secondary font-bold">080 123 4567 890</span>
        </div>
      </div>
      <div className="">{/* <img src={Banner2} alt="" /> */}</div>
    </>
  );
};

export default Main;

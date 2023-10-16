import React from "react";
import { BsCreditCard, BsTruck } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlinePhone } from "react-icons/ai";
import Amino from "@/assets/Amino.webp";
import AminoPrice from "@/assets/AminoPrice.avif";

const Main = () => {
  return (
    <main>
      {/* guarantees */}
      <div className=" w-full text-sm flex items-center gap-8 justify-around py-5 flex-col md:flex-row">
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
          30 Day Online Returns
        </div>
        <div className="flex items-center gap-1">
          <i className="text-[1.25rem] text-secondary">
            <BsTruck />
          </i>
          Free Delivery Worldwide
        </div>
        <div className="flex items-center gap-1">
          <i className="text-[1.25rem] text-secondary">
            <AiOutlinePhone />
          </i>
          Ask Our Experts:
          <span className="text-secondary font-bold">080 123 4567 890</span>
        </div>
      </div>
      {/* main images */}
      <div className="px-10 my-10">
        <div className="bg-lifting-six bg-cover w-3/5 h-[450px] rounded-lg overflow-hidden">
          <div className="relative w-full h-full bg-black/50">
            {/* text */}
            <div className="w-1/3 absolute top-10 left-20">
              <h1 className="text-white font-bold text-[3.5rem]">
                Recipes for athletic performance
              </h1>
              <button className="uppercase text-white mt-5 bg-primary/30 rounded-lg px-5 py-3">
                shop now
              </button>
            </div>
            {/* image */}
            <div className=" absolute right-10 flex flex-col-reverse">
              <img className="w-3/5" src={Amino} alt="Amino" />
              <img className="w-1/5" src={AminoPrice} alt="amino-price" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

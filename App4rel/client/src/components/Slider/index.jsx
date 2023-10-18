import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navBtnStyle =
    "absolute top-[45%] group-hover:block hidden  bg-white/50 text-white hover:text-gray-500 duration-150 cursor-pointer z-10 text-[3rem] ";

  const data = [
    "https://images.unsplash.com/photo-1565127453543-ad97bbbba30d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1596383112233-8b95bc8a2b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  return (
    <>
      <Swiper
        className="relative group"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className="h-[70vh] w-[100vw] object-top object-cover"
            src={data[0]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[70vh] w-[100vw] object-top object-cover"
            src={data[1]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[70vh] w-[100vw] object-top object-cover"
            src={data[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[70vh] w-[100vw] object-top object-cover"
            src={data[3]}
            alt=""
          />
        </SwiperSlide>
        <i className={`${navBtnStyle} left-0 arrow-left`}>
          <MdOutlineArrowBackIosNew />
        </i>
        <i className={`${navBtnStyle} right-0 arrow-right`}>
          <MdOutlineArrowForwardIos />
        </i>
      </Swiper>
    </>
  );
};

export default Slider;

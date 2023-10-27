import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback } from "react";

const Product = () => {
  const sliderRef = useRef(null);
  const navBtnStyle =
    "absolute top-[45%] group-hover:block hidden  bg-white/50 text-white hover:text-gray-500 duration-150 cursor-pointer z-10 text-[3rem] ";
  const images = [
    "https://img.freepik.com/free-photo/front-view-fascinating-woman-red-dress_197531-16787.jpg?w=996&t=st=1698319764~exp=1698320364~hmac=bd2113548c82acdfef8b6fc07d13f3a98bde40f79b17b3238109e126b50403ed",
    "https://img.freepik.com/free-photo/spectacular-woman-with-curly-hairstyle-looking-front_197531-16803.jpg?w=996&t=st=1698319802~exp=1698320402~hmac=20a96730d9d3ffb00c706824b45516a64a1e22c40392a4017e1ad476f6ce55e4",
    "https://img.freepik.com/free-photo/stunning-young-lady-red-dress-laughing-front_197531-16804.jpg?w=996&t=st=1698319831~exp=1698320431~hmac=89b2a1135b9efad0b21bfab941a88b7b2d1ab9140bd343393078c5e25c684b6b",
  ];

  const slideToImage = useCallback((index) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(index);
  }, []);

  return (
    <div className="my-40 flex px-40">
      {/* left */}
      {/* side images */}
      <div className="flex gap-5 w-3/5">
        <div className="relative flex flex-col gap-5">
          <img
            className="w-[100px] h-[100px] object-cover cursor-pointer hover:scale-105 duration-200"
            src={images[0]}
            onClick={() => slideToImage(0)}
            alt="image1"
          />
          <img
            className="w-[100px] h-[100px] object-cover cursor-pointer hover:scale-105 duration-200"
            src={images[1]}
            onClick={() => slideToImage(1)}
            alt="image2"
          />
          <img
            className="w-[100px] h-[100px] object-cover cursor-pointer hover:scale-105 duration-200"
            src={images[2]}
            onClick={() => slideToImage(2)}
            alt="image3"
          />
        </div>
        {/* main image */}
        <div className="">
          <Swiper
            ref={sliderRef}
            className="relative group w-[600px] h-[500px]"
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            grabCursor={true}
            loop={true}
            navigation={{
              nextEl: ".arrow-right",
              prevEl: ".arrow-left",
            }}
          >
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={images[0]}
                alt="image1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={images[1]}
                alt="image2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src={images[2]}
                alt="image3"
              />
            </SwiperSlide>
            <i className={`${navBtnStyle} left-0 arrow-left`}>
              <MdOutlineArrowBackIosNew />
            </i>
            <i className={`${navBtnStyle} right-0 arrow-right`}>
              <MdOutlineArrowForwardIos />
            </i>
          </Swiper>
        </div>
      </div>
      {/* right */}
      <div></div>
    </div>
  );
};

export default Product;

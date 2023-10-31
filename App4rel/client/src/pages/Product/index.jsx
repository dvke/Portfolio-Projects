import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback } from "react";
import { CartContext } from "../../context/CartContext";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
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
    <div className="my-40 flex md:flex-row flex-col gap-10 lg:px-40 px-20">
      {/* left */}
      {/* side images */}
      <div className="flex  gap-3 ">
        <div className="relative hidden md:flex flex-col w-[5vw] gap-5">
          <img
            className="w-[80px] h-[80px] object-cover cursor-pointer hover:scale-105 duration-200"
            src={images[0]}
            onClick={() => slideToImage(0)}
            alt="image1"
          />
          <img
            className="w-[80px] h-[80px] object-cover cursor-pointer hover:scale-105 duration-200"
            src={images[1]}
            onClick={() => slideToImage(1)}
            alt="image2"
          />
          <img
            className="w-[80px] h-[80px] object-cover cursor-pointer hover:scale-105 duration-200"
            src={images[2]}
            onClick={() => slideToImage(2)}
            alt="image3"
          />
        </div>
        {/* main image */}
        <div className="md:w-[40vw] w-full h-[500px]">
          <Swiper
            ref={sliderRef}
            className="relative group w-full h-full"
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
      <div className="flex gap-4 flex-col">
        {/* product name */}
        <div className="text-3xl font-bold">Red summer dress</div>
        {/* price */}
        <div className="font-bold text-black/60 text-2xl">$100</div>
        {/* color */}
        <div className="uppercase">
          <span className="font-bold text-sm">color: </span>red
        </div>
        {/* quantity */}
        <div>
          <button
            className="bg-[#bcbbbb] px-3"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>{" "}
          {quantity}{" "}
          <button
            className="bg-[#bcbbbb] px-3"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        {/* add to cart */}
        <button
          onClick={() => addToCart()}
          className="uppercase flex items-center mb-10 justify-center bg-blue-600 hover:bg-blue-800 duration-200 active:scale-95 py-5 text-white"
        >
          add to cart
          <AiOutlineShoppingCart className="ml-3 text-xl" />
        </button>
        {/* delivery */}
        <div className="flex border items-center justify-center gap-5 text-black/60 p-10">
          <BsTruck className="text-xl" />
          <span className="text-sm">Free Delivery</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

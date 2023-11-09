import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="mx-5 mt-[200px]">
      <div className=" flex flex-col md:overflow-hidden  md:grid md:grid-rows-2 grid-cols-4 gap-1 w-full md:max-h-[600px] border">
        {/* sale */}
        <Link
          to="/products/5"
          className="flex justify-center items-center relative"
        >
          <h1 className="text-4xl text-white absolute z-10">SALE</h1>
          <div className="w-full h-full bg-black/40 absolute duration-150"></div>
          <img
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-29.jpg?size=626&ext=jpg&ga=GA1.1.1203463017.1697382872&semt=ais"
            alt="sale"
          />
        </Link>
        {/* women */}
        <Link
          to="products/1"
          className="row-span-2 relative flex items-center justify-center"
        >
          <h1 className="text-4xl text-white absolute z-10">WOMEN</h1>

          <div className="w-full h-full bg-black/30 absolute duration-150"></div>
          <img
            className="object-cover w-full md:h-full h-[300px] "
            src="https://img.freepik.com/free-photo/confident-african-woman-with-perfect-curly-hairs-casual-orange-blouse-golden-pants-posing-beige-wall_273443-4075.jpg?w=360&t=st=1697727997~exp=1697728597~hmac=f59bf894cb973385e0c9fdecc773cf64e7e492d3aad4f87dede868f2ad977469"
            alt=""
          />
        </Link>
        {/* new */}
        <Link
          to="products/3"
          className="relative flex items-center justify-center "
        >
          <h1 className="text-4xl text-white absolute z-10">NEW</h1>

          <div className="w-full h-full bg-black/30 absolute duration-150"></div>
          <img
            className="object-cover w-full h-full overflow-hidden"
            src="https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?size=626&ext=jpg&ga=GA1.1.1203463017.1697382872&semt=ais"
            alt=""
          />
        </Link>
        {/* accessories */}
        <Link
          to="products/4"
          className="relative flex items-center justify-center overflow-hidden"
        >
          <h1 className="text-4xl text-white absolute z-10">ACCESSORIES</h1>

          <div className="w-full h-full bg-black/30 absolute duration-150"></div>
          <img
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176694.jpg?size=626&ext=jpg&ga=GA1.1.1203463017.1697382872&semt=sph"
            alt=""
          />
        </Link>
        {/* men */}
        <Link
          to="products/2"
          className="relative flex items-center justify-center "
        >
          <h1 className="text-4xl text-white absolute z-10">MEN</h1>

          <div className="w-full h-full bg-black/30 absolute duration-150"></div>
          <img
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/cheerful-young-pretty-bearded-dark-skinned-man-with-curly-black-hair-laughing-happily-showing-aside-with-raised-forefingers-standing-against-purple-casual-sporty-wear_295783-7842.jpg?size=626&ext=jpg&ga=GA1.1.1203463017.1697382872&semt=ais"
            alt="man"
          />
        </Link>
        {/* shoes */}
        <Link
          to="products/6"
          className="relative flex items-center justify-center col-span-2"
        >
          <h1 className="text-4xl text-white absolute z-10">SHOES</h1>

          <div className="w-full h-full bg-black/30 absolute duration-150"></div>
          <img
            className="object-cover w-full h-full"
            src="https://img.freepik.com/free-photo/footwear-two-fashion-leather-white_1203-6541.jpg?t=st=1697810317~exp=1697810917~hmac=af0dfe8dbe71d34a0c0847b623bb8ee88fdacccc11b153034f4706dfc9a9afee"
            alt=""
          />
        </Link>
      </div>
    </section>
  );
};

export default Categories;

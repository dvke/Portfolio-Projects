import List from "../../components/List";
import React, { useEffect, useState } from "react";
import { FaShoePrints } from "react-icons/fa";
import { GiSkirt, GiLabCoat } from "react-icons/gi";
import { useParams } from "react-router-dom";

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[97px]">
      {/* top */}
      <div className="flex justify-center py-2 bg-[#3e3b3b] text-white uppercase">
        free shipping between october 23rd and december 31st
      </div>
      <div className="uppercase py-7 px-10 sticky z-10 top-20 bg-white/90 text-center font-bold text-xl border-b-2">
        Products Category Name
      </div>
      <div className="md:flex">
        {/* left */}
        <div className=" md:w-1/3 flex md:flex-col justify-center md:justify-start items-center py-5  md:py-10 ">
          <div className="sticky top-[12.5rem]">
            {/* type */}
            <div className="flex md:flex-col  gap-5 md:border-b-2 pb-8">
              <h2 className="uppercase font-bold">Product Type</h2>
              {/* inputs */}
              <div className="flex items-center">
                <input
                  className="hidden peer"
                  type="checkbox"
                  id="1"
                  value={1}
                />
                <label
                  className="py-2 border w-full  peer-hover:bg-gray-200 px-2  peer-checked:bg-black peer-checked:text-white duration-100 cursor-pointer flex items-center justify-between"
                  htmlFor="1"
                >
                  Shoes
                  <i>
                    <FaShoePrints />
                  </i>
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  className="hidden peer"
                  type="checkbox"
                  id="2"
                  value={2}
                />
                <label
                  className="py-2 border w-full  peer-hover:bg-gray-200 px-2    peer-checked:bg-black peer-checked:text-white duration-100 cursor-pointer flex items-center justify-between"
                  htmlFor="2"
                >
                  Skirts
                  <i>
                    <GiSkirt />
                  </i>
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  className="hidden peer"
                  type="checkbox"
                  id="3"
                  value={3}
                />
                <label
                  className="py-2 border w-full  peer-hover:bg-gray-200 px-2    peer-checked:bg-black peer-checked:text-white duration-100 cursor-pointer flex items-center justify-between"
                  htmlFor="3"
                >
                  Coats
                  <i>
                    <GiLabCoat />
                  </i>
                </label>
              </div>
            </div>
            {/* price */}
            <div className="flex md:flex-col  gap-5 md:border-b-2 pb-8">
              <h2 className="font-bold  uppercase">Filter by price</h2>
              <div className="relative">
                <span>0</span>
                <input
                  className="range accent-blue-500"
                  type="range"
                  min={0}
                  max={1000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <span className="">{maxPrice}</span>
              </div>
            </div>
            {/* sort */}
            <div className="flex md:flex-col  gap-5 pb-8">
              <h2 className="font-bold  uppercase">Sort</h2>
              <div className="flex gap-2 items-center accent-black accent">
                <input
                  type="radio"
                  name="prive"
                  id="asc"
                  value="asc"
                  onChange={(e) => setSort("asc")}
                />
                <label htmlFor="asc">Price low to high</label>
              </div>
              <div className="flex gap-2 items-center accent-black accent">
                <input
                  type="radio"
                  name="prive"
                  id="desc"
                  value="desc"
                  onChange={(e) => setSort("desc")}
                />
                <label htmlFor="desc">Price high to low</label>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:px-2 flex justify-center">
          {/* <div className="h-1/6 w-full md:block hidden">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="catimg"
            />
          </div> */}
          <div className="md:mt-10 ">
            <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

// @ts-nocheck
import axios from "axios";
import Card from "../../components/Card";
import React, { useEffect, useState } from "react";

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products?populate=*`,
          {
            headers: {
              Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
          }
        );
        setData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <section className="my-20 px-4 ">
      {/* header */}
      <div className="uppercase font-bold text-2xl px-10 mb-10">
        {type} products
      </div>
      {/* Cards */}
      <div className="flex overflow-x-hidden scroll-smooth hover:overflow-x-scroll justify-center items-center  gap-5">
        {data.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

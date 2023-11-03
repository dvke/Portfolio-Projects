import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import React from "react";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;

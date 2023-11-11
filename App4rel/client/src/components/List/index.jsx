import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card";
import React from "react";
import Loader from "../Loader";

const List = ({ categoryId, maxPrice, sort, subCategories }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${subCategories.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filter][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-2">
      {loading ? (
        <div className="absolute w-10 m-auto">
          <Loader />
        </div>
      ) : (
        data.map((item) => <Card product={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;

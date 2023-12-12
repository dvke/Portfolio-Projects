// @ts-nocheck
import Card from "../../components/Card";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <section className="my-20 px-4">
      {/* header */}
      <div className="uppercase font-bold text-2xl px-10 mb-10">
        {type} products
      </div>
      {/* Cards */}
      <div className="flex overflow-x-auto scrollbar-hide  items-center gap-3 sm:gap-5">
        {error ? (
          <div className="text-red-500">Something went wrong</div>
        ) : loading ? (
          <div className="w-10 m-auto">
            <Loader />
          </div>
        ) : (
          data?.map((product) => <Card product={product} key={product.id} />)
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;

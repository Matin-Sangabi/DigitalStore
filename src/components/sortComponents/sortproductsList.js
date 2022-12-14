import { useState } from "react";
import { useProducts } from "../../provider/productsProvider";
export const filters = [
  { name: "Most Popular", value: "popular" },
  { name: "The Offer", value: "Offer" },
  { name: "The most expensive", value: "expensive" },
  { name: "The cheapest", value: "cheapest" },
];
export const switchFilterProducts = (
  e,
  filterProducts,
  setFilterProducts,
  products
) => {
  switch (e) {
    case "expensive": {
      const sortFilter = [...filterProducts].sort((a, b) => {
        return a.price > b.price ? -1 : 1;
      });
      return setFilterProducts(sortFilter);
    }
    case "cheapest": {
      const sortFilter = [...filterProducts].sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });
      return setFilterProducts(sortFilter);
    }
    case "Offer": {
      const sortFilter = [...filterProducts].filter((p) => p.offPrice !== 0);
      return setFilterProducts(sortFilter);
    }
    default:
      return setFilterProducts([...products]);
  }
};
const SortProductsList = ({ filterProducts, setFilterProducts }) => {
  const products = useProducts();
  const [isActive, setIsActive] = useState("popular");
  const filteredProductsListItem = (e, item) => {
    setIsActive(item);
    switchFilterProducts(
      e.target.value,
      filterProducts,
      setFilterProducts,
      products
    );
  };
  return (
    <>
      {filters.map((item, index) => {
        return (
          <button
            key={index}
            value={item.value}
            onClick={(e) => filteredProductsListItem(e, item.value)}
            type="button"
            className={
              isActive === item.value
                ? "text-gray-800 py-2  font-semibold text-base transition-all ease-linear duration-300 relative"
                : "text-gray-500 text-sm hover:py-2 hover:border-b hover:border-gray-800 hover:text-gray-800 transition-all ease-linear duration-300 hover:font-semibold"
            }
          >
            {isActive === item.value && (
              <span className="p-1 bg-cyan-900 rounded-full absolute right-0 top-0"></span>
            )}
            {item.name}
          </button>
        );
      })}
    </>
  );
};

export default SortProductsList;

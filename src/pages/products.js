import Layout from "../layout/layout";
import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProducts } from "../provider/productsProvider";
import { HiOutlineSortDescending } from "react-icons/hi";
import MobileProducts from "../components/products/MobileProducts";
import SortSectionsProducts from "../components/sortComponents/sortProducts";
import SortProductsList from "../components/sortComponents/sortproductsList";
import { calcDiscount } from "../utils/CalculateProductsOffer";

const ProductsPage = () => {
  const [search] = useSearchParams();
  const productsCategories = search.get("cat") || "";
  const products = useProducts();
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    if (productsCategories !== "") {
      const filter = products.filter(
        (p) => p.categories === productsCategories
      );
      setFilterProducts(filter);
    } else {
      setFilterProducts(products);
    }
  }, [products, productsCategories]);

  return (
    <Layout title={"Products"}>
      <MobileProducts
        products={products}
        setFilterProducts={setFilterProducts}
        filterProducts={filterProducts}
      />
      <div className="container mx-auto max-w-screen-xl px-4 grid grid-cols-12 grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 pt-20">
        <SortSection
          products={products}
          setFilterProducts={setFilterProducts}
        />
        <div className="col-span-12 md:col-span-8 lg:col-span-9 bg-gray-300 shadow-md rounded-md hidden md:flex items-center p-4">
          <div className="py-2 p-2 bg-cyan-900 text-slate-100 rounded-md">
            <HiOutlineSortDescending className="w-5 h-5" />
          </div>
          <FilterProductsList
            filterProducts={filterProducts}
            setFilterProducts={setFilterProducts}
          />
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-0 md:mt-8">
          <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto gap-y-10 gap-x-4 px-4 pb-20">
            <ProductsList filterProducts={filterProducts} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;

const SortSection = ({ products, setFilterProducts }) => {
  return (
    <div className="hidden md:block md:col-span-4 lg:col-span-3  row-span-2 sticky h-auto">
      <div className="bg-gray-300 shadow-lg p-5 rounded-xl sticky top-[4.8rem] max-h-[calc(90vh-120px)] overflow-auto scroll-smooth scrollbar">
        <SortSectionsProducts
          products={products}
          setFilterProducts={setFilterProducts}
        />
      </div>
    </div>
  );
};

const ProductsList = ({ filterProducts }) => {
  return (
    <>
      {filterProducts.map((item, index) => {
        return (
          <NavLink
            to={`/product/${item._id}`}
            className="bg-gray-300 shadow-md rounded-md flex flex-col p-2 gap-8 group hover:shadow-2xl hover:shadow-gray-800 transition-all ease-in-out duration-300 relative"
            key={index}
          >
            <div className="w-20 md:w-28 h-16 md:h-20 flex justify-center items-center group-hover:py-2 bg-opacity-80 bg-cyan-900 rounded-tr-3xl rounded-br-3xl rounded-tl-xl shadow-xl  mx-auto mb-8">
              <img
                src={`/images/${item.image[0].path}`}
                alt={item.name}
                className="max-w-full h-auto object-cover rotate-12"
              />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-xs md:text-base xl:text-sm  text-cyan-900 h-8">
                {item.name}
              </h1>
              <h1 className="text-gray-400">{item.categories}</h1>
              <div className="flex w-full justify-between mt-4 items-center">
                <div className="flex flex-col">
                  <h1 className="text-sm md:text-base text-yellow-600 font-bold ">
                    {Boolean(item.offPrice)
                      ? item.offPrice
                      : item.price}
                    $
                  </h1>
                  <h1
                    className={`${
                      item.offPrice
                        ? "text-sm text-gray-400 font-semibold line-through block"
                        : "hidden"
                    }`}
                  >
                    {item.price}$
                  </h1>
                </div>
                {Boolean(item.offPrice) && (
                  <span className="w-8 h-8  text-[10px] rounded-full bg-cyan-900 font-semibold flex justify-center items-center text-gray-100  ">
                    {calcDiscount(item?.price , item?.offPrice)}%
                  </span>
                )}
              </div>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

const FilterProductsList = ({ filterProducts, setFilterProducts }) => {
  return (
    <div className="flex items-center gap-x-8 px-4">
      <SortProductsList
        filterProducts={filterProducts}
        setFilterProducts={setFilterProducts}
      />
    </div>
  );
};

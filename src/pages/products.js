import Layout from "../layout/layout";
import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProducts } from "../provider/productsProvider";
import { Disclosure } from "@headlessui/react";
import {
  HiOutlineViewGrid,
  HiOutlineDeviceTablet,
  HiChevronDown,
  HiOutlineSortDescending,
} from "react-icons/hi";
import {
  IoPhonePortraitOutline,
  IoLaptopOutline,
  IoWatchOutline,
  IoRecordingOutline,
} from "react-icons/io5";
import RangeSlider from "../components/RangerSlider/RangerSlider";

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
    <Layout>
      <div className="container mx-auto max-w-screen-xl px-4 grid grid-cols-12 grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 pt-32">
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
        <div className="col-span-12 md:col-span-8 lg:col-span-9 mt-8">
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-8 px-4 ">
            <ProductsList filterProducts={filterProducts} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
const SortProducts = [
  {
    title: "Categories",
    content: [
      { name: "All", path: "", icon: () => <HiOutlineViewGrid /> },
      { name: "IPhone", path: "phone", icon: () => <IoPhonePortraitOutline /> },
      { name: "MacBook", path: "Mac", icon: () => <IoLaptopOutline /> },
      { name: "AppleWatch", path: "watch", icon: () => <IoWatchOutline /> },
      { name: "AirPod", path: "air pod", icon: () => <IoRecordingOutline /> },
      { name: "IPad", path: "ipad", icon: () => <HiOutlineDeviceTablet /> },
    ],
  },
  {
    title: "colors",
    content: [
      { name: "Red", path: "Red" },
      { name: "Blue", path: "Blue" },
      { name: "Black", path: "Black" },
      { name: "gray", path: "gray" },
      { name: "purple", path: "purple" },
    ],
  },
];
const SortSection = ({ products, setFilterProducts }) => {
  
  const changeHandler = (value) => {

    const filter = [...products].filter((p) => p.price >= value.min && p.price<=value.max);
    setFilterProducts(filter)
  };
  return (
    <div className="hidden md:block md:col-span-4 lg:col-span-3  row-span-2">
      <div className="bg-gray-300 shadow-lg p-5 rounded-xl ">
        {SortProducts.map((product, index) => {
          return (
            <div key={index}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full flex justify-between items-center border-b-2 py-2 border-gray-600 text-gray-800">
                      <h1 className="font-bold text-lg">{product.title}</h1>
                      <HiChevronDown
                        className={`${
                          open
                            ? "rotate-180 transform transition-all ease-in-out duration-500"
                            : "rotate-0 transition-all ease-in-out duration-500"
                        }  h-5 w-5 text-gray-800`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pt-4 pb-2 text-gray-700">
                      <ul
                        className={
                          "mt-4 flex flex-col gap-2 mb-6 transition-all ease-in-out duration-500"
                        }
                      >
                        {product.content.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="flex gap-x-2 items-center"
                            >
                              {item.icon && (
                                <span className="p-2 rounded-full bg-gray-700 bg-opacity-75 text-lg text-gray-200">
                                  {item.icon()}
                                </span>
                              )}
                              <NavLink
                                to={`/products?cat=${item.path}`}
                                className={
                                  "block p-2 w-full hover:bg-gray-500 transition-all ease-in-out duration-500 rounded-md text-gray-900 hover:text-gray-200"
                                }
                              >
                                {item.name}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
        <div>
          <Disclosure defaultOpen>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex justify-between items-center border-b-2 py-2 border-gray-600 text-gray-800">
                  <h1 className="font-bold text-lg">Price : </h1>
                  <HiChevronDown
                    className={`${
                      open
                        ? "rotate-180 transform transition-all ease-in-out duration-500"
                        : "rotate-0 transition-all ease-in-out duration-500"
                    }  h-5 w-5 text-gray-800`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2 text-gray-700">
                    <RangeSlider  changeHandler={changeHandler}/>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
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
            className="bg-gray-300 shadow-md rounded-md flex flex-col p-2 gap-8 group hover:shadow-2xl hover:shadow-gray-800 transition-all ease-in-out duration-300"
            key={index}
          >
            <div className="w-20 md:w-28 h-16 md:h-20 flex justify-center items-center group-hover:py-2 bg-opacity-80 bg-cyan-900 rounded-tr-3xl rounded-br-3xl rounded-tl-xl shadow-xl  mx-auto mb-8">
              <img
                src={require(`./../assets/images/${item.image[0].path}`)}
                alt={item.name}
                className="max-w-full h-auto object-cover rotate-12"
              />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-xs md:text-base xl:text-sm  text-cyan-900">
                {item.name}
              </h1>
              <h1 className="text-gray-400">{item.categories}</h1>
              <div className="flex w-full justify-between mt-4 items-center">
                <h1 className="text-sm md:text-base text-yellow-600 font-bold ">
                  $ {item.price}
                </h1>
                <button className="w-8 h-8 bg-cyan-900 rounded-full text-slate-100 flex justify-center items-center text-lg group transition-all ease-linear duration-500 ">
                  <span className="group-hover:rotate-[360deg] transition-all ease-in-out duration-500">
                    +
                  </span>
                </button>
              </div>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

const FilterProductsList = ({ filterProducts, setFilterProducts }) => {
  const [isActive, setIsActive] = useState("popular");
  const filters = [
    { name: "Most Popular", value: "popular" },
    { name: "Most Visited", value: "Visited" },
    { name: "the most expensive", value: "expensive" },
    { name: "The cheapest", value: "cheapest" },
  ];
  const filteredProductsListItem = (e, item) => {
    setIsActive(item);
    switch (e.target.value) {
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
      default:
        return setFilterProducts([...filterProducts]);
    }
  };
  return (
    <div className="flex items-center gap-x-8 px-4">
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
    </div>
  );
};


//range slider

/*
<input
max="1200"
step="100"
type="range"
onChange={changeHandler}
className="mb-6 w-full h-1 bg-gray-500 rounded-lg appearance-none cursor-pointer range-sm "
/>
*/

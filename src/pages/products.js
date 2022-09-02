import Layout from "../layout/layout";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProducts } from "../provider/productsProvider";
import { Disclosure } from "@headlessui/react";
import {
  HiOutlineViewGrid,
  HiOutlineDeviceTablet,
  HiChevronDown,
} from "react-icons/hi";
import {
  IoPhonePortraitOutline,
  IoLaptopOutline,
  IoWatchOutline,
  IoRecordingOutline,
} from "react-icons/io5";

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
  console.log(filterProducts);
  return (
    <Layout>
      <div className="container mx-auto max-w-screen-xl px-4 grid grid-cols-12 grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 pt-36">
        <SortSection />
        <div className="col-span-12 md:col-span-8 lg:col-span-9 ">
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-8 px-4 ">
            {filterProducts.map((item, index) => {
              return (
                <div
                  className="bg-gray-300 shadow-md rounded-md flex flex-col p-2 gap-8"
                  key={index}
                >
                  <div className="w-20 md:w-28 h-16 md:h-20 flex justify-center items-center bg-opacity-80 bg-cyan-900 rounded-tr-3xl rounded-br-3xl rounded-tl-xl shadow-xl  mx-auto mb-8">
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
                      <Link
                        to={`/product/${item._id}`}
                        className="w-8 h-8 bg-cyan-900 rounded-full text-slate-100 flex justify-center items-center text-lg group transition-all ease-linear duration-500 "
                      >
                        <span className="group-hover:rotate-[360deg] transition-all ease-in-out duration-500">
                          +
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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
      { name: "IPhone", path: "phone", icon: () => <IoPhonePortraitOutline/> },
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
const SortSection = () => {
  return (
    <div className="hidden md:block md:col-span-4 lg:col-span-3  row-span-2">
      <div className="bg-gray-300 shadow-lg p-5 rounded-xl ">
        {SortProducts.map((product, index) => {
          return (
            <div key={index}>
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button  className="w-full flex justify-between items-center border-b-2 py-2 border-gray-600 text-gray-800">
                      <h1 className="font-bold text-lg">{product.title}</h1>
                      <HiChevronDown
                        className={`${
                          open 
                            ? "rotate-180 transform transition-all ease-in-out duration-500"
                            : ""
                        }  h-5 w-5 text-gray-800`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pt-4 pb-2 text-gray-700">
                      <ul
                        className={"mt-4 flex flex-col gap-2 mb-6 transition-all ease-in-out duration-500"}
                      >
                        {product.content.map((item, index) => {
                          return (
                            <li key={index} className="flex gap-x-2 items-center">
                              {item.icon && <span className="p-2 rounded-full bg-cyan-900 bg-opacity-75 text-lg text-gray-200">{item.icon()}</span>}
                              <NavLink
                                to={`/products?cat=${item.path}`}
                                className={
                                  "block p-2 w-full hover:bg-cyan-900 transition-all ease-in-out duration-500 rounded-md text-gray-900 hover:text-gray-200"
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
      </div>
    </div>
  );
};

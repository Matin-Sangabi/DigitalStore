import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
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
import { BiCategoryAlt, BiColorFill, BiWallet } from "react-icons/bi";

import RangeSlider from "../RangerSlider/RangerSlider";
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
    symbol: () => <BiCategoryAlt />,
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
    symbol: () => <BiColorFill />,
  },
];

const SortSectionsProducts = ({ products, setFilterProducts }) => {
  const changeHandler = (value) => {
    const filter = [...products].filter(
      (p) => p.price >= value.min && p.price <= value.max
    );
    setFilterProducts(filter);
  };
  return (
    <>
      {SortProducts.map((product, index) => {
        return (
          <div key={index}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full flex justify-between items-center border-b-2 py-2  border-gray-600 text-gray-800">
                    <h1 className="font-bold text-lg flex items-center gap-x-2">
                      <span className="text-2xl text-gray-700">{product.symbol()}</span>
                      <span>{product.title}</span>
                    </h1>
                    <HiChevronDown
                      className={`${
                        open
                          ? "rotate-180 transform transition-all ease-in-out duration-500"
                          : "rotate-0 transition-all ease-in-out duration-500"
                      }  h-5 w-5 text-gray-800`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 pb-2 text-gray-700 overflow-auto h-64 scroll-smooth scrollbar">
                    <ul
                      className={
                        "mt-4 flex flex-col gap-2 mb-8 transition-all ease-in-out duration-500 "
                      }
                    >
                      {product.content.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex gap-x-2 items-center mb-4"
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
        <Disclosure className="mx-auto">
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center border-b-2 py-2 border-gray-600 text-gray-800">
                <h1 className="font-bold text-lg flex items-center gap-x-2">
                  <span className="text-2xl text-gray-700"><BiWallet/></span>
                  <span>Price</span>
                </h1>
                <HiChevronDown
                  className={`${
                    open
                      ? "rotate-180 transform transition-all ease-in-out duration-500"
                      : "rotate-0 transition-all ease-in-out duration-500"
                  }  h-5 w-5 text-gray-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2 p-14 md:p-0 text-gray-700">
                <RangeSlider changeHandler={changeHandler} />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default SortSectionsProducts;

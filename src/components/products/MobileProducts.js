import { useState , useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import {
  HiOutlineSortDescending,
  HiOutlineFilter,
  HiOutlineX,
  HiCheckCircle
} from "react-icons/hi";

import { filters, switchFilterProducts } from "../sortComponents/sortproductsList";
import SortSectionsProducts from "../sortComponents/sortProducts";
import MobileNav from "./../mobileNav/MobileNav";
const MobileProducts = ({ products, setFilterProducts, filterProducts }) => {
  const [dropFilter, setDropFilter] = useState({ open: false, id: "" });
  const [selected, setSelected] = useState(filters[0]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [ShowSort , setShowSort] = useState();
  const [MobileSort , setMobileSort] = useState(false);
  useEffect(()=>{
    const changeNavbarColor = () =>{
      const scroll = window.scrollY;
      setShowSort(scroll);
      
      if(scroll >= ShowSort){
         setMobileSort(false);
      }
      else{
        setMobileSort(true);
      }
      if(scroll === 0){
        setMobileSort(false)
      }
    }
    window.addEventListener("scroll" , changeNavbarColor)
  } , [ShowSort]) 
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowSize);
    if (windowSize > 768) {
      setDropFilter(false);
    }
    return () => window.removeEventListener("resize", updateWindowSize);
  }, [windowSize]);
  
  return (
    <>
      <div
        className={`w-screen h-screen bg-gray-400 bg-opacity-70 fixed top-0 left-0 z-50 block md:hidden transition-all ease-in-out duration-500  ${
          dropFilter.open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className={`absolute bottom-0 p-4 w-full h-2/3 bg-gray-300 rounded-t-2xl overflow-auto`}
        >
          <div className="h-full flex flex-col">
            <div className="w-full flex items-center justify-between mb-4">
              <h1 className="font-semibold text-cyan-900">
                {dropFilter.id === 1 ? "Filter" : "Visited"}
              </h1>
              <span
                className="text-xl text-cyan-900 "
                onClick={() => {
                  setDropFilter({ open: false });
                }}
              >
                <HiOutlineX />
              </span>
            </div>
            {dropFilter.id === 1 ? (
              <>
                <div className="w-full flex flex-col gap-y-4">
                  <SortSectionsProducts
                    products={products}
                    setFilterProducts={setFilterProducts}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-full flex flex-col p-2 gap-y-4">
                  <RadioGroup value={selected} onChange={setSelected}>
                    <div className="space-y-2">
                      {filters.map((plan) => (
                        <RadioGroup.Option
                          key={plan.name}
                          value={plan}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "focus:ring-0"
                                : ""
                            }
                  ${
                    checked ? "bg-cyan-900 bg-opacity-90 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                          }
                        >
                          {({checked }) => (
                            <>
                              <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-semibold   ${
                                        checked
                                          ? "text-gray-200"
                                          : "text-cyan-900"
                                      }`}
                                    >
                                      {plan.name}
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="shrink-0 text-gray-200 text-lg">
                                    <HiCheckCircle/>
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}
            <div className="absolute bottom-2 right-0 p-2 bg-gray-300">
              <div className="flex w-full justify-center">
                <button
                  type="button"
                  className="p-2 text-2xl bg-cyan-900 text-gray-300 rounded-md hover:ring hover:ring-cyan-900 hover:ring-offset-2"
                  onClick={() =>{
                    setDropFilter({open : false})
                    dropFilter.id=== 2 && switchFilterProducts(selected.value , filterProducts , setFilterProducts) 
                  }}
                >
                  {dropFilter.id === 1 ? <HiOutlineFilter/> : <HiOutlineSortDescending/>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 relative">
        <MobileNav />
        <div className={`w-full flex gap-x-2 p-4  md:hidden transition-all ease-in-out duration-500 ${MobileSort ? 'fixed z-40 left-0 top-0 ' : "relative mt-6"}`}>
          <div className="flex-1 bg-gray-200 shadow-md p-2 rounded-md flex items-center gap-x-2">
            <span className="text-cyan-900 text-2xl pt-1">
              <HiOutlineSortDescending />
            </span>
            <span
              className="font-semibold text-sm text-gray-800"
              onClick={() => setDropFilter({ open: true, id: 2 })}
            >
              {selected.name}
            </span>
          </div>
          <div
            className="flex-1 bg-gray-200 shadow-md p-2 rounded-md flex items-center gap-x-2"
            onClick={() => setDropFilter({ open: true, id: 1 })}
          >
            <span className="text-xl text-cyan-900">
              <HiOutlineFilter />
            </span>
            <span className="text-sm text-gray-800 font-semibold">Filter</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileProducts;

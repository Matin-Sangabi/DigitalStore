import Layout from "../layout/layout";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProducts } from "../provider/productsProvider";
import { HiOutlineViewGrid , HiOutlineDeviceTablet } from "react-icons/hi";
import { IoPhonePortraitOutline , IoLaptopOutline , IoWatchOutline ,IoRecordingOutline } from "react-icons/io5";
const categories = [
  {name : "All" , path : "" , icon : () => HiOutlineViewGrid },
  {name : "IPhone" , path : "phone" , icon : () => IoPhonePortraitOutline },
  {name : "MacBook" , path : "Mac" , icon : () => IoLaptopOutline },
  {name : "AppleWatch" , path : "watch" , icon : () => IoWatchOutline },
  {name : "AirPod" , path : "air pod" , icon : () => IoRecordingOutline },
  {name : "IPad" , path : "ipad" , icon : () => HiOutlineDeviceTablet },
]


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
  console.log(filterProducts)
  return (
    <Layout>
      <div className="container mx-auto max-w-screen-xl px-4 grid grid-cols-12 grid-rows-[55px_minmax(500px,_1fr)] md:gap-8">
        <div className="hidden md:block md:col-span-4 lg:col-span-3  row-span-2">
          <div className="bg-gray-300 shadow-md p-5 rounded-xl max-h-[calc(300vh-120px)] overflow-auto  sticky md:top-[4.3rem] lg:top-[6.7rem]">
            <h1 className="text-xl font-bold text-gray-800 border-b-2 py-2 border-gray-600">
              Categories
            </h1>
            <ul className="mt-4 flex flex-col gap-2">
              {categories.map((cat , index)=>{
                return(
                  <li key={index}>
                    <NavLink to={`/products?cat=${cat.path}`} className="block p-2 hover:bg-gray-500 transition-all ease-in-out duration-500 rounded-md text-gray-900 hover:text-gray-200">{cat.name}</NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 ">
          <section className="pt-36 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-8 px-4 ">
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

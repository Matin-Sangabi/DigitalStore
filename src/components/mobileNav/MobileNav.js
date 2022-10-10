import { useEffect } from "react";
import LogoIcon from "../../utils/Logo";
import {
  RiSearch2Line,
  RiShoppingBag3Line,
  RiArrowLeftLine,
} from "react-icons/ri";
import { useCart } from "../../provider/cartProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../../provider/productsProvider";
import { searchProducts } from "../../utils/searchProducts";
const Categories = [
  { name: "Phone", cat: "phone" },
  { name: "Watch", cat: "watch" },
  { name: "Mac", cat: "Mac" },
  { name: "Air pods", cat: "air pod" },
  { name: "Ipad", cat: "ipad" },
];

const MobileNav = () => {
  const { cart } = useCart();
  const [show, setShow] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [inputSearch, setInputSearch] = useState("");
  const [showCat, setShowCat] = useState(true);
  const [filterProducts , setFilterProducts] = useState([]);
  const products = useProducts();
  
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowSize);
    if (windowSize > 768) {
      setShow(false);
    }
    return () => window.removeEventListener("resize", updateWindowSize);
  }, [windowSize]);

  const searchHandler = (e) => {
    const value = e.target.value;
    setInputSearch(value);
    value.length!== 0 ? setShowCat(false) : setShowCat(true); 
    const filter = searchProducts(products , e);
    setFilterProducts(filter)
  };

  console.log(filterProducts)
  return (
    <section className="w-full max-w-screen-xl px-4 pt-4 flex md:hidden justify-between items-center">
      <div>
        <LogoIcon />
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <div>
          <button
            type="button"
            onClick={() => setShow(!show)}
            className={`text-2xl text-gray-700 ${show ? "hidden" : "block"}`}
          >
            <RiSearch2Line />
          </button>
        </div>
        <div
          className={`w-screen h-screen fixed top-4 left-0 bg-gray-300 bg-opacity-90 z-50 overflow-hidden transition-all ease-in-out duration-700  ${
            show ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="text-xl text-cyan-900"
            >
              <RiArrowLeftLine />
            </button>
            <span className="text-xl text-cyan-900">
              <RiSearch2Line />
            </span>
            <input
              type="search"
              value={inputSearch}
              onChange={searchHandler}
              placeholder="search"
              className="bg-transparent w-full outline-none border-0 border-cyan-900 text-cyan-900 font-semibold border-b-2 p-2 placeholder:text-cyan-900"
            />
          </div>
          <div className="px-4 mt-4 flex flex-col gap-y-2  text-cyan-900">
            {showCat && (
              <>
                <h1 className="font-semibold">Categories:</h1>
                <div className="flex w-full items-center justify-center flex-wrap gap-4 mt-2">
                  {Categories.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={`products?cat=${item.cat}`}
                        className="p-2 bg-cyan-900 bg-opacity-95 text-gray-200 w-24 rounded-md text-center shadow-md shadow-gray-900 focus:ring focus:ring-offset-2 focus:ring-cyan-900 hover:ring hover:ring-offset-2 hover:ring-cyan-900 transition-all ease-out duration-500"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
            <div className={`flex flex-col gap-y-4 overflow-auto h-screen z-0 ${inputSearch.length !== 0 ? "translate-y-0 duration-700 transition-all ease-in-out" :"translate-y-full opacity-0"} `}>
            {filterProducts.length !== 0 ? (
              filterProducts.map((item) => {
                return (
                  <Link
                    to={`/product/${item._id}`}
                    key={item._id}
                    className="flex gap-x-2 hover:bg-gray-500  hover:text-slate-100 hover:rounded-md group border-0 border-b-2 border-gray-400 transition-all ease-in-out duration-300"
                  >
                    <div className="w-16 p-1">
                      <img
                        src={require(`./../../assets/images/${item.image[0].path}`)}
                        alt="name"
                        className="max-w-full h-auto object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-around p-2">
                      <h1 className="font-semibold text-slate-800 text-sm group-hover:text-slate-100">
                        {item.name}
                      </h1>
                      <h1 className="text-cyan-900 group-hover:text-slate-100">
                        {item.price} $
                      </h1>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p>No Match resault ...</p>
            )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <Link to="/cart" className="text-xl text-gray-700">
            <RiShoppingBag3Line />
            <span className="w-3 h-4 flex items-center justify-center text-xs rounded-full bg-cyan-900 text-gray-300 absolute  bottom-3 left-3">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
/* 
<div>
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="text-2xl text-gray-700"
          >
            <RiSearch2Line />
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 bg-gray-300 z-50  overflow-hidden w-screen h-screen transition-all ease-in-out duration-300 ${
            show ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div
            onClick={() => setShow(false)}
            className="w-full flex justify-end p-8 text-gray-200 text-3xl"
          >
            <RiCloseFill />
          </div>
        </div>
*/

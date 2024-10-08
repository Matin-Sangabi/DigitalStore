import { useEffect, useState } from "react";
import { useProducts } from "../../provider/productsProvider";
import { Link } from "react-router-dom";
import { searchProducts } from "../../utils/searchProducts";
const SearchProducts = ({ show }) => {
  const [input, setInput] = useState("");
  const [filterPRoducts, setFilterProducts] = useState([]);
  const products = useProducts();
  useEffect(()=>{
    if(!show){
      setInput("");
    }
  } , [show])
  
  const changeHandler = (e) => {
    setInput(e.target.value);
    const filter = searchProducts(products , e);
    setFilterProducts(filter);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={input}
        onChange={changeHandler}
        className={
          show
            ? "translate-y-0 z-10  transition-all duration-500 ease-linear py-2 px-8 md:w-32 lg:w-56 rounded-md bg-gray-200 text-gray-600 border-none outline-none focus:ring-2 focus:shadow-md focus:shadow-cyan-900 focus:ring-cyan-900 "
            : "-translate-y-96 "
        }
      />

        {show && (
          <div
        className={`flex md:flex-wrap gap-x-4 lg:flex-nowrap lg:flex-col gap-y-4 max-h-96 overflow-auto bg-gray-200 shadow-md  rounded-md p-2 absolute md:right-0 md:w-[500px] lg:w-full mt-2  ${
          input.length !== 0
            ? "opacity-100 translate-x-0 transition-opacity ease-in-out duration-500"
            : "opacity-0 translate-x-full"
        }`}>
            {filterPRoducts.length !== 0 ? (
              filterPRoducts.map((item) => {
                return (
                  <Link
                    to={`/product/${item._id}`}
                    key={item._id}
                    className="flex gap-x-2 md:mx-auto flex-auto hover:bg-gray-500  hover:text-slate-100 hover:rounded-md group border-0 border-b-2 border-gray-400 transition-all ease-in-out duration-300"
                  >
                    <div className="w-16 p-1">
                      <img
                        src={`/images/${item.image[0].path}`}
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
        )}
      </div>

  );
};

export default SearchProducts;

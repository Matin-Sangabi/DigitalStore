import { Link } from "react-router-dom";
import { useRef } from "react";
import { useProducts } from "../../provider/productsProvider";
import ScrollOffset from "../scroll/ScrollOffset";
import { calcDiscount } from "../../utils/CalculateProductsOffer";
const ProductsSection = () => {
  const products = useProducts();
  const ref = useRef(null);
  return (
    <div className="grid grid-cols-12 w-full mx-auto text-gray-800 mb-40 px-4  xl:px-0">
      <div className="col-span-12 md:col-span-3 flex flex-col justify-start gap-1 mb-12 pt-3">
        <h1 className="text-xl">Our</h1>
        <h2 className="text-4xl font-bold tracking-widest">
          <span className="border-b-2 py-2 border-gray-800 ">Produ</span>cts
        </h2>
      </div>
      <div className="col-span-12 md:col-span-9 flex flex-col">
        <div
          className="flex flex-nowrap items-center overflow-x-auto mb-4 w-full gap-x-4 md:gap-x-5 scroll-smooth scrollbar"
          ref={ref}
        >
          {products.map((product, index) => {
            return (
              <Link
                to={`/product/${product._id}`}
                className="flex flex-col items-center p-2 bg-gray-200  hover:text-slate-100 group hover:bg-cyan-900 transition-all ease-in-out duration-300 rounded-md mb-4 relative"
                key={product._id}
                id={index}
              >
                {Boolean(product.offPrice)  && (
                  <div className="w-10 h-10 rounded-full text-xs group-hover:bg-slate-50 group-hover:text-cyan-900 transition-all ease-in-out duration-300 bg-cyan-900 flex justify-center items-center  font-semibold text-gray-100 absolute -right-2">
                    {calcDiscount(product.price , product?.offPrice)}%
                  </div>
                )}
                <div className="w-40 h-52 p-2 mb-4">
                  <img
                    src={`/images/${product.image[0].path}`}
                    alt=""
                    className="max-w-full h-auto object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="h-10 mb-4">
                    <h1 className="text-sm group-hover:text-slate-100 text-gray-800 font-semibold">
                      {product.name}
                    </h1>
                    <h2 className="text-xs group-hover:text-gray-300 text-gray-500">
                      {product.categories}
                    </h2>
                  </div>
                  <div className="flex gap-x-4 mt-2">
                    <h2 className="font-bold">Price : </h2>
                    <h2 className="space-x-2">
                      <span
                        className={`${
                          product.offPrice  || product.discount !== 0
                            ? "text-xs line-through text-gray-500"
                            : "text-sm group-hover:text-slate-100 text-gray-800 font-semibold"
                        }`}
                      >
                        {product.price} $
                      </span>
                      {Boolean(product.offPrice) || product.discount !== 0 ? (
                        <span className="font-bold ">
                          {product.offPrice
                            && product.offPrice}
                          $
                        </span>
                      ) : (
                        <span></span>
                      )}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className=" flex justify-between items-center">
          <ScrollOffset refs={ref} changer={300} />
          <Link
            to={"/products"}
            className="block p-2 bg-cyan-900 text-gray-100 rounded-md hover:ring hover:ring-offset-2 hover:ring-cyan-900 transition-all ease-in-out duration-500"
          >
            See Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;

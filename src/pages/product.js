import { useEffect, useState } from "react";
import {
  IoPhonePortraitOutline,
  IoLaptopOutline,
  IoInfinite,
  IoWatchOutline,
  IoTabletPortraitOutline,
  IoBagHandleOutline,
} from "react-icons/io5";
import { TbTruckDelivery, TbAward } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import TopNavigation from "../components/Navigation/topNavigation/TopNavigation";

import { getOneProducts } from "../services/getOneProducts";
const ProductPage = () => {
  const [product, setProduct] = useState(false);
  const [icons, setIcons] = useState();
  const location = useParams();
  const id = location.id;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getOneProducts(id);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);
  useEffect(() => {
    const productModel = (model) => {
      switch (model) {
        case "phone":
          return setIcons(() => <IoPhonePortraitOutline />);
        case "Mac":
          return setIcons(() => <IoLaptopOutline />);
        case "watch":
          return setIcons(() => <IoWatchOutline />);
        case "air pod":
          return setIcons(() => <IoInfinite />);
        case "ipad":
          return setIcons(() => <IoTabletPortraitOutline />);
        default:
          return setIcons("");
      }
    };
    productModel(product.categories);
  }, [product]);
  console.log(product);
  return (
    <>
      <TopNavigation />
      {product && (
        <section className="w-full grid grid-cols-12 pt-28 max-w-screen-xl mx-auto px-4 xl:px-0 ">
          <div className="col-span-12  lg:col-span-8">
            <div className="grid grid-cols-12 mx-auto">
              <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col gap-y-6 justify-center  mx-auto md:mx-0">
                <div className="w-80 h-auto flex mx-auto md:mx-0  ">
                  <img
                    src={require(`./../assets/images/${product.image[0].path}`)}
                    alt={product.name}
                    className="max-w-full h-auto object-cover p-2"
                  />
                </div>
                <div className="hidden md:flex items-center gap-4 px-0 md:px-6 flex-1 ">
                  {product.image.map((item) => {
                    return (
                      <div
                        className="w-32 h-32 lg:w-28 lg:h-28 ring ring-slate-700 rounded-md cursor-pointer p-2 flex justify-center items-center hover:ring outline-none border-none hover:ring-offset-2 hover:ring-slate-700 transition-all ease-in-out duration-300 shadow-md shadow-cyan-900"
                        key={item._id}
                      >
                        <img
                          src={require(`./../assets/images/${item.path}`)}
                          alt={product.name}
                          className="max-w-full h-28 object-cover p-1"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-6 pt-9 flex flex-col gap-4 px-4 rounded-lg md:bg-transparent text-gray-300">
                <div className="flex items-center text-cyan-900 ">
                  <span className="text-2xl font-bold w-8 h-8 flex justify-center items-center">
                    {icons}
                  </span>
                  <h1 className="font-bold">{product.categories}</h1>
                </div>
                <div className="flex flex-col gap-4 px-4">
                  <h1 className="text-3xl text-gray-800 font-bold">
                    {product.name}
                  </h1>
                  <h2 className=" text-gray-500">{product.model}</h2>
                </div>
                <hr className="border-gray-400" />
                <div className="flex flex-col gap-y-4 px-4 text-gray-700">
                  <div className="flex gap-x-8  items-center">
                    <h1 className="text-lg font-bold">Choose Color : </h1>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="w-6 h-6 rounded-full bg-emerald-900 -mr-2 cursor-pointer focus:ring focus:ring-slate-700 focus:mr-2"
                      ></button>
                      <button
                        type="button"
                        className="w-6 h-6 rounded-full bg-rose-500 -mr-2 cursor-pointer focus:ring focus:ring-slate-700 focus:mr-2"
                      ></button>
                      <button
                        type="button"
                        className="w-6 h-6 rounded-full bg-blue-700 -mr-2 cursor-pointer focus:ring focus:ring-slate-700 focus:mr-2"
                      ></button>
                      <button
                        type="button"
                        className="w-6 h-6 rounded-full bg-gray-600 -mr-2 cursor-pointer focus:ring focus:ring-slate-700 focus:mr-2"
                      ></button>
                      <button
                        type="button"
                        className="w-6 h-6 rounded-full bg-gray-900 -mr-2 cursor-pointer focus:ring focus:ring-slate-700 focus:mr-2"
                      ></button>
                    </div>
                  </div>
                  <div className="flex flex-col mt-6">
                    <h1 className="text-lg font-bold mb-6">
                      Product characteristics :{" "}
                    </h1>
                    <ul className="list-outside list-disc px-4 flex flex-col gap-y-4">
                      {product.spec.map((item) => {
                        return (
                          <li className="text-cyan-900" key={item._id}>
                            <div className="text-gray-900">
                              <h1 className="font-bold text-lg">
                                {item.system.cat}
                              </h1>
                              <h3 className="font-semibold text-base">
                                {item.system.title}
                              </h3>
                              <h4 className="text-sm">{item.system.sub}</h4>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col lg:col-span-4 items-end pt-8 h-auto">
            <div className="bg-gray-400 shadow-lg  rounded-lg sticky top-[5rem] p-4 flex flex-col gap-4 text-gray-800 ">
              <ProductDescriptions product={product}/>
              <h1 className="text-lg text-cyan-900 font-bold">
                price : {product.discount !== 0  ? product.price - product.discount : product.price} $
              </h1>
              <hr className="border-gray-500" />
              <Link
                to="/cart"
                className="p-4 bg-cyan-900 rounded-md text-slate-100 text-center font-bold"
              >
                Add To cart{" "}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductPage;

const ProductDescriptions = ({ product }) => {
  const icons = {
    deliver: TbTruckDelivery(),
    warranty: TbAward(),
    sale: IoBagHandleOutline(),
  };
  const productIcons = product.conditions.map((item) => {
    switch (item.support.cat) {
      case "warranty":
        return { ...item.support, icon: icons.warranty };
      case "deliver":
        return { ...item.support, icon: icons.deliver };
      case "seller":
        return { ...item.support, icon: icons.sale };
      default:
        return { ...item.support };
    }
  });
  return productIcons.map((item) => {
    return (
      <div className="flex gap-x-2 items-center" key={item._id}>
        <div className="flex items-center gap-x-2 ">
          <span className="text-xl text-cyan-900">{item.icon}</span>
          <h1 className="font-bold">{item.title} : </h1>
        </div>
        <p className="text-sm font-semibold">{item.sub}</p>
      </div>
    );
  });
};

import { useEffect, useState } from "react";
import {
  IoPhonePortraitOutline,
  IoLaptopOutline,
  IoInfinite,
  IoWatchOutline,
  IoTabletPortraitOutline,
  IoBagHandleOutline,
  IoChevronDownOutline,
  IoCheckmarkSharp,
} from "react-icons/io5";
import { TbTruckDelivery, TbAward } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import TopNavigation from "../components/Navigation/topNavigation/TopNavigation";
import { useCart, useCartAction } from "../provider/cartProvider";
import { toast } from "react-toastify";
import { getOneProducts } from "../services/getOneProducts";
import { CheckInCart } from "../utils/checkIncart";
import { toastStyle } from "../utils/toastStyle";

const Colors = [
  { id: 1, name: "gray", code: "bg-gray-500", isActive: false },
  { id: 2, name: "red", code: "bg-rose-600", isActive: false },
  { id: 3, name: "blue", code: "bg-blue-500", isActive: false },
  { id: 4, name: "dark", code: "bg-gray-900", isActive: false },
  { id: 5, name: "green", code: "bg-emerald-900", isActive: false },
];

const ProductPage = () => {
  const [product, setProduct] = useState(false);
  const [ChooseColors, setChooseColor] = useState(false);
  const dispatch = useCartAction();
  const { cart } = useCart();
  const location = useParams();
  const id = location.id;
  const cartProduct = (product, ChooseColors) => {
    if (ChooseColors) {
      // const productDis = { ...product, color: ChooseColors };
      toast.success(`${product.name} Added To Cart` , toastStyle)
      dispatch({ type: "ADD_TO_CART", payload: product, color: ChooseColors });
    } else {
      toast.error("please Choose Color", toastStyle);
    }
  };

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

  return (
    <>
      <TopNavigation />
      {product && (
        <section className="w-full grid grid-cols-12 pt-28 max-w-screen-xl mx-auto px-4 xl:px-0 ">
          <div className="col-span-12  lg:col-span-8">
            <ProductDetail product={product} setChooseColor={setChooseColor} />
          </div>
          <div className="hidden lg:flex flex-col lg:col-span-4 items-end pt-8 h-auto">
            <div className="bg-gray-400 shadow-lg  rounded-lg sticky top-[5rem] p-4 flex flex-col gap-4 text-gray-800 ">
              <ProductDescriptions product={product} />
              <h1 className="text-lg text-cyan-900 font-bold">
                price :{" "}
                {product.discount !== 0
                  ? product.price - product.discount
                  : product.price}{" "}
                $
              </h1>
              <hr className="border-gray-500" />
              {!CheckInCart(cart, product) ? (
                <button
                  type="button"
                  className="p-4 bg-cyan-900 rounded-md text-slate-100 text-center font-bold hover:ring hover:ring-offset-2 hover:ring-cyan-900 duration-500 transition-all ease-in-out"
                  onClick={() => cartProduct(product, ChooseColors)}
                >
                  Add To cart{" "}
                </button>
              ) : (
                <div className="flex flex-col gap-y-2">
                  <button
                    type="button"
                    className="bg-transparent w-full ring-2 font-semibold ring-cyan-900 rounded-md text-cyan-900 p-2"
                  >
                    InCart
                  </button>
                  <Link
                    to={"/cart"}
                    className="p-2 bg-cyan-900 rounded-md text-slate-100  text-center font-semibold hover:ring hover:ring-offset-2 hover:ring-cyan-900 duration-500 transition-all ease-in-out"
                  >
                    See Cart Now ...
                  </Link>
                </div>
              )}
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
  return productIcons.map((item, index) => {
    return (
      <div className="flex gap-x-2 items-center" key={index}>
        <div className="flex items-center gap-x-2 ">
          <span className="text-xl text-cyan-900">{item.icon}</span>
          <h1 className="font-bold">{item.title} : </h1>
        </div>
        <p className="text-sm font-semibold">{item.sub}</p>
      </div>
    );
  });
};

const ProductDetail = ({ product, setChooseColor }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [icons, setIcons] = useState();
  const [color, setColor] = useState(Colors);
  const chooseColorItem = (id) => {
    const index = Colors.findIndex((c) => c.id === id);
    const itemList = { ...Colors[index] };
    if (itemList.isActive) {
      itemList.isActive = false;
    } else {
      itemList.isActive = true;
    }
    const colors = [...Colors];
    colors[index] = itemList;
    setChooseColor(itemList);
    setColor(colors);
  };

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
  return (
    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col gap-y-6 justify-center  mx-auto md:mx-0 h-min">
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
          <h1 className="text-3xl text-gray-800 font-bold">{product.name}</h1>
          <h2 className=" text-gray-500">{product.model}</h2>
        </div>
        <hr className="border-gray-400" />
        <div className="flex flex-col gap-y-4 px-4 text-gray-700">
          <div className="flex gap-x-8  items-center">
            <h1 className="text-lg font-bold">Choose Color : </h1>
            <div className="flex justify-center">
              {color.map((item) => {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => chooseColorItem(item.id)}
                    className={`w-6 h-6 rounded-full ${item.code} -mr-2 cursor-pointer focus:ring focus:ring-slate-700 focus:mr-2 flex items-center justify-center text-slate-200`}
                  >
                    {item.isActive && <IoCheckmarkSharp />}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <h1 className="text-lg font-bold mb-6">
              Product characteristics :{" "}
            </h1>
            <ul
              className={`list-outside list-disc px-8 flex flex-col relative overflow-hidden  ${
                seeMore
                  ? "h-full transition-all ease-in-out duration-500"
                  : "h-[260px] transition-all ease-in-out duration-500"
              }`}
            >
              {product.spec.map((item) => {
                return (
                  <li className="text-cyan-900 mb-4" key={item._id}>
                    <div className="text-gray-900">
                      <h1 className="font-bold text-lg">{item.system.cat}</h1>
                      <h3 className="font-semibold text-base">
                        {item.system.title}
                      </h3>
                      <h4 className="text-sm">{item.system.sub}</h4>
                    </div>
                  </li>
                );
              })}
              {
                <li
                  className={`absolute -bottom-[6px] left-0 w-full px-8  bg-gradient-to-b pt-[2px] bg-gray-300 bg-opacity-80`}
                >
                  <button
                    type="button"
                    className="flex w-2/3 justify-between items-center"
                    onClick={() => setSeeMore(!seeMore)}
                  >
                    {!seeMore ? (
                      <span className="font-semibold text-cyan-900 ">
                        Read more ...
                      </span>
                    ) : (
                      <span className="font-semibold text-cyan-900">
                        Less...
                      </span>
                    )}
                    <span
                      className={
                        seeMore
                          ? "rotate-180 transition-all ease-in-out duration-500"
                          : "rotate-0 transition-all ease-in-out duration-500"
                      }
                    >
                      <IoChevronDownOutline />
                    </span>
                  </button>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 *
 */

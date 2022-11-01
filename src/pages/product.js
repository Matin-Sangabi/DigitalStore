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
  IoChevronBackOutline,
  IoCaretBack,
} from "react-icons/io5";
import { TbTruckDelivery, TbAward } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import TopNavigation from "../components/Navigation/topNavigation/TopNavigation";
import { useCart, useCartAction } from "../provider/cartProvider";
import { toast } from "react-toastify";
import { getOneProducts } from "../services/getOneProducts";
import { CheckInCart } from "../utils/checkIncart";
import { toastStyle } from "../utils/toastStyle";
import MobileNav from "../components/mobileNav/MobileNav";
import ThumbGallery from "../components/thumbGallery/thumbGallery";
import CartInfo from "../components/Cartinf/CartInfor";
import { CalculatePriceOffer } from "../utils/CalculateProductsOffer";

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
  const [show, setShow] = useState(false);
  const [InCart, setInCart] = useState();
  const dispatch = useCartAction();
  const { cart } = useCart();
  const location = useParams();
  const id = location.id;
  const cartProduct = (product, ChooseColors) => {
    if (ChooseColors) {
      // const productDis = { ...product, color: ChooseColors };
      toast.success(`${product.name} Added To Cart`, toastStyle);
      dispatch({ type: "ADD_TO_CART", payload: product, color: ChooseColors });
    } else {
      toast.error("please Choose Color", toastStyle);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    setInCart(CheckInCart(cart, product));
  }, [cart, product]);
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

  console.log(InCart);
  return (
    <>
      <TopNavigation show={show} setShow={setShow} />
      <MobileNav />
      <div className="mx-auto max-w-screen-xl  flex justify-between items-center px-4 lg:px-0 mt-4 pt-0 md:pt-20">
        <button
          type="button"
          className="p-2 flex items-center text-gray-600"
          onClick={() => navigate(-1)}
        >
          <IoChevronBackOutline className="text-xl" />
        </button>
        <div className="">
          <ul className="flex flex-row-reverse">
            <li className="flex items-center">
              <IoCaretBack className="text-cyan-900" />
              <span className="font-semibold text-gray-800">products</span>
            </li>
            <li className="flex items-center">
              <IoCaretBack className="text-cyan-900" />
              <span className="font-semibold text-gray-800">
                {product.categories}
              </span>
            </li>
            <li>
              <span className="text-gray-600">{product.name}</span>
            </li>
          </ul>
        </div>
      </div>
      {product && (
        <section
          onClick={() => setShow(false)}
          className="w-full grid grid-cols-12 pt-8 max-w-screen-xl mx-auto px-4 xl:px-0 pb-28"
        >
          <div className="col-span-12  lg:col-span-8">
            <ProductDetail product={product} setChooseColor={setChooseColor} />
          </div>
          <div className="hidden lg:flex flex-col  lg:col-span-4 items-end pt-8 h-auto">
            <div className="bg-gray-400  shadow-lg  rounded-lg lg:sticky top-[5rem] p-4 flex flex-col gap-4 text-gray-800 ">
              <ProductDescriptions product={product} />
              <div className="flex items-center justify-between gap-x-4 px-2">
                <h1 className="text-xl text-gray-700 font-bold">price :</h1>
                <div className="flex flex-col flex-1">
                  {product.offPrice !== 0 && (
                    <div className="flex items-center gap-x-2">
                      <span className="w-7 h-7  rounded-full bg-cyan-900 flex justify-center items-center text-xs font-semibold text-gray-100">
                        20%
                      </span>
                      <h1 className="text-sm text-gray-500 line-through">
                        {product.price}$
                      </h1>
                    </div>
                  )}
                  <h1 className="font-bold text-cyan-900 text-xl">
                    {product.offPrice !== 0
                      ? CalculatePriceOffer(product.price, product.offPrice)
                      : product.price}
                    $
                  </h1>
                </div>
              </div>
              <hr className="border-gray-500" />
              {!InCart ? (
                <button
                  type="button"
                  className="p-4 bg-cyan-900 rounded-md text-slate-100 text-center font-bold hover:ring hover:ring-offset-2 hover:ring-cyan-900 duration-500 transition-all ease-in-out"
                  onClick={() => cartProduct(product, ChooseColors)}
                >
                  Add To cart{" "}
                </button>
              ) : (
                <div className="flex flex-col gap-y-2">
                  <Link
                    to={"/cart"}
                    className="bg-transparent text-center w-full ring-2 font-semibold ring-cyan-900 rounded-md text-cyan-900 p-2"
                  >
                    InCart
                  </Link>
                  <div className="p-2   flex items-center justify-end">
                    <CartInfo item={InCart} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <MObileCalculator
            product={product}
            ChooseColors={ChooseColors}
            cartProduct={cartProduct}
          />
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
      <ThumbGallery product={product} />
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
              {product.spec.length > 3 && (
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
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const MObileCalculator = ({ product, ChooseColors, cartProduct }) => {
  const { cart } = useCart();
  const inCart = CheckInCart(cart, product);

  return (
    <div className="fixed bottom-2 px-2 flex justify-center col-span-12 w-full lg:hidden mx-auto left-0">
      <div className="bg-gray-400 bg-opacity-90 mx-auto rounded-md w-full shadow-xl flex items-center justify-between px-4 py-2">
        <div className="flex items-end">
          <h1 className="font-bold text-lg px-2 text-cyan-900 flex items-end h-full">
            TotalPrice :
          </h1>
          <div className="flex flex-col flex-1">
            {product.offPrice !== 0 && (
              <div className="flex items-center gap-x-2">
                <span className="w-7 h-7  rounded-full bg-cyan-900 flex justify-center items-center text-xs font-semibold text-gray-100">
                  20%
                </span>
                <h1 className="text-sm text-gray-500 line-through">
                  {product.price}$
                </h1>
              </div>
            )}
            <h1 className="font-bold text-cyan-900 text-xl">
              {product.offPrice !== 0
                ? CalculatePriceOffer(product.price, product.offPrice)
                : product.price}
              $
            </h1>
          </div>
        </div>
        <div>
          {!inCart ? (
            <button
              type="button"
              className="p-4 bg-cyan-900 rounded-md text-slate-100 text-center font-bold hover:ring hover:ring-offset-2 hover:ring-cyan-900 duration-500 transition-all ease-in-out"
              onClick={() => cartProduct(product, ChooseColors)}
            >
              Add To cart{" "}
            </button>
          ) : (
            <div className="flex flex-col">
              <div className="p-2   flex items-center justify-end">
                <CartInfo item={inCart} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

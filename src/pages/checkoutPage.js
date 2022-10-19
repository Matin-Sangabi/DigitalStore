import {
  RiTruckLine,
  RiShoppingCartLine,
  RiWallet3Line,
  RiMapPinLine,
  RiMapPinTimeLine,
} from "react-icons/ri";

import { Link } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { useCart } from "../provider/cartProvider";
import LogoIcon from "../utils/Logo";

import TabContents from "../components/TabComponets/tabComponetns";

const CheckoutPage = () => {
  const { name } = useAuth();
  const { cart, total } = useCart();

  console.log(cart);
  return (
    <>
      <section className="pt-10 max-w-screen-xl px-4 md:px-0 mx-auto">
        <div className="w-full flex items-center justify-center">
          <LogoIcon />
        </div>
        <div className="w-full max-w-screen-sm mx-auto flex justify-between mt-8">
          <Link
            to={"/cart"}
            className="flex items-center gap-x-2 text-cyan-800 text-sm font-semibold "
          >
            Cart
            <RiShoppingCartLine className="text-lg" />
          </Link>
          <span className="flex items-center gap-x-2 font-bold text-lg flex-1 justify-center text-cyan-800 before:content-['']  before:block before:relative before:mx-2 before:h-[1px] before:w-full   before:bg-cyan-900">
            Send
            <RiTruckLine className="text-6xl" />
          </span>
          <span className="flex flex-1 items-center gap-x-2 before:content-[''] before:flex before:justify-center  before:items-center before:relative before:mx-2 before:h-[1px] before:w-[90%]  before:bg-gray-500 text-sm font-semibold text-gray-500">
            Payment
            <RiWallet3Line className="text-2xl" />
          </span>
        </div>
        <div className="container mx-auto max-w-screen-xl md:px-4 grid grid-cols-12 grid-rows-[55px_minmax(500px,_1fr)] md:gap-4 pt-8 mb-16">
          <div className="col-span-12 md:col-span-8 lg:col-span-9 order-1 md:order-1">
            <div className="p-2 bg-gray-200 rounded-md flex flex-col gap-2 w-full">
              <h1 className="text-sm font-semibold text-gray-500">
                Order delivery address
              </h1>
              <div className="flex w-full items-center gap-x-2 text-gray-800">
                <span className="text-xl">
                  <RiMapPinLine />
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-base font-semibold">
                    Shiraz,Sadra New City , alborz bvd
                  </span>
                  <button
                    type="button"
                    className="text-sm font-semibold text-cyan-700"
                  >
                    Create | Edit
                  </button>
                </div>
              </div>
              <h2 className="text-base text-gray-800 px-7 font-semibold">
                {name}
              </h2>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3  row-span-2 sticky h-auto order-3 md:order-2">
            <div className="p-2 bg-gray-200 rounded-md px-4">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between text-gray-800">
                  <h1 className="font-semibold">
                    Total price : ({cart.length})
                  </h1>
                  <span className="font-bold">{total}$</span>
                </div>
                <hr className="bg-gray-400 p-px bg-opacity-70 " />
                <div className="flex flex-col gap-2">
                  <div className="flex w-full justify-between">
                    <span>shipping cost : </span>
                    <span>Free</span>
                  </div>
                  <span className="text-sm text-gray-500 ">
                    The shipping cost is calculated based on the address, delivery time, weight and volume of your shipment
                  </span>
                </div>
                <hr className="bg-gray-400 p-px bg-opacity-70 " />
                <button type="button" className="p-2 bg-cyan-900 rounded-md text-gray-100">the payment</button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9 order-2 md:order-3">
            <div className="p-2 w-full bg-gray-200 rounded-md mt-10">
              <div className="p-2 flex items-center gap-x-2 relative">
                <span className="text-4xl text-cyan-800">
                  <RiTruckLine />
                </span>
                <span className="p-2 text-sm h-5 flex justify-center  items-center bg-gray-300 text-gray-600 rounded-md">
                  {cart.length} lot
                </span>
              </div>
              <h1 className="text-base text-gray-800 font-semibold mt-4">
                Your Cart :
              </h1>
              <div className="flex gap-6 items-center mt-4 px-2 flex-wrap">
                {cart.map((item) => {
                  return (
                    <div className="flex flex-col" key={item._id}>
                      <div className="w-20 h-20">
                        <img
                          src={require(`./../assets/images/${item.image[0].path}`)}
                          alt={cart.name}
                          className="max-w-full object-cover h-20"
                        />
                      </div>
                      <div className="flex items-center mt-2 gap-x-1">
                        <h1 className="text-sm text-gray-600">{item.name}</h1>
                        <span
                          className={`w-4 h-4 rounded-full ${item.colors.code}`}
                        ></span>
                      </div>
                      <h1 className="text-xs text-gray-400">{item.model}</h1>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-col gap-4 w-full">
                <div className="flex items-center gap-x-2 text-gray-800">
                  <span className="text-xl">
                    <RiMapPinTimeLine />
                  </span>
                  <h1 className="font-semibold">Choose a time to send :</h1>
                </div>
                <div className="w-full mx-auto">
                  <TabContents />
                </div>
              </div>
            </div>
              <Link to={"/products"} className="text-cyan-700 text-sm mt-4  px-2">Return to shop</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;

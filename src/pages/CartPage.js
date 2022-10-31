import { Link } from "react-router-dom";
import Layout from "../layout/layout";
import { IoClose } from "react-icons/io5";
import { HiMinusSm, HiPlusSm, HiOutlineTrash , HiOutlineArrowRight ,HiCheck } from "react-icons/hi";
import { useCart, useCartAction } from "../provider/cartProvider";
import {toast} from 'react-toastify';
import { toastStyle } from "../utils/toastStyle";
import { useAuth } from "../provider/AuthProvider";
import EmptyCart from "../components/emptyCart/emptyCart";

const CartPage = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  
  return (
    <Layout title={'Cart'}>
      {cart.length !== 0 ? 
        <section className="max-w-screen-xl mx-auto grid grid-cols-12 gap-2 pt-10 md:pt-36">
        <div className="col-span-12 md:col-span-8 bg-transparent flex justify-between p-2 items-center px-4">
          <h1 className="font-semibold  text-cyan-900">Cart</h1>
          <Link to={"/products"} className="text-sm text-cyan-900 ">
            Return To shop
          </Link>
        </div>
        <div className="col-span-12 md:col-span-8 rounded-md p-2 flex flex-col gap-y-2">
          <CartItems cart={cart} dispatch={dispatch}/>
        </div>
        <div className="col-span-12  md:col-span-4">
          <CalculatePrice cart={cart} />
        </div>
      </section>
      : <EmptyCart/>}
    </Layout>
  );
};

export default CartPage;




const CartItems = ({ cart , dispatch }) => {
  const RemoveCart = (cart) =>{
    toast.success(`${cart.name} Deleted` , toastStyle)
    dispatch({type : 'REMOVE_CART' , payload : cart});
  }
  const IncrementCart = (cart) =>{
    dispatch({type: "ADD_TO_CART" , payload : cart , color : cart.colors});
  }  
  const DecrementCart = (cart) =>{
    if(cart.quantity === 1) {
         toast.success(`${cart.name} Deleted` , toastStyle)

    }
    dispatch({type : "DECREMENT_CART" , payload : cart});
  }
  return (
    <>
      {cart.map((item) => {
        return (
          <div
            className="w-full p-2 flex gap-x-8 items-center bg-gray-200 shadow-md rounded-md"
            key={item._id}
          >
            <div className="w-20 h-auto">
              <img
                src={require(`./../assets/images/${item.image[0].path}`)}
                className="max-w-full h-auto"
                alt="cart"
              />
            </div>
            <div className="flex flex-col h-20 justify-between flex-1">
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-800">{item.name}</h1>
                <div className="flex gap-x-2 items-center">
                    <p className="text-sm text-gray-500">{item.model}</p>
                    <span className={`w-4 h-4 rounded-full ${item.colors.code} flex justify-center items-center text-slate-100 text-sm`}><HiCheck className="w-2"/></span>
                </div>
              </div>
              <h1 className="font-bold text-cyan-900">{item.price}$</h1>
            </div>
            <div className="flex flex-col h-24 justify-between items-end">
              <button type="button" className="text-xl text-cyan-900" onClick={() => RemoveCart(item)}>
                <IoClose />
              </button>
              <div className="flex gap-x-2 items-center">
                <button
                  type="button"
                  className="w-6 h-6 rounded-full text-gray-800 bg-transparent flex justify-center items-center border-2 border-cyan-900"
                  onClick={() => IncrementCart(item)}
                >
                  <HiPlusSm />
                </button>
                <span className="w-6 h-8  rounded-md border-2 border-gray-600 text-gray-800 font-semibold flex justify-center items-center">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  className={`w-6 h-6 rounded-full  text-slate-100 flex justify-center items-center ${item.quantity === 1 ? "bg-rose-600" : "bg-cyan-900"}`}
                  onClick={() => DecrementCart(item)}
                >
                  {item.quantity === 1 ? <HiOutlineTrash/> : <HiMinusSm/>}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const CalculatePrice = ({cart}) => {
    const Auth = useAuth();
    const originalPrice = cart.reduce((acc , curr) => acc + curr.quantity * curr.price , 0);
    const discountPrice = cart.reduce((acc , curr) => acc + curr.quantity * curr.discount , 0);
  return (
    <div className="flex flex-col gap-y-4 p-2 sticky top-[4.8rem]">
      <div className="bg-gray-200 px-6 py-4 flex flex-col shadow-md rounded-md gap-y-6">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-semibold text-gray-800">Total Price : </h1>
          <h1 className="font-bold text-cyan-900 text-lg">{originalPrice} $</h1>
        </div>
        <div className="flex w-full justify-between items-center">
          <h1 className="font-semibold text-gray-800">Discount : </h1>
          <h1 className="font-bold text-cyan-900 text-lg">{discountPrice}$</h1>
        </div>
        <div className="flex w-full justify-between items-center">
          <h1 className="font-semibold text-gray-800">Final Price : </h1>
          <h1 className="font-bold text-cyan-900 text-lg">{originalPrice - discountPrice}$</h1>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-4">
        <Link
          to={Auth ? '/checkout' : "/login?redirect=checkout"}
          className="p-3 text-center bg-cyan-900 rounded-md text-slate-100 hover:ring hover:ring-offset-2 hover:ring-cyan-900 transition-all ease-in-out duration-500 flex justify-around items-center group"
        >
          <span>Continue the purchase</span>
          <HiOutlineArrowRight className="group-hover:translate-x-4 transition-all ease-in-out duration-500"/>
        </Link>
        <button className="p-2 text-center bg-transparent-900 rounded-md border-2 border-cyan-900 text-cyan-900 hover:ring hover:ring-offset-2 hover:ring-cyan-900 transition-all ease-in-out duration-500">
          Cancellation of purchase
        </button>
      </div>
      <div className="pt-20 block md:hidden w-full">
        <Link to={Auth ? '/checkout' : "/login?redirect=checkout"} className="w-full block text-center rounded-md p-3 bg-cyan-900 text-slate-100 transition-all ease-in-out duration-300 hover:ring hover:ring-offset-2 hover:ring-cyan-900">Continue the purches</Link>
      </div>
    </div>
  );
};

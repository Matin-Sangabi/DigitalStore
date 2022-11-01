import { useCartAction } from "../../provider/cartProvider";
import { HiMinusSm, HiPlusSm, HiOutlineTrash } from "react-icons/hi";
import {toast} from 'react-toastify';
import { toastStyle } from "../../utils/toastStyle";
const CartInfo = ({item}) => {
    const dispatch = useCartAction();
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
      <div className="flex gap-x-2 items-center w-full justify-between">
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
          className={`w-6 h-6 rounded-full  text-slate-100 flex justify-center items-center ${
            item.quantity === 1 ? "bg-rose-600" : "bg-cyan-900"
          }`}
          onClick={() => DecrementCart(item)}
        >
          {item.quantity === 1 ? <HiOutlineTrash /> : <HiMinusSm />}
        </button>
      </div>
    </>
  );
};

export default CartInfo;

import { createContext , useContext , useEffect, useReducer } from "react";
import CartReducer from "./cartReducer";
const Context = createContext();
const ContextDispatcher = createContext();

const CART_KEY_NAME = "cart";

const  initialState = {
    cart : [],
    total : 0
}

function CartProvider ({children}){
    const [cart , dispatch] = useReducer(CartReducer , initialState);
   useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(CART_KEY_NAME)) || initialState;
    dispatch({type : "storage" , payload : data})
   } , [])
   useEffect(()=>{
    localStorage.setItem(CART_KEY_NAME , JSON.stringify(cart))
   } , [cart])
    return(
        <Context.Provider value={cart}>
            <ContextDispatcher.Provider value={dispatch}>
                {children}
            </ContextDispatcher.Provider>
        </Context.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(Context);
export const useCartAction = () => useContext(ContextDispatcher);
import { createContext , useContext , useReducer } from "react";
import CartReducer from "./cartReducer";
const Context = createContext();
const ContextDispatcher = createContext();

const initialState = {
    cart : [],
    total : 0,
}

function CartProvider ({children}){
    const [cart , dispatch] = useReducer(CartReducer , initialState);
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
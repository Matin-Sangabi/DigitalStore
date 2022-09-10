
const CartReducer = (state , action) => {
    switch(action.type){
        case "storage" : {
            return {...state , cart : action.payload.cart , total : action.payload.total}
        }
        case 'ADD_TO_CART' : {
            const updatedCart = [...state.cart];
            const cartIndex = updatedCart.findIndex(cart => cart._id === action.payload._id);//1-2-3
            if(cartIndex < 0){
                updatedCart.push({...action.payload ,colors : {...action.color} , quantity : 1});
            }else{
                const updatedCartItem = {...updatedCart[cartIndex]};
                updatedCartItem.quantity ++;
                updatedCartItem.colors = action.color;
                updatedCart[cartIndex] = updatedCartItem;
            }
            const cartData = {...state , cart : updatedCart , total : state.total + Number(action.payload.price - action.payload.discount)}
                
            return cartData;
        }
        case 'REMOVE_CART' : {
            const filterCart = [...state.cart].filter(c => c._id !== action.payload._id);
            console.log();
            return {...state , cart : filterCart  , total : state.total - (action.payload.price - action.payload.discount)}
        }
        default : return{state}
    }
}
 
export default CartReducer;
const CartReducer = (state , action) => {
    switch(action.type){
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
            return {...state , cart : updatedCart , total : state.total + Number(action.payload.price - action.payload.discount)};
        }
        default : return{state}
    }
}
 
export default CartReducer;
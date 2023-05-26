const CartReducer = (state, action) => {
  switch (action.type) {
    case "storage": {
      return {
        ...state,
        cart: action.payload.cart,
        total: action.payload.total,
      };
    }
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const cartIndex = updatedCart.findIndex(
        (cart) => cart._id === action.payload._id
      ); //1-2-3
      if (cartIndex < 0) {
        updatedCart.push({
          ...action.payload,
          colors: { ...action.color },
          quantity: 1,
        });
      } else {
        const updatedCartItem = { ...updatedCart[cartIndex] };
        updatedCartItem.quantity++;
        updatedCartItem.colors = action.color;
        updatedCart[cartIndex] = updatedCartItem;
      }
      const cartData = {
        ...state,
        cart: updatedCart,
        total:
          state.total +
          Number(
            action.payload.price -
              action.payload.price * (action.payload.offPrice / 100)
          ),
      };

      return cartData;
    }
    case "REMOVE_CART": {
      const filterCart = [...state.cart].filter(
        (c) => c._id !== action.payload._id
      );
      return {
        ...state,
        cart: filterCart,
        total:
          state.total -
          (action.payload.price -
            action.payload.price * (action.payload.offPrice / 100)),
      };
    }
    case "DECREMENT_CART": {
      const updatedCart = [...state.cart];
      const cartIndex = updatedCart.findIndex(
        (c) => c._id === action.payload._id
      );
      const updatedCartItem = { ...updatedCart[cartIndex] };
      if (updatedCartItem.quantity === 1) {
        const filterCart = [...state.cart].filter(
          (c) => c._id !== action.payload._id
        );
        return {
          ...state,
          cart: filterCart,
          total:
            state.total -
            (action.payload.price -
              action.payload.price * (action.payload.offPrice / 100)),
        };
      } else {
        updatedCartItem.quantity--;
        updatedCart[cartIndex] = updatedCartItem;
        return {
          ...state,
          cart: updatedCart,
          total:
            state.total -
            (action.payload.price -
              action.payload.price * (action.payload.offPrice / 100)),
        };
      }
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
        total: 0,
      };
    }
    default:
      return { state };
  }
};

export default CartReducer;

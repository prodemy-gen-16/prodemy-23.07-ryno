export const addCartItem = (payload) => (dispatch) => {
  dispatch({
    type: "ADD_CART_ITEM",
    payload,
  });
};

export const updateCartQty = (payload) => (dispatch) => {
  dispatch({
    type: "UPDATE_CART_QUANTITY",
    payload,
  });
};

export const increaseCartQty = (payload) => (dispatch) => {
  dispatch({
    type: "INCREASE_CART_QUANTITY",
    payload,
  });
};

export const decreaseCartQty = (payload) => (dispatch) => {
  dispatch({
    type: "DECREASE_CART_QUANTITY",
    payload,
  });
};

export const deleteCartItem = (payload) => (dispatch) => {
  dispatch({
    type: "DELETE_CART_ITEM",
    payload,
  });
};

export const checkoutOrder = (payload) => (dispatch) => {
  dispatch({
    type: "CHECKOUT_ORDER",
    payload,
  });
};

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return [...state, action.payload];

    case "UPDATE_CART_QUANTITY":
      return [
        ...state.slice(0, action.payload.index),
        {
          ...state[action.payload.index],
          qty: state[action.payload.index].qty + action.payload.qty,
        },
        ...state.slice(action.payload.index + 1),
      ];

    case "INCREASE_CART_QUANTITY":
      return [
        ...state.slice(0, action.payload.index),
        {
          ...state[action.payload.index],
          qty: state[action.payload.index].qty + 1,
        },
        ...state.slice(action.payload.index + 1),
      ];

    case "DECREASE_CART_QUANTITY":
      return [
        ...state.slice(0, action.payload.index),
        {
          ...state[action.payload.index],
          qty: state[action.payload.index].qty - 1,
        },
        ...state.slice(action.payload.index + 1),
      ];

    case "DELETE_CART_ITEM":
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1),
      ];

    case "CHECKOUT_ORDER":
      return [];

    default:
      return state;
  }
};

import {
  DELETE_ORDER_ITEM,
  ADD_QUANTITY,
  ADD_TO_ORDERLIST,
  SUBTRACT_QUANTITY,
  RESET_ORDERLIST
} from './types';

const reducer = (state, action) => {
  let index = state.orderlist.findIndex(item => item.id === action.payload.id);
  let updateOrder = [];

  switch (action.type) {
    case DELETE_ORDER_ITEM:
      return {
        ...state,
        orderlist: state.orderlist.filter(order => order.id !== action.payload)
      };

    case ADD_TO_ORDERLIST:
      if (index === -1) {
        updateOrder = state.orderlist.concat({
          ...action.payload,
          quantity: 1,
          totalItemPrice: action.payload.price
        });
        return {
          ...state,
          orderlist: updateOrder
        };
      } else {
        updateOrder = [...state.orderlist];
        updateOrder[index].quantity += 1;
        updateOrder[index].totalItemPrice += updateOrder[index].price;
        return {
          ...state,
          orderlist: updateOrder
        };
      }

    case ADD_QUANTITY:
      updateOrder = [...state.orderlist];
      updateOrder[index].quantity += 1;
      updateOrder[index].totalItemPrice += updateOrder[index].price;
      return {
        ...state,
        orderlist: updateOrder
      };

    case SUBTRACT_QUANTITY:
      updateOrder = [...state.orderlist];
      if (updateOrder[index].quantity > 1) {
        updateOrder[index].quantity -= 1;
        updateOrder[index].totalItemPrice -= updateOrder[index].price;
        return {
          ...state,
          orderlist: updateOrder
        };
      } else {
        return {
          ...state,
          orderlist: state.orderlist.filter(
            order => order.id !== action.payload.id
          )
        };
      }

    case RESET_ORDERLIST:
      return {
        ...state,
        orderlist: action.payload
      };

    default:
      return state;
  }
};

export default reducer;

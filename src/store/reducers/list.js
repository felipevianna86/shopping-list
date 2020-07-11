import { Types } from '../actions/list';
import { createSelector } from 'reselect';
import uuidv1 from 'uuid/dist/v1';

const initialState = {
  list: null,
  items: [],
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      return {
        list: action.list,
        items: [
          ...state.items,
          {
            ...action.product,
            total: getTotalItem(action.product),
            id: uuidv1(),
          },
        ],
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.productId),
      };
    default:
      return state;
  }
}

function getTotalItem(product) {
  return product.price * product.quantity;
}

export const getTotalList = createSelector(
  (state) => state.list.items,
  (items) => items.reduce((total, item) => total + item.total, 0)
);

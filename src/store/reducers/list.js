import { Types } from '../actions/list';
import { createSelector } from 'reselect';
import uuidv1 from 'uuid/dist/v1';
import { func } from 'prop-types';

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
            checked: false,
          },
        ],
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.productId),
      };
    case Types.TOGGLE_PRODUCT:
      return {
        ...state,
        items: toggleItem(state.items, action.productId),
      };
    default:
      return state;
  }
}

function getTotalItem(product) {
  return product.price * product.quantity;
}

function toggleItem(items, productId) {
  const index = items.findIndex((item) => item.id === productId);
  return [
    ...items.slice(0, index),
    { ...items[index], checked: !items[index].checked },
    ...items.slice(index + 1),
  ];
}

export const getTotalList = createSelector(
  (state) => state.list.items,
  (items) => items.reduce((total, item) => total + item.total, 0)
);

export const getOpenedItems = createSelector(
  (state) => state.list.items,
  (items) => items.filter((item) => !item.checked).length
);

export const getClosedItems = createSelector(
  (state) => state.list.items,
  (items) => items.filter((item) => item.checked).length
);

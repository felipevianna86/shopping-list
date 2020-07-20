import { Types } from '../actions/form';

const initialState = {
  action: null,
  listToUpdate: null,
  productToUpdate: {},
};

export default function form(state = initialState, action) {
  switch (action.type) {
    case Types.START_UPDATE:
      return {
        action: 'update',
        productToUpdate: action.product,
        listToUpdate: action.list,
      };
    case Types.FINISH_UPDATE:
      return {
        action: null,
        productToUpdate: {},
        listToUpdate: null,
      };
    case Types.START_ADD:
      return {
        ...state,
        action: 'new',
        listToUpdate: action.list,
      };
    case Types.FINISH_ADD:
      return {
        action: null,
        productToUpdate: {},
        listToUpdate: null,
      };
    default:
      return state;
  }
}

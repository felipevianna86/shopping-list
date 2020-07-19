import { Types } from '../actions/form';
import { act } from 'react-dom/test-utils';

const initialState = {
  action: 'new',
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
        action: 'new',
        productToUpdate: {},
        listToUpdate: null,
      };
    default:
      return state;
  }
}

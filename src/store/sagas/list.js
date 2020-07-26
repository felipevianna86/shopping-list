import { call, put } from 'redux-saga/effects';
import { services } from '../services';
import { Creators as ListActions } from '../actions/list';

const genericImage =
  'https://s2.glbimg.com/7inpIUNcR9cTFdKl4Ib-lEZBToM=/0x0:724x483/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/05/15/frutas_variadas_nao_engordam.jpg';

export function* getImageRequest(action) {
  try {
    const img = yield call(services.getImages, action.product.product);
    yield put(ListActions.getImageSuccess(action.product, img));
  } catch (error) {
    console.log(error);
    yield put(ListActions.getImageFailure(action.product, genericImage));
  }
}

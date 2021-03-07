import { all } from 'redux-saga/effects';
import category from './category.saga';
import item from './item.saga';

export default function* rootSaga() {
  yield all([category(), item()]);
}

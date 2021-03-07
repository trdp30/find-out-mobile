import { all } from 'redux-saga/effects';
import category from './category.saga';

export default function* rootSaga() {
  yield all([category()]);
}

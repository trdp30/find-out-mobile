import { combineReducers } from 'redux';
import session from './session.reducer';
import category from './category.reducer';
import item from './item.reducer';
import cartItem from './cart-item.reducer';
import seller from './seller.reducer';
import address from './address.reducer';
import pbu from './product-brand-unit.reducer';

const reducers = combineReducers({
  session,
  category,
  item,
  cartItem,
  seller,
  address,
  productBrandUnit: pbu,
});

export default reducers;

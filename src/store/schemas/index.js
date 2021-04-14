import { schema } from 'normalizr';
// import mergeData from "../../utils/merge-data";

const categorySchema = new schema.Entity('category');
const categoryArraySchema = new schema.Array(categorySchema);

const cartItemSchema = new schema.Entity(
  'cartitem',
  {},
  { idAttribute: 'uuid' },
);
const cartItemArraySchema = new schema.Array(cartItemSchema);

const sellerSchema = new schema.Entity('seller');
const sellerArraySchema = new schema.Array(sellerSchema);

const addressSchema = new schema.Entity('address');
const addressArraySchema = new schema.Array(addressSchema);

const pbuSchema = new schema.Entity('pbu');
const pbuArraySchema = new schema.Array(pbuSchema);

const cartSchema = new schema.Entity('cart');
const cartArraySchema = new schema.Array(cartSchema);

const productBrandSchema = new schema.Entity('product-brand');
const productBrandArraySchema = new schema.Array(productBrandSchema);

const productSchema = new schema.Entity('product');
const productArraySchema = new schema.Array(productSchema);

export {
  categorySchema,
  categoryArraySchema,
  cartItemArraySchema,
  cartItemSchema,
  sellerSchema,
  sellerArraySchema,
  addressSchema,
  addressArraySchema,
  pbuSchema,
  pbuArraySchema,
  cartSchema,
  cartArraySchema,
  productBrandSchema,
  productBrandArraySchema,
  productSchema,
  productArraySchema,
};

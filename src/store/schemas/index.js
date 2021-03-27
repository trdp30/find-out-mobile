import { schema } from 'normalizr';
// import mergeData from "../../utils/merge-data";

const categorySchema = new schema.Entity('category');
const categoryArraySchema = new schema.Array(categorySchema);

const itemSchema = new schema.Entity('item');
const itemArraySchema = new schema.Array(itemSchema);

const cartItemSchema = new schema.Entity('cartitem');
const cartItemArraySchema = new schema.Array(cartItemSchema);

const sellerSchema = new schema.Entity('seller');
const sellerArraySchema = new schema.Array(sellerSchema);

const addressSchema = new schema.Entity('address');
const addressArraySchema = new schema.Array(addressSchema);

const pbuSchema = new schema.Entity('pbu');
const pbuArraySchema = new schema.Array(pbuSchema);

export {
  categorySchema,
  categoryArraySchema,
  itemSchema,
  itemArraySchema,
  cartItemArraySchema,
  cartItemSchema,
  sellerSchema,
  sellerArraySchema,
  addressSchema,
  addressArraySchema,
  pbuSchema,
  pbuArraySchema,
};

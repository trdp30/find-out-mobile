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

export {
  categorySchema,
  categoryArraySchema,
  itemSchema,
  itemArraySchema,
  cartItemArraySchema,
  cartItemSchema,
  sellerSchema,
  sellerArraySchema,
};

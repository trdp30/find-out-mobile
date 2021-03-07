import { schema } from 'normalizr';
// import mergeData from "../../utils/merge-data";

const categorySchema = new schema.Entity('category');
const categoryArraySchema = new schema.Array(categorySchema);

export { categorySchema, categoryArraySchema };

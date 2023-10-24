import { customAlphabet } from "nanoid";

const idGenerator = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ");
export const generateOrderId = () =>
  `${idGenerator(6)}-${idGenerator(6)}-${idGenerator(6)}`;

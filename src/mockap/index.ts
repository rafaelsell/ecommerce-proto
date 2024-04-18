import { Product } from "../types/ProductType";
import {mockapProducts} from "./mockapProducts";

export const getProducts = (): Product[] => {
  return mockapProducts;
};

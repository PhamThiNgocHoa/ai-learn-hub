import axios from "axios";
import type { Product } from "../data/types/product.ts";

export const getProducts = async (): Promise<Product[]> => {
    const response = await axios.get("/data/products.json");
    return response.data.data;
};

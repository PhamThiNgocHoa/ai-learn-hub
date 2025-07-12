import axios from "axios";
import type { Product } from "../data/types/product.ts";

export const getProducts = async (): Promise<Product[]> => {
    const response = await axios.get("/api/getListProduct");
    return response.data.data;
};

export const getViewedProducts = async (userId: string): Promise<Product[]> => {
    const response = await axios.get(`/api/viewedProducts/${userId}`);
    return response.data.data;
};

export const saveViewedProduct = async (userId: string, product: Product): Promise<void> => {
    await axios.post("/api/viewedProducts", { userId, product });
};

export const getHeartedProducts = async (userId: string): Promise<Product[]> => {
    const response = await axios.get(`/api/heartedProducts/${userId}`);
    return response.data.data;
};

export const saveHeartedProduct = async (userId: string, product: Product): Promise<void> => {
    await axios.post("/api/heartedProducts", { userId, product });
};

export const deleteHeartedProduct = async (userId: string, productId: string): Promise<void> => {
    await axios.delete(`/api/heartedProducts`, {
        data: { userId, productId },
    });
};


export const getSuggestedProducts = async (userId: string): Promise<Product[]> => {
    const response = await axios.get(`/api/suggestions?userId=${userId}`);
    return response.data.data;
};

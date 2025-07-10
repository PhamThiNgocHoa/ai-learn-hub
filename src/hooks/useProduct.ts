import type {Product} from "../data/types/product.ts";
import {useEffect, useState} from "react";
import {getProducts} from "../api/products.ts";

const useProduct = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProductList(response);
            } catch (error) {
                console.error("Lỗi khi load sản phẩm:", error);
            }
        };

        fetchProducts();
    }, []);
    
    return {productList}
}
export default useProduct;
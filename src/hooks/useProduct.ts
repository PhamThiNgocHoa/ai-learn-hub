import type {Product} from "../data/types/product";
import {useEffect, useState} from "react";
import {getProducts, saveHeartedProduct, saveViewedProduct} from "../api/products";
import {PriceFilter} from "../data/enum/PriceFilter.ts";

const useProduct = (filter: PriceFilter = PriceFilter.All) => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await getProducts();

                const filtered = response.filter((product) => {
                    const discountPrice = product.price - (product.price * product.discountPercent) / 100;
                    switch (filter) {
                        case PriceFilter.Under500:
                            return discountPrice < 500000;
                        case PriceFilter.From500To1M:
                            return discountPrice >= 500000 && discountPrice <= 1000000;
                        case PriceFilter.Over1M:
                            return discountPrice > 1000000;
                        case PriceFilter.All:
                        default:
                            return true;
                    }
                });

                setProductList(filtered);
            } catch (err) {
                console.error("Lỗi khi load sản phẩm:", err);
                setError("Lỗi khi tải sản phẩm");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [filter]);

    const getProductById = (id: string): Product | undefined => {
        return productList.find(product => product.id === id);
    };

    const handleSaveViewedProduct = async (userId: string, product: Product) => {
        try {
            await saveViewedProduct(userId, product);
        } catch (error) {
            console.error("Lỗi khi lưu sản phẩm đã xem:", error);
        }
    };

    const handleSaveHeartedProduct = async (userId: string, product: Product) => {
        try {
            await saveHeartedProduct(userId, product);
        } catch (error) {
            console.error("Lỗi khi lưu sản phẩm yêu thích:", error);
        }
    }


    return {productList, getProductById, handleSaveViewedProduct, handleSaveHeartedProduct, loading, error};
};

export default useProduct;

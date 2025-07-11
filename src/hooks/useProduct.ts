import {type Product, products} from "../data/types/product";
import {useEffect, useState} from "react";
import {
    getHeartedProducts,
    getProducts,
    getSuggestedProducts, getViewedProducts,
    saveHeartedProduct,
    saveViewedProduct
} from "../api/products";
import {PriceFilter} from "../data/enum/PriceFilter.ts";

const useProduct = (userId: string, filter: PriceFilter = PriceFilter.All) => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
    const [suggestedLoading, setSuggestedLoading] = useState<boolean>(false);
    const [heartedProducts, setHeartedProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewedProducts, setViewedProducts] = useState<Product[]>([]);


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

    const relatedProducts = products.filter(product =>
        heartedProducts.some(hp =>
            product.name.toLowerCase().includes(hp.name.split(" ")[0].toLowerCase()) && product.id !== hp.id
        )
    );

    const handleSaveViewedProduct = async (product: Product) => {
        try {
            await saveViewedProduct(userId, product);
        } catch (error) {
            console.error("Lỗi khi lưu sản phẩm đã xem:", error);
        }
    };

    const handleToggleHearted = async (product: Product) => {
        try {
            await saveHeartedProduct(userId, product);
            const updated = await getHeartedProducts(userId);
            setHeartedProducts(updated);
        } catch (error) {
            console.error("Lỗi khi lưu sản phẩm yêu thích:", error);
        }
    };

    const handleGetSuggestedProducts = async () => {
        setSuggestedLoading(true);
        try {
            const res = await getSuggestedProducts(userId);
            setSuggestedProducts(res);
            console.log("data", res);
        } catch (err) {
            console.error("Lỗi khi lấy gợi ý sản phẩm:", err);
        } finally {
            setSuggestedLoading(false);
        }
    };

    useEffect(() => {
        const fetchHeartedProducts = async () => {
            try {
                const data = await getHeartedProducts(userId);
                setHeartedProducts(data);
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm yêu thích:", error);
            }
        };

        if (userId) {
            fetchHeartedProducts();
        }
    }, [userId]);

    useEffect(() => {
        const fetchViewProducts = async () => {
            try {
                const data = await getViewedProducts(userId);
                setViewedProducts(data);
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm da xem:", error);
            }
        };

        if (userId) {
            fetchViewProducts();
        }
    }, [userId]);


    const handleOpenModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return {
        productList,
        relatedProducts,
        getProductById,
        handleSaveViewedProduct,
        handleToggleHearted,
        handleGetSuggestedProducts,
        suggestedProducts,
        suggestedLoading,
        heartedProducts,
        setHeartedProducts,
        viewedProducts,
        selectedProduct,
        isModalOpen,
        handleOpenModal,
        handleCloseModal,
        loading,
        error
    };
};

export default useProduct;

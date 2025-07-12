import {type Product, products} from "../data/types/product";
import {useEffect, useState} from "react";
import {
    deleteHeartedProduct,
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
    const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
    const [suggestedLoading, setSuggestedLoading] = useState<boolean>(false);
    const [heartedProducts, setHeartedProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewedProducts, setViewedProducts] = useState<Product[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setErrorMessage("");
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
            } catch {
                setErrorMessage("Đã xảy ra lỗi khi xử lý dữ liệu.");
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
        } catch {
            setErrorMessage("Đã xảy ra lỗi khi xử lý dữ liệu.");
        }
    };

    const handleToggleHearted = async (product: Product) => {
        try {
            const existing = heartedProducts.find((p) => p.id === product.id);

            if (existing) {
                await deleteHeartedProduct(userId, product.id);
            } else {
                await saveHeartedProduct(userId, product);
            }

            const updated = await getHeartedProducts(userId);
            setHeartedProducts(updated);
        } catch {
            setErrorMessage("Đã xảy ra lỗi khi xử lý dữ liệu.");
        }
    };

    const handleGetSuggestedProducts = async () => {
        setSuggestedLoading(true);
        try {
            const res = await getSuggestedProducts(userId);
            setSuggestedProducts(res);
            console.log("data", res);
        } catch {
            setErrorMessage("Không thể lấy gợi ý lúc này");
        } finally {
            setSuggestedLoading(false);
        }
    };

    useEffect(() => {
        const fetchHeartedProducts = async () => {
            try {
                const data = await getHeartedProducts(userId);
                setHeartedProducts(data);
            } catch {
                setErrorMessage("Đã xảy ra lỗi khi xử lý dữ liệu.");
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
            } catch {
                setErrorMessage("Đã xảy ra lỗi khi xử lý dữ liệu.");
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
        errorMessage,
    };
};

export default useProduct;

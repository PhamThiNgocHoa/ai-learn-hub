import {useState, useEffect} from "react";
import type {Product} from "../data/types/product.ts";
import {getProducts} from "../api/products.ts";

const useHeader = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [productList, setProductList] = useState<Product[]>([]);
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getProducts();
                setProductList(products);
            } catch {
                setErrorMessage("Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.");
            }
        };

        fetchData();
    }, []);


    const handleSearch = async (value: string) => {
        try {
            setSearchTerm(value);
            if (value.length > 0) {
                const filtered = productList.filter((product) =>
                    product.name.toLowerCase().includes(value.toLowerCase())
                );
                setSuggestions(filtered.map((p) => p.name));
                setSearchResults(filtered);
            } else {
                setSuggestions([]);
                setSearchResults([]);
            }
        } catch {
            setErrorMessage("Đã xảy ra lỗi khi tìm kiếm sản phẩm.");
        }
    };


    return {
        searchTerm,
        suggestions,
        handleSearch,
        setSearchTerm,
        setSuggestions,
        searchResults,
        errorMessage,
    };
};

export default useHeader;

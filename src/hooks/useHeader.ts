import { useState, useEffect } from "react";
import type { Product } from "../data/types/product.ts";
import {getProducts} from "../api/products.ts";

const useHeader = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [productList, setProductList] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts();
            setProductList(products);
        };
        fetchData();
    }, []);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        if (value.length > 0) {
            const filtered = productList
                .filter((product) =>
                    product.name.toLowerCase().includes(value.toLowerCase())
                )
                .map((product) => product.name);
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    return {
        searchTerm,
        suggestions,
        handleSearch,
        setSearchTerm,
        setSuggestions,
    };
};

export default useHeader;

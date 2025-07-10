import React from "react";
import type { Product } from "../../data/types/product.ts";
import CardProduct from "./CardProduct.tsx";
import ProductPagination from "./ProductPagination.tsx";

interface Props {
    title: string;
    products: Product[];
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
    onViewDetail: (product: Product) => void;
}

const ProductSection: React.FC<Props> = ({
                                             title,
                                             products,
                                             currentPage,
                                             totalPages,
                                             setCurrentPage,
                                             onViewDetail,
                                         }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                    <CardProduct key={product.id} product={product} onViewDetail={() => onViewDetail(product)} />
                ))}
            </div>
            <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ProductSection;

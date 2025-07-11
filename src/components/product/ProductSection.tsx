import React from "react";
import type { Product } from "../../data/types/product.ts";
import CardProduct from "./CardProduct.tsx";
import ProductPagination from "./ProductPagination.tsx";
import {AnimatePresence, motion} from "framer-motion";

interface Props {
    title: string;
    products: Product[];
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
    onViewDetail: (product: Product) => void;
    heartedProducts: Product[];
    handleToggleHearted: (product: Product) => void;
}

const ProductSection: React.FC<Props> = ({
                                             title,
                                             products,
                                             currentPage,
                                             totalPages,
                                             setCurrentPage,
                                             onViewDetail,
                                             heartedProducts,
                                             handleToggleHearted,
                                         }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{title}</h2>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2"
                >
                    {products.map((product) => (
                        <CardProduct
                            key={product.id}
                            product={product}
                            isHearted={heartedProducts.some((p) => p.id === product.id)}
                            onViewDetail={() => onViewDetail(product)}
                            onHeartToggle={handleToggleHearted}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

            <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ProductSection;

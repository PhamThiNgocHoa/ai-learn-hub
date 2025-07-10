import { useState } from "react";
import useProduct from "../../hooks/useProduct.ts";
import usePagination from "../../hooks/usePagination.ts";
import ProductFilter from "./ProductFilter.tsx";
import ProductDetailModal from "../productDetail/ProductDetailModal.tsx";
import ProductSection from "./ProductSection.tsx";
import { PriceFilter } from "../../data/enum/PriceFilter.ts";
import type { Product } from "../../data/types/product.ts";

const ProductList = () => {
    const [filter, setFilter] = useState<PriceFilter>(PriceFilter.All);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { productList } = useProduct(filter);

    const books = productList.filter((p) => p.type === "Book");
    const courses = productList.filter((p) => p.type === "Course");

    const bookPagination = usePagination(books, 8);
    const coursePagination = usePagination(courses, 8);

    const handleOpenModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-10">
            <ProductFilter filter={filter} setFilter={setFilter} />

            <ProductSection
                title="Tài liệu & Sách"
                products={bookPagination.currentItems}
                currentPage={bookPagination.currentPage}
                totalPages={bookPagination.totalPages}
                setCurrentPage={bookPagination.setCurrentPage}
                onViewDetail={handleOpenModal}
            />

            <ProductSection
                title="Khóa học"
                products={coursePagination.currentItems}
                currentPage={coursePagination.currentPage}
                totalPages={coursePagination.totalPages}
                setCurrentPage={coursePagination.setCurrentPage}
                onViewDetail={handleOpenModal}
            />

            <ProductDetailModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default ProductList;

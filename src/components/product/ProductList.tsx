import {useState} from "react";
import useProduct from "../../hooks/useProduct.ts";
import usePagination from "../../hooks/usePagination.ts";
import ProductFilter from "./ProductFilter.tsx";
import ProductDetailModal from "../productDetail/ProductDetailModal.tsx";
import ProductSection from "./ProductSection.tsx";
import {PriceFilter} from "../../data/enum/PriceFilter.ts";
import {useUser} from "../../hooks/useUser.ts";
import type {Product} from "../../data/types/product.ts";
import ErrorMessage from "../ErrorMessage.tsx";

type ProductListProps = {
    searchTerm: string;
    searchResults: Product[];
};

const ProductList = ({searchTerm, searchResults}: ProductListProps) => {
    const [filter, setFilter] = useState<PriceFilter>(PriceFilter.All);
    const {userId} = useUser();
    const {
        handleToggleHearted,
        heartedProducts,
        isModalOpen,
        selectedProduct,
        handleOpenModal,
        handleCloseModal,
        productList,
        suggestedProducts,
        handleGetSuggestedProducts,
        suggestedLoading,
        errorMessage,
    } = useProduct(userId, filter);

    const [showSuggested, setShowSuggested] = useState(false);

    const books = productList.filter((p) => p.type === "Book");
    const courses = productList.filter((p) => p.type === "Course");

    const bookPagination = usePagination(books, 4);
    const coursePagination = usePagination(courses, 8);
    const suggestedPagination = usePagination(suggestedProducts, 8);


    const handleSuggestClick = async () => {
        setShowSuggested(true);
        await handleGetSuggestedProducts();
    };

    return (
        <div className="px-10">
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <ProductFilter
                filter={filter}
                setFilter={(f) => {
                    setShowSuggested(false);
                    setFilter(f);
                }}
                onSuggestClick={handleSuggestClick}
                loading={suggestedLoading}
            />
            {searchTerm ? (
                searchResults.length > 0 ? (
                    <ProductSection
                        title={`Kết quả cho "${searchTerm}"`}
                        products={searchResults}
                        currentPage={1}
                        totalPages={1}
                        setCurrentPage={() => {}}
                        onViewDetail={handleOpenModal}
                        heartedProducts={heartedProducts}
                        handleToggleHearted={handleToggleHearted}
                    />
                ) : (
                    <div className="text-center text-gray-500 mt-8 text-lg">
                        Không tìm thấy sản phẩm phù hợp với "{searchTerm}"
                    </div>
                )
            ) : showSuggested ? (
                suggestedLoading ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg"/>
                        ))}
                    </div>
                ) : suggestedPagination.currentItems.length > 0 ? (
                    <ProductSection
                        title="Gợi ý tài liệu & khóa học"
                        products={suggestedPagination.currentItems}
                        currentPage={suggestedPagination.currentPage}
                        totalPages={suggestedPagination.totalPages}
                        setCurrentPage={suggestedPagination.setCurrentPage}
                        onViewDetail={handleOpenModal}
                        heartedProducts={heartedProducts}
                        handleToggleHearted={handleToggleHearted}
                    />
                ) : (
                    <div className="text-center text-gray-500 mt-8 text-lg">
                        Không có kết quả gợi ý nào.
                    </div>
                )
            ) : (
                <>
                    <ProductSection
                        title="Tài liệu & Sách"
                        products={bookPagination.currentItems}
                        currentPage={bookPagination.currentPage}
                        totalPages={bookPagination.totalPages}
                        setCurrentPage={bookPagination.setCurrentPage}
                        onViewDetail={handleOpenModal}
                        heartedProducts={heartedProducts}
                        handleToggleHearted={handleToggleHearted}
                    />
                    <ProductSection
                        title="Khóa học"
                        products={coursePagination.currentItems}
                        currentPage={coursePagination.currentPage}
                        totalPages={coursePagination.totalPages}
                        setCurrentPage={coursePagination.setCurrentPage}
                        onViewDetail={handleOpenModal}
                        heartedProducts={heartedProducts}
                        handleToggleHearted={handleToggleHearted}
                    />
                </>
            )}

            <ProductDetailModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default ProductList;

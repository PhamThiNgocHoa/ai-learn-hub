import {useState} from "react";
import useProduct from "../../hooks/useProduct.ts";
import usePagination from "../../hooks/usePagination.ts";
import ProductFilter from "./ProductFilter.tsx";
import ProductDetailModal from "../productDetail/ProductDetailModal.tsx";
import ProductSection from "./ProductSection.tsx";
import {PriceFilter} from "../../data/enum/PriceFilter.ts";
import {useUser} from "../../hooks/useUser.ts";


const ProductList = () => {
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
        suggestedLoading
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
        <div className="space-y-6 px-10">
            <ProductFilter
                filter={filter}
                setFilter={(f) => {
                    setShowSuggested(false);
                    setFilter(f);
                }}
                onSuggestClick={handleSuggestClick}
                loading={suggestedLoading}
            />

            {showSuggested ? (
                <>
                    {suggestedLoading ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg"/>
                            ))}
                        </div>
                    ) : (
                        <ProductSection
                            title="Gợi ý cho bạn"
                            products={suggestedPagination.currentItems}
                            currentPage={suggestedPagination.currentPage}
                            totalPages={suggestedPagination.totalPages}
                            setCurrentPage={suggestedPagination.setCurrentPage}
                            onViewDetail={handleOpenModal}
                            heartedProducts={heartedProducts}
                            handleToggleHearted={handleToggleHearted}
                        />
                    )}
                </>
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

import {useUser} from "../hooks/useUser.ts";
import ProductDetailModal from "../components/productDetail/ProductDetailModal.tsx";
import useProduct from "../hooks/useProduct.ts";
import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import ProductSection from "../components/product/ProductSection.tsx";
import usePagination from "../hooks/usePagination.ts";
import FavoriteTable from "../components/favorite/FavoriteTable.tsx";
import type {Product} from "../data/types/product.ts";

const HeartedProduct = () => {
    const {userId} = useUser();
    const {
        handleToggleHearted,
        heartedProducts,
        isModalOpen,
        selectedProduct,
        handleOpenModal,
        handleCloseModal,
        viewedProducts,
        setHeartedProducts
    } = useProduct(userId);

    const viewedProduct = usePagination(viewedProducts, 4);

    const handleDelete = (product: Product) => {
        setHeartedProducts((prev) => prev.filter((p) => p.id !== product.id));
    };

    const handleAddToCart = (product: Product) => {
        console.log("Đã thêm vào giỏ:", product);
    };

    return (
        <>
            <Header/>
            <div className="mx-auto mt-2">
                <h2 className="text-2xl text-teal-600 font-bold py-4 mb-6 px-2 sm:px-16">
                    Sản phẩm yêu thích
                </h2>

                <FavoriteTable
                    products={heartedProducts}
                    onDelete={handleDelete}
                    onAddToCart={handleAddToCart}
                />

                <ProductDetailModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />

                {viewedProducts.length > 0 && (
                    <div className="bg-teal-100 py-8 mt-10 shadow px-4 sm:px-16">

                        <ProductSection
                            title="Sản phẩm đã xem"
                            products={viewedProduct.currentItems}
                            currentPage={viewedProduct.currentPage}
                            totalPages={viewedProduct.totalPages}
                            setCurrentPage={viewedProduct.setCurrentPage}
                            onViewDetail={handleOpenModal}
                            heartedProducts={heartedProducts}
                            handleToggleHearted={handleToggleHearted}
                        />
                    </div>
                )}
            </div>

            <Footer/>
        </>
    );
};

export default HeartedProduct;

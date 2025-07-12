import {useUser} from "../hooks/useUser.ts";
import ProductDetailModal from "../components/productDetail/ProductDetailModal.tsx";
import useProduct from "../hooks/useProduct.ts";
import Footer from "../components/footer/Footer.tsx";
import ProductSection from "../components/product/ProductSection.tsx";
import usePagination from "../hooks/usePagination.ts";
import FavoriteTable from "../components/favorite/FavoriteTable.tsx";
import type {Product} from "../data/types/product.ts";
import LogoSection from "../components/header/LogoSection.tsx";

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
            <div className="flex justify-between items-center px-2">
                <div className="flex items-center py-4">
                    <LogoSection/>
                    <h2 className="ml-4 text-2xl font-semibold text-teal-600">
                        Sản phẩm yêu thích
                    </h2>
                </div>
            </div>
            <div className="mx-auto mt-2">


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

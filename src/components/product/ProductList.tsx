import useProduct from "../../hooks/useProduct.ts";
import CardProduct from "./CardProduct.tsx";
import usePagination from "../../hooks/usePagination.ts";

const ProductList = () => {
    const { productList } = useProduct();
    const {
        currentPage,
        setCurrentPage,
        totalPages,
        currentItems: currentProducts,
    } = usePagination(productList, 8);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 border rounded 
                            ${currentPage === index + 1
                            ? "bg-orange-500 text-white"
                            : "bg-white text-black"}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

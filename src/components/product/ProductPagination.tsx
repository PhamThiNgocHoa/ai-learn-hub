import React from "react";

interface Props {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

const ProductPagination: React.FC<Props> = ({ currentPage, totalPages, setCurrentPage }) => {
    return (
        <div className="flex justify-center gap-2 pt-8">
            {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                return (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-4 h-4 rounded-full 
                            ${currentPage === page ? "bg-orange-500" : "bg-gray-300"} 
                            transition duration-300 ease-in-out`}
                        aria-label={`Trang ${page}`}
                    ></button>
                );
            })}
        </div>
    );
};

export default ProductPagination;

import React from "react";

interface Props {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

const ProductPagination: React.FC<Props> = ({ currentPage, totalPages, setCurrentPage }) => {
    return (
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
    );
};

export default ProductPagination;

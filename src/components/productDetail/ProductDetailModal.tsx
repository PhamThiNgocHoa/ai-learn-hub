import React, {useState} from "react";
import type {Product} from "../../data/types/product.ts";
import CustomButton from "../button/CustomButton.tsx";

interface ProductDetailModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({product, isOpen, onClose}) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<string[]>([]);

    if (!isOpen || !product) return null;

    const handleCommentSubmit = () => {
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment("");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl relative shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
                >
                    ×
                </button>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 bg-white p-4 rounded-xl">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 rounded-lg object-cover shadow-sm transition-transform duration-300 hover:scale-105"
                        />

                        <p className="mt-6 text-gray-700 text-sm">
                            {product.type === "Book"
                                ? "Khám phá kiến thức phong phú qua từng trang sách, phù hợp với mọi trình độ."
                                : "Trải nghiệm khóa học trực tuyến với bài giảng sinh động và dễ hiểu."}
                        </p>

                        <p className="mt-4 text-base font-medium text-gray-800">
                            {product.type === "Book"
                                ? "Tổng số bài học: "
                                : "Tổng số bài giảng: "}
                            <span className="text-orange-600 font-semibold">{product.totalLessons}</span>
                        </p>

                        <CustomButton title="Xem chi tiết" className="mt-5 w-full hover:bg-orange-600">
                            <span className="sm:inline ml-1">
                                {product.type === "Book" ? "📖 Mua ngay" : "🎓 Đăng ký khóa học"}
                            </span>
                        </CustomButton>
                    </div>


                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                        <p className="text-lg text-orange-500 font-semibold mt-2">
                            {product.price.toLocaleString()}đ
                        </p>
                        <p className="text-sm text-gray-700 mt-4">{product.longDescription}</p>

                        {product.type === "Book" && (
                            <p className="mt-2 text-sm text-gray-600">Số trang: {product.totalLessons}</p>
                        )}

                        {product.type === "Course" && (
                            <p className="mt-2 text-sm text-gray-600">Số bài học: {product.totalLessons}</p>
                        )}

                        <div className="flex items-center mt-4">
                            <span className="text-gray-700 mr-2">Đánh giá:</span>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className={`w-5 h-5 ${star <= (product.rating ?? 0) ? "text-yellow-400" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.174 3.617a1 1 0 00.95.69h3.801c.969 0 1.371 1.24.588 1.81l-3.073 2.234a1 1 0 00-.364 1.118l1.174 3.617c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.073 2.234c-.784.57-1.838-.197-1.54-1.118l1.174-3.617a1 1 0 00-.364-1.118L3.124 9.044c-.783-.57-.38-1.81.588-1.81h3.8a1 1 0 00.951-.69l1.174-3.617z"/>
                                </svg>
                            ))}
                            <span className="ml-2 text-sm text-gray-600">({product.rating}/5)</span>
                        </div>


                        <div className="mt-4">
                            <h3 className="text-md font-semibold mb-2">Bình luận</h3>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Nhập bình luận..."
                                className="w-full border border-gray-300 p-2 rounded resize-none"
                                rows={3}
                            />
                            <CustomButton
                                onClick={handleCommentSubmit} className="hover:bg-orange-600"
                            >
                                Gửi bình luận
                            </CustomButton>

                            <ul className="mt-3 space-y-2">
                                {comments.map((c, index) => (
                                    <li key={index} className="text-sm text-gray-800 border-b pb-1">
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;

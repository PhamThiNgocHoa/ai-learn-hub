import { FaTrashAlt } from "react-icons/fa";
import type {Product} from "../../data/types/product.ts";

interface Props {
    product: Product;
    onDelete: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

const FavoriteProductRow = ({ product, onDelete, onAddToCart }: Props) => {
    return (
        <tr className="border-b hover:bg-teal-50 transition-all duration-300">
            <td className="py-3 px-2 sm:px-4 text-center">
                <button
                    onClick={() => onDelete(product)}
                    className="text-orange-600 hover:text-orange-700"
                    title="Xóa"
                >
                    <FaTrashAlt />
                </button>
            </td>
            <td className="flex items-center gap-3 sm:gap-4 py-3 px-2 sm:px-4">
                <img src={product.image} alt={product.name} className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md" />
                <span className="text-gray-800 text-sm sm:text-base">{product.name}</span>
            </td>
            <td className="py-3 px-2 sm:px-4 text-gray-900 text-sm sm:text-base whitespace-nowrap">
                {product.price.toLocaleString()} đ
            </td>
            <td className="py-3 px-2 sm:px-4 text-center">
                <button
                    onClick={() => onAddToCart(product)}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm transition-all"
                >
                    Thêm giỏ hàng
                </button>
            </td>
        </tr>
    );
};

export default FavoriteProductRow;

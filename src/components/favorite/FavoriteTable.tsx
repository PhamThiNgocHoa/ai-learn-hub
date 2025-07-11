import FavoriteProductRow from "./FavoriteProductRow";
import type {Product} from "../../data/types/product.ts";

interface Props {
    products: Product[];
    onDelete: (product: Product) => void;
    onAddToCart: (product: Product) => void;
}

const FavoriteTable = ({ products, onDelete, onAddToCart }: Props) => {
    return (
        <div className="overflow-x-auto rounded px-2 sm:px-16 ">
            <table className="min-w-full border-collapse">
                <thead>
                <tr className="bg-teal-500 text-white text-xs sm:text-sm">
                    <th className="py-2 px-2 sm:px-4 text-center">Xóa</th>
                    <th className="py-2 px-2 sm:px-4">Tên sản phẩm</th>
                    <th className="py-2 px-2 sm:px-4">Đơn giá</th>
                    <th className="py-2 px-2 sm:px-4 text-center">Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {products.length === 0 ? (
                    <tr>
                        <td colSpan={4} className="text-center py-10 text-gray-500 italic">
                            Không có sản phẩm yêu thích nào.
                        </td>
                    </tr>
                ) : (
                    products.map((p) => (
                        <FavoriteProductRow
                            key={p.id}
                            product={p}
                            onDelete={onDelete}
                            onAddToCart={onAddToCart}
                        />
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default FavoriteTable;

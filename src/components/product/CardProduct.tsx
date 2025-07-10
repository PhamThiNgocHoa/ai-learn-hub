import React from "react";
import type {Product} from "../../data/types/product.ts";
import {useNavigate} from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai";
import LikeButton from "../button/LikeButton.tsx";
import CustomButton from "../button/CustomButton.tsx";

interface Props {
    product: Product;
}

const CardProduct: React.FC<Props> = ({product}) => {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = React.useState(false);
    const discountPrice = product.price - (product.price * product.discountPercent) / 100;


    return (
        <div
            className="border bg-white rounded shadow-md relative sm:w-62 p-2 sm:px-6 sm:py-4 hover:-translate-y-5 transition-transform">
            {product.isHot && (
                <span
                    className="absolute top-2 left-2 bg-orange-500 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded">
            HOT
        </span>
            )}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-28 sm:h-40 object-cover mb-2 rounded"
            />
            <h2 className="text-sm sm:text-lg font-semibold line-clamp-2">{product.name}</h2>
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{product.description}</p>
            <div className="flex mt-1">
                {product.discountPercent ? (
                    <>
                        <p className="text-orange-500 font-bold text-sm sm:text-base">
                            {discountPrice.toLocaleString()}đ
                        </p>
                        <p className="text-gray-500 line-through text-xs sm:text-sm px-6">
                            {product.price.toLocaleString()}đ
                        </p>
                    </>
                ) : (
                    <p className="text-orange-500 font-bold text-sm sm:text-base">
                        {product.price.toLocaleString()}đ
                    </p>
                )}
            </div>

            <div className="flex justify-between items-center mt-2 sm:mt-3 gap-1">
                <CustomButton
                    onClick={() => navigate(`/product/${product.id}`)}
                    title="Xem chi tiết"
                >
                    <AiOutlineEye className="text-lg sm:text-xl"/>
                    <span className="hidden sm:inline ml-1">Xem chi tiết</span>
                </CustomButton>
                <LikeButton
                    isLiked={isFavorite}
                    onToggle={() => setIsFavorite(!isFavorite)}
                />
            </div>
        </div>

    );
};

export default CardProduct;

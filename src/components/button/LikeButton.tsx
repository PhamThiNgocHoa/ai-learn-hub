import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeButtonProps {
    isLiked: boolean;
    onToggle: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="text-orange-500 text-xl sm:text-2xl hover:scale-110 transition-transform"
            title={isLiked ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
        >
            {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
    );
};

export default LikeButton;

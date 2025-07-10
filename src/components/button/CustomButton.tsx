import type {ReactNode} from "react";

interface CustomButtonProps {
    onClick?: () => void;
    title?: string;
    children: ReactNode;
    className?: string;
}

const CustomButton = ({ onClick, title, children, className = "" }: CustomButtonProps) => {
    return (
        <button
            onClick={onClick}
            title={title}
            className={`bg-teal-500 text-white p-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base flex items-center justify-center hover:bg-teal-600 ${className}`}
        >
            {children}
        </button>
    );
};

export default CustomButton;

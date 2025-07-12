import React, {useEffect, useState} from "react";

interface ErrorMessageProps {
    message: string;
    className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message, className = ""}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!visible || !message) return null;

    return (
        <div
            className={`bg-red-100 text-red-700 border border-red-400 rounded px-4 py-3 mb-4 ${className}`}
            role="alert"
        >
            <strong className="font-bold">Lỗi: </strong>
            <span className="block sm:inline">{message}</span>
        </div>
    );
};

export default ErrorMessage;

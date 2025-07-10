import { useEffect, useState } from "react";

const banners = [
    { url: "https://admin.ebomb.edu.vn/uploads/images/userfiles/aland/cover_ebombaland02.jpg", alt: "Khám phá sản phẩm mới" },
    { url: "https://csc.edu.vn/data/images/slider/lap-trinh/LTV-T3H.png", alt: "Ưu đãi hấp dẫn hôm nay" },
    { url: "https://haenglish.edu.vn/wp-content/uploads/2023/05/Banner3-02.png", alt: "Mua sắm tiện lợi" },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[120px] sm:h-[300px] mt-5 overflow-hidden rounded-xl shadow-lg mx-auto">
            {banners.map((banner, index) => (
                <img
                    key={index}
                    src={banner.url}
                    alt={banner.alt}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                />
            ))}
        </div>


    );
};

export default Banner;

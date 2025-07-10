// src/data/products.ts
import type {Product} from "./types/product.ts";
export const products: Product[] = [
    {
        id: "1",
        name: "Khoá học Tiếng Anh Giao tiếp",
        price: 490000,
        image: "https://via.placeholder.com/200x150?text=English+Course",
        description: "Cải thiện khả năng giao tiếp tiếng Anh trong 30 ngày.",
    },
    {
        id: "2",
        name: "Giáo trình Lập trình React",
        price: 320000,
        image: "https://via.placeholder.com/200x150?text=React+Book",
        description: "Từ cơ bản đến nâng cao về React.",
    },
    {
        id: "3",
        name: "Tài liệu IELTS Writing",
        price: 250000,
        image: "https://via.placeholder.com/200x150?text=IELTS+Writing",
        description: "Tổng hợp mẫu bài và hướng dẫn chi tiết.",
    }
];



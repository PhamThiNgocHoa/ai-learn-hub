// product.ts

export interface Product {
    id: string;
    name: string;
    price: number;
    discountPercent: number;
    image: string;
    description: string;
    totalLessons: number;
    longDescription: string;
    isHot: boolean;
    isLike: boolean;
    type: string;
    rating?: number;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Khoá học Tiếng Anh Giao tiếp",
        price: 490000,
        discountPercent: 20,
        image: "https://gpi.edu.vn/upload/baiviet/khoa-tieng-anh-giao-tiep-trinh-do-intermediate-2179.jpg",
        description: "Cải thiện khả năng giao tiếp tiếng Anh trong 30 ngày.",
        totalLessons: 20,
        longDescription: "Khóa học Tiếng Anh Giao tiếp được thiết kế dành cho người mới bắt đầu và người học muốn cải thiện khả năng nói chuyện hằng ngày. Bạn sẽ được học qua các tình huống thực tế, thực hành với giảng viên và cải thiện phản xạ tiếng Anh.",
        isHot: true,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "2",
        name: "Giáo trình Lập trình React",
        price: 320000,
        discountPercent: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13I7yvjkobaVwS0gHr8c9KwKCo5vYiT7u8Q&s",
        description: "Từ cơ bản đến nâng cao về React.",
        totalLessons: 20,
        longDescription: "Giáo trình Lập trình React giúp bạn xây dựng nền tảng vững chắc về thư viện React – một công cụ phổ biến trong phát triển web hiện đại. Khóa học bao gồm các khái niệm từ cơ bản như JSX, component, state, props đến các kỹ thuật nâng cao như React Router, quản lý trạng thái với Context API và Redux...",
        isHot: true,
        isLike: false,
        rating:2,
        type: "Book"
    },
    {
        id: "3",
        name: "Tài liệu IELTS Writing",
        price: 250000,
        discountPercent: 10,
        image: "https://etest.edu.vn/wp-content/uploads/2024/05/7-tai-lieu-ielts-writing.jpg",
        description: "Tổng hợp mẫu bài và hướng dẫn chi tiết.",
        totalLessons: 20,
        longDescription: "Tài liệu IELTS Writing cung cấp hướng dẫn chi tiết và chiến lược làm bài cho cả hai phần Writing Task 1 và Task 2. Nội dung bao gồm phân tích các dạng bài phổ biến, từ vựng học thuật, cấu trúc bài viết chuẩn, các mẫu câu hữu ích và bài mẫu band cao.",
        isHot: true,
        isLike: false,
        rating:2,
        type: "Book"
    },
    {
        id: "4",
        name: "Sách luyện thi TOEIC",
        price: 210000,
        discountPercent: 1,
        image: "https://eiv.edu.vn/wp-content/uploads/2023/06/Sach-Very-Easy-TOEIC.png",
        description: "Bộ sách luyện thi TOEIC đầy đủ.",
        totalLessons: 20,
        longDescription: "Cuốn sách luyện thi TOEIC này được thiết kế nhằm giúp người học nắm vững cấu trúc đề thi TOEIC, đồng thời cải thiện kỹ năng nghe và đọc hiểu một cách hiệu quả.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Book"
    },
    {
        id: "5",
        name: "Học lập trình Python cơ bản",
        price: 660000,
        discountPercent: 20,
        image: "https://files.fullstack.edu.vn/f8-prod/courses/6.png",
        description: "Khóa học lập trình Python cho người mới bắt đầu.",
        totalLessons: 20,
        longDescription: "Khóa học lập trình Python cơ bản được thiết kế dành cho người mới bắt đầu, giúp bạn xây dựng nền tảng vững chắc về lập trình với ngôn ngữ Python.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "6",
        name: "Hướng dẫn Java từ A đến Z",
        price: 450000,
        discountPercent: 30,
        image: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
        description: "Học lập trình Java một cách bài bản.",
        totalLessons: 20,
        longDescription: "Hướng dẫn Java từ A đến Z là tài liệu học lập trình Java toàn diện, dành cho cả người mới bắt đầu và những ai muốn nâng cao kỹ năng.",
        isHot: true,
        isLike: false,
        rating:2,
        type: "Book"
    },
    {
        id: "7",
        name: "Khóa học thiết kế UI/UX",
        price: 550000,
        discountPercent: 15,
        image: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
        description: "Tìm hiểu về thiết kế giao diện người dùng chuyên nghiệp.",
        totalLessons: 20,
        longDescription: "Khóa học thiết kế UI/UX cung cấp kiến thức từ cơ bản đến nâng cao về cách xây dựng giao diện người dùng (UI) hấp dẫn và trải nghiệm người dùng (UX) hiệu quả.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "8",
        name: "Khóa học SQL nâng cao",
        price: 390000,
        discountPercent: 10,
        image: "https://s3-sgn09.fptcloud.com/codelearnstorage/files/thumbnails/image-course-05_ff526fa90b0b46dbaac4b98c2da521c0.png",
        description: "Làm việc với cơ sở dữ liệu và truy vấn nâng cao.",
        totalLessons: 20,
        longDescription: "Khóa học SQL nâng cao được thiết kế dành cho những người đã có kiến thức cơ bản về SQL và mong muốn nâng cao kỹ năng làm việc với cơ sở dữ liệu.",
        isHot: true,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "9",
        name: "Tài liệu học HTML & CSS",
        price: 180000,
        discountPercent: 20,
        image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
        description: "Hướng dẫn tạo website cơ bản với HTML & CSS.",
        totalLessons: 20,
        longDescription: "Tài liệu học HTML & CSS là bộ hướng dẫn toàn diện dành cho người mới bắt đầu muốn xây dựng nền tảng vững chắc về phát triển web.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Book"
    },
    {
        id: "10",
        name: "Khóa học Node.js thực chiến",
        price: 520000,
        discountPercent: 0,
        image: "https://duthanhduoc.com/_next/image?url=%2Fimg%2Fcourses%2Fnode%2Fnode_banner.jpg&w=1920&q=75",
        description: "Xây dựng backend với Node.js.",
        totalLessons: 20,
        longDescription: "Khóa học Node.js thực chiến giúp bạn nắm vững cách xây dựng các ứng dụng web phía server bằng JavaScript.",
        isHot: true,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "11",
        name: "Lập trình Android với Kotlin",
        price: 600000,
        discountPercent: 30,
        image: "https://vtitech.vn/wp-content/uploads/2019/09/1_RIANcAESOEI6IbMbxvE5Aw.jpeg",
        description: "Phát triển ứng dụng Android hiện đại.",
        totalLessons: 20,
        longDescription: "Khóa học Lập trình Android với Kotlin giúp bạn xây dựng ứng dụng Android hiện đại bằng ngôn ngữ Kotlin.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "12",
        name: "Học Vue.js từ cơ bản đến nâng cao",
        price: 670000,
        discountPercent: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2GOoQeHvl1e98k6M7Fat18isUDYepVXc8g&s",
        description: "Hướng dẫn chi tiết về Vue.js.",
        totalLessons: 20,
        longDescription: "Khóa học Học Vue.js từ cơ bản đến nâng cao được thiết kế để giúp bạn nhanh chóng làm chủ Vue – một trong những framework JavaScript phổ biến nhất hiện nay.",
        isHot: true,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "13",
        name: "Khóa học MongoDB chuyên sâu",
        price: 410000,
        discountPercent: 20,
        image: "https://i.ytimg.com/vi/U06G6sEiKVU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZzeHH4M2b-R3iM-84qbyhvf_6kw",
        description: "Cơ sở dữ liệu NoSQL phổ biến nhất.",
        totalLessons: 20,
        longDescription: "Khóa học MongoDB chuyên sâu giúp bạn hiểu rõ về cách hoạt động của cơ sở dữ liệu NoSQL phổ biến này.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "14",
        name: "Tự học Excel nâng cao",
        price: 290000,
        discountPercent: 0,
        image: "https://trungtamtinhocvanphong.edu.vn/wp-content/uploads/2023/06/Tu-Hoc-Excel.png",
        description: "Kỹ năng phân tích và xử lý dữ liệu với Excel.",
        totalLessons: 20,
        longDescription: "Khóa học Tự học Excel nâng cao được thiết kế dành cho những ai đã nắm vững kiến thức cơ bản và muốn nâng cao kỹ năng xử lý dữ liệu, phân tích và tự động hóa trong Excel.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "15",
        name: "Học lập trình C++ cơ bản",
        price: 310000,
        discountPercent: 0,
        image: "https://cdn.codegym.vn/wp-content/uploads/2021/11/huong-dacc83n-tucca3-hocca3c-lacca3p-trinh-c-co-bacc89n-online-hiecca3u-quacc89-2.jpg",
        description: "Nhập môn lập trình C++ cho sinh viên.",
        totalLessons: 20,
        longDescription: "Khóa học Học lập trình C++ cơ bản giúp người học từng bước tiếp cận ngôn ngữ lập trình C++ từ những kiến thức nền tảng nhất.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "16",
        name: "Adobe Photoshop cho người mới",
        price: 450000,
        discountPercent: 20,
        image: "https://vnskills.edu.vn/wp-content/uploads/2022/08/tu-hoc-photoshop.png",
        description: "Thiết kế ảnh chuyên nghiệp bằng Photoshop.",
        totalLessons: 20,
        longDescription: "Khóa học Adobe Photoshop cho người mới được thiết kế dành riêng cho người bắt đầu làm quen với thiết kế đồ họa.",
        isHot: true,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "17",
        name: "Khóa học Git & GitHub",
        price: 250000,
        discountPercent: 0,
        image: "https://cdn.codegym.vn/wp-content/uploads/2021/12/khoa-hoc-nhap-mon-git-va-github-online-mien-phi-codegym-7.jpg",
        description: "Quản lý mã nguồn với Git và GitHub.",
        totalLessons: 20,
        longDescription: "Khóa học Git & GitHub cung cấp kiến thức và kỹ năng để quản lý mã nguồn, làm việc nhóm hiệu quả qua hệ thống Git.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "18",
        name: "Khóa học Firebase cho web",
        price: 360000,
        discountPercent: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1hsMVuXYag5zi9zDb1RHgDmNvOIm6EINAA&s",
        description: "Xây dựng ứng dụng realtime với Firebase.",
        totalLessons: 20,
        longDescription: "Khóa học Firebase cho web hướng dẫn bạn cách sử dụng nền tảng Firebase để xây dựng ứng dụng web realtime.",
        isHot: false,
        isLike: false,
        rating:2,
        type: "Course"
    },
    {
        id: "19",
        name: "Khóa học JavaScript cơ bản",
        price: 400000,
        discountPercent: 10,
        image: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
        description: "Khóa học JavaScript từ cơ bản đến nâng cao.",
        totalLessons: 20,
        longDescription: "Khóa học JavaScript cơ bản giúp bạn làm quen với ngôn ngữ lập trình phổ biến nhất trên web.",
        isHot: true,
        isLike: false,
        rating:2,
        type: "Course"
    }
];

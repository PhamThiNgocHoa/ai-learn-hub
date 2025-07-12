const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Về chúng tôi</h3>
                    <p className="text-sm text-gray-300">
                        Chúng tôi cung cấp các khoá học lập trình chất lượng, dễ hiểu và thực tế.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Liên kết nhanh</h3>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">Trang chủ</a></li>
                        <li><a href="#" className="hover:text-white">Khoá học</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Liên hệ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Hỗ trợ</h3>
                    <ul className="text-sm space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">Câu hỏi thường gặp</a></li>
                        <li><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
                        <li><a href="#" className="hover:text-white">Điều khoản dịch vụ</a></li>
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-xl font-semibold mb-4">Kết nối với chúng tôi</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} LearnHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

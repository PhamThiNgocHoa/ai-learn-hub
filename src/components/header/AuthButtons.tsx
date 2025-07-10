const AuthButtons = () => (
    <div className="flex justify-center sm:justify-end gap-2">
        <button className="hidden sm:inline-block px-4 py-2 text-teal-500 border border-teal-500 rounded hover:bg-teal-100 transition">
            Đăng ký
        </button>
        <button className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 transition w-28">
            Đăng nhập
        </button>
    </div>
);

export default AuthButtons;

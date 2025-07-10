import Header from "../components/header/Header.tsx";

const HomePage = () => {
    return (
        <div className="w-screen bg-red-100 text-black">
            <Header/>
            <p className=" text-red-500 text-lg">
                Đây là đoạn chữ màu đỏ nằm bên trái.
            </p>
        </div>
    );
};

export default HomePage;

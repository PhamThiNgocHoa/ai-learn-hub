import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import ProductList from "../components/product/ProductList.tsx";

const HomePage = () => {
    return (
        <div className="w-screen text-black">
                <Header/>
                <div className="p-10">
                    <ProductList/>
                </div>
                <Footer/>
        </div>
    );
};

export default HomePage;

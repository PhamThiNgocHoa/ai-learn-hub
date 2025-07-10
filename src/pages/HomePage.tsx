import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import ProductList from "../components/product/ProductList.tsx";
import Banner from "../components/Banner.tsx";

const HomePage = () => {

    return (
        <div className="text-black">
            <Header/>
            <Banner/>
            <div className="p-10">
                <ProductList/>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;

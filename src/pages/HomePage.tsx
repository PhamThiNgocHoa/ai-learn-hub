import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import ProductList from "../components/product/ProductList.tsx";
import Banner from "../components/Banner.tsx";

const HomePage = () => {

    return (
        <>
            <Header/>
            <Banner/>
            <ProductList/>
            <Footer/>
        </>

    );
};

export default HomePage;

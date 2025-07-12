// HomePage.tsx
import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";
import ProductList from "../components/product/ProductList.tsx";
import Banner from "../components/Banner.tsx";
import useHeader from "../hooks/useHeader.ts";
import ErrorMessage from "../components/ErrorMessage.tsx";

const HomePage = () => {
    const {
        searchTerm,
        suggestions,
        handleSearch,
        setSearchTerm,
        setSuggestions,
        searchResults,
        errorMessage,
    } = useHeader();


    return (
        <>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <Header
                searchTerm={searchTerm}
                suggestions={suggestions}
                handleSearch={handleSearch}
                setSearchTerm={setSearchTerm}
                setSuggestions={setSuggestions}
            />
            <Banner/>
            <ProductList
                searchTerm={searchTerm}
                searchResults={searchResults}
            />
            <Footer/>
        </>
    );
};

export default HomePage;

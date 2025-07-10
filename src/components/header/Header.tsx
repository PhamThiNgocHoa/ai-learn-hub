import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";
import FavoriteIcon from "./FavoriteIcon";
import AuthButtons from "./AuthButtons";
import {products} from "../../data/products.ts";
import LogoSection from "./LogoSection.tsx";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        if (value.length > 0) {
            const filtered = products
                .filter((product) =>
                    product.name.toLowerCase().includes(value.toLowerCase())
                )
                .map((product) => product.name);
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };


    return (
        <div className="w-full mt-4 bg-white shadow-md px-4 py-3 sm:px-6 md:px-8">
            <div className="flex items-center flex-row sm:justify-between gap-4">
                <LogoSection />
                <div className="w-full sm:flex-1 relative">
                    <SearchBar value={searchTerm} onChange={handleSearch} />
                    <SearchSuggestions
                        suggestions={suggestions}
                        onSelect={(value) => {
                            setSearchTerm(value);
                            setSuggestions([]);
                        }}
                    />
                </div>
                <FavoriteIcon />
                <AuthButtons />
            </div>
        </div>
    );
};

export default Header;

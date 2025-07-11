import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";
import FavoriteIcon from "./FavoriteIcon";
import AuthButtons from "./AuthButtons";
import LogoSection from "./LogoSection.tsx";
import useHeader from "../../hooks/useHeader.ts";

const Header = () => {
    const {searchTerm, suggestions, handleSearch, setSearchTerm, setSuggestions} = useHeader();

    return (
        <div className="w-full bg-white shadow-md px-4 py-3 sm:px-6 md:px-8">
            <div className="flex items-center flex-row sm:justify-between gap-4">
                <LogoSection/>
                <div className="w-full sm:flex-1 relative">
                    <SearchBar value={searchTerm} onChange={handleSearch}/>
                    <SearchSuggestions
                        suggestions={suggestions}
                        onSelect={(value) => {
                            setSearchTerm(value);
                            setSuggestions([]);
                        }}
                    />
                </div>
                <FavoriteIcon/>
                <AuthButtons/>
            </div>
        </div>
    );
};

export default Header;

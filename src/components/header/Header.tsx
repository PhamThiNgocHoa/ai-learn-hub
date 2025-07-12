import AuthButtons from "./AuthButtons.tsx";
import FavoriteIcon from "./FavoriteIcon.tsx";
import SearchSuggestions from "./SearchSuggestions.tsx";
import SearchBar from "./SearchBar.tsx";
import LogoSection from "./LogoSection.tsx";

type HeaderProps = {
    searchTerm: string;
    suggestions: string[];
    handleSearch: (value: string) => void;
    setSearchTerm: (value: string) => void;
    setSuggestions: (value: string[]) => void;
};

const Header = ({
                    searchTerm,
                    suggestions,
                    handleSearch,
                    setSearchTerm,
                    setSuggestions
                }: HeaderProps) => {
    return (
        <div className="w-full bg-white shadow-md px-4 py-3 sm:px-6 md:px-8">
            <div className="flex items-center flex-row sm:justify-between gap-4">
                <LogoSection/>
                <p className="hidden sm:inline-block ml-2 text-2xl font-semibold text-teal-600">Learn Hub</p>

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

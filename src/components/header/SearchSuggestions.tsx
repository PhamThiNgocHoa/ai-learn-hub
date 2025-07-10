type Props = {
    suggestions: string[];
    onSelect: (value: string) => void;
};

const SearchSuggestions = ({ suggestions, onSelect }: Props) => {
    if (suggestions.length === 0) return null;

    return (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded shadow-md mt-1 max-h-60 overflow-y-auto">
            {suggestions.map((item, index) => (
                <li
                    key={index}
                    className="px-4 py-2 hover:bg-teal-100 cursor-pointer"
                    onClick={() => onSelect(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default SearchSuggestions;

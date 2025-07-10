type Props = {
    value: string;
    onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20AF9F]"
        />
    );
};

export default SearchBar;

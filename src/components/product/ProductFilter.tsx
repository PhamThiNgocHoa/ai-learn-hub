import { PriceFilter, PriceFilterLabelMap } from "../../data/enum/PriceFilter.ts";

interface ProductFilterProps {
    filter: PriceFilter;
    setFilter: (filter: PriceFilter) => void;
}

const ProductFilter = ({ filter, setFilter }: ProductFilterProps) => {
    return (
        <div className="flex flex-wrap gap-3 mb-4">
            {Object.entries(PriceFilterLabelMap).map(([key, label]) => (
                <button
                    key={key}
                    className={`px-4 py-2 rounded border ${
                        filter === key
                            ? "bg-orange-500 text-white"
                            : "bg-white text-black"
                    }`}
                    onClick={() => setFilter(key as PriceFilter)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default ProductFilter;

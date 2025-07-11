import {PriceFilter, PriceFilterLabelMap} from "../../data/enum/PriceFilter.ts";
import CustomButton from "../button/CustomButton.tsx";

interface ProductFilterProps {
    filter: PriceFilter;
    setFilter: (filter: PriceFilter) => void;
    onSuggestClick: () => void;
    loading: boolean;
}

const ProductFilter = ({filter, setFilter, onSuggestClick, loading}: ProductFilterProps) => {
    return (
        <div className="flex justify-between mt-6">
            <div className="flex flex-wrap gap-3 mb-4">
                {Object.entries(PriceFilterLabelMap).map(([key, label]) => (
                    <CustomButton
                        key={key}
                        onClick={() => setFilter(key as PriceFilter)}
                        className={`border ${
                            filter === key
                                ? "!bg-orange-500 !text-white !border-orange-500"
                                : "!bg-white !text-black !border-gray-300 hover:!bg-orange-100"
                        }`}
                    >
                        {label}
                    </CustomButton>
                ))}
            </div>

            <div>
                <CustomButton
                    onClick={onSuggestClick}
                    className="!bg-orange-500"
                >
                    {loading ? "Đang tải..." : "Gợi ý"}
                </CustomButton>

            </div>

        </div>
    );
};

export default ProductFilter;

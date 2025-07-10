export const PriceFilter = {
    All: "ALL",
    Under500: "UNDER_500",
    From500To1M: "FROM_500_TO_1M",
    Over1M: "OVER_1M",
} as const;

export type PriceFilter = typeof PriceFilter[keyof typeof PriceFilter];

export const PriceFilterLabelMap: Record<PriceFilter, string> = {
    [PriceFilter.All]: "Tất cả",
    [PriceFilter.Under500]: "Dưới 500K",
    [PriceFilter.From500To1M]: "500K - 1 triệu",
    [PriceFilter.Over1M]: "Trên 1 triệu"
};

import IconAll from "@asset/icon-all.png";
import IconProduct from "@asset/icon-product.png";
import IconCategory from "@asset/icon-category.png";
import IconExhibition from "@asset/icon-exhibition.png";
import IconBrand from "@asset/icon-category.png";

import { IGnbItems } from "@type/Global";

export const gnbItems: Array<IGnbItems> = [
    {
        id: 0,
        label: "전체",
        type: "",
        img: IconAll,
        isSelected: true,
    },
    {
        id: 1,
        label: "상품",
        type: "Product",
        img: IconProduct,
        isSelected: false,
    },
    {
        id: 2,
        label: "카테고리",
        type: "Category",
        img: IconCategory,
        isSelected: false,
    },
    {
        id: 3,
        label: "기획전",
        type: "Exhibition",
        img: IconExhibition,
        isSelected: false,
    },
    {
        id: 4,
        label: "브랜드",
        type: "Brand",
        img: IconBrand,
        isSelected: false,
    },
];

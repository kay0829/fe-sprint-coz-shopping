import React from "react";

import IconAll from "@asset/icon-all.png";
import IconProduct from "@asset/icon-product.png";
import IconCategory from "@asset/icon-category.png";
import IconDisplay from "@asset/icon-display.png";
import IconBrand from "@asset/icon-category.png";

interface IGnbItems {
    label: string;
    img: string;
    isSelected: boolean;
}

function Gnb() {
    const gnbItems: Array<IGnbItems> = [
        {
            label: "전체",
            img: IconAll,
            isSelected: true,
        },
        {
            label: "상품",
            img: IconProduct,
            isSelected: false,
        },
        {
            label: "카테고리",
            img: IconCategory,
            isSelected: false,
        },
        {
            label: "기획전",
            img: IconDisplay,
            isSelected: false,
        },
        {
            label: "브랜드",
            img: IconBrand,
            isSelected: false,
        },
    ];

    return (
        <div className="flex justify-center">
            {gnbItems.map((v: IGnbItems, i: number) => {
                return (
                    <div key={v.label} className={`${i !== gnbItems.length - 1 ? "mr-9" : ""} cursor-pointer`}>
                        <img src={v.img} alt="" className="w-82px h-82px mb-1.5" />

                        <div className="text-center">
                            {v.isSelected ? (
                                <p className="font-bold text-violet underline">{v.label}</p>
                            ) : (
                                <p>{v.label}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Gnb;

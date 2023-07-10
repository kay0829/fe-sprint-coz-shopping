import React, { useState } from "react";

import IconAll from "@asset/icon-all.png";
import IconProduct from "@asset/icon-product.png";
import IconCategory from "@asset/icon-category.png";
import IconExhibition from "@asset/icon-exhibition.png";
import IconBrand from "@asset/icon-category.png";

interface IGnbItems {
    id: number;
    label: string;
    img: string;
    isSelected: boolean;
}

function Gnb() {
    const gnbItems: Array<IGnbItems> = [
        {
            id: 0,
            label: "전체",
            img: IconAll,
            isSelected: true,
        },
        {
            id: 1,
            label: "상품",
            img: IconProduct,
            isSelected: false,
        },
        {
            id: 2,
            label: "카테고리",
            img: IconCategory,
            isSelected: false,
        },
        {
            id: 3,
            label: "기획전",
            img: IconExhibition,
            isSelected: false,
        },
        {
            id: 4,
            label: "브랜드",
            img: IconBrand,
            isSelected: false,
        },
    ];

    const [gnbMenu, setGnbMenu] = useState(gnbItems);

    return (
        <div className="flex justify-center">
            {gnbMenu.map((v: IGnbItems, i: number) => {
                return (
                    <div
                        key={v.label}
                        className={`${
                            i !== gnbItems.length - 1 ? "mr-9" : ""
                        } cursor-pointer hover:font-bold hover:text-violet`}
                        onClick={() => {
                            const selectedIdx = i;

                            const temp = gnbMenu.map((v) => {
                                if (v.id === selectedIdx) {
                                    return { ...v, isSelected: true };
                                } else {
                                    return { ...v, isSelected: false };
                                }
                            });

                            setGnbMenu(temp);
                        }}
                    >
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

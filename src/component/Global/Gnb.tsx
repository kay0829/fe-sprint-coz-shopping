import { useState } from "react";

import IconAll from "@asset/icon-all.png";
import IconProduct from "@asset/icon-product.png";
import IconCategory from "@asset/icon-category.png";
import IconExhibition from "@asset/icon-exhibition.png";
import IconBrand from "@asset/icon-category.png";

import { useSetRecoilState } from "recoil";
import { selectedGnbType } from "@recoil/Global";

import { useScroll } from "@hook/useScroll";

import { IGnbItems } from "@type/Global";

function Gnb() {
    const gnbItems: Array<IGnbItems> = [
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

    const [gnbMenu, setGnbMenu] = useState(gnbItems);
    const setSelectedType = useSetRecoilState(selectedGnbType);

    const { isScrollDown } = useScroll();

    return (
        <div
            className={`flex justify-center items-center w-full h-28 z-10 mb-6 bg-white ${
                isScrollDown ? "fixed top-20 left-0" : "mt-20"
            }`}
        >
            {gnbMenu.map((v: IGnbItems, i: number) => {
                return (
                    <div
                        key={v.label}
                        className={`${
                            i !== gnbItems.length - 1 ? "mr-9" : ""
                        } cursor-pointer hover:font-bold hover:text-violet`}
                        onClick={() => {
                            setSelectedType(v.type);

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

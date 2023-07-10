import React from "react";
import { IProductItem } from "@type/ProductList";

import PreparingImage from "@asset/preparing-image.jpeg";

import { AiFillStar } from "react-icons/ai";

function CProductItem(props: { item: IProductItem }) {
    const { id, title, sub_title, price, image_url, brand_name, brand_image_url, follower, discountPercentage, type } =
        props.item;

    const ProductionItem = () => {
        return (
            <>
                <div className="w-264px h-210px overflow-hidden rounded-xl">
                    <img
                        className="w-full h-full hover:scale-125 transition-all duration-400"
                        src={image_url || PreparingImage}
                        alt={`${title} 이미지`}
                    />
                </div>
                <div className="flex justify-between items-center h-6">
                    <p className="font-bold">{title || ""}</p>
                    <p className="text-violet font-bold">{`${discountPercentage || 0}%`}</p>
                </div>
                <div className="flex justify-between items-center h-6">
                    <p>{sub_title || ""}</p>
                    <p>{`${Number.parseInt(price || "0").toLocaleString("ko-KR")}원`}</p>
                </div>
            </>
        );
    };

    const CategoryItem = () => {
        return (
            <>
                <div className="w-264px h-210px rounded-xl overflow-hidden object-cover">
                    <img
                        className="w-full h-full hover:scale-125 transition-all duration-400"
                        src={image_url || PreparingImage}
                        alt={`${title} 이미지`}
                    />
                </div>
                <div className="flex justify-between items-center h-6">
                    <p className="font-bold">{`#${title || ""}`}</p>
                </div>
                <div className="h-6"></div>
            </>
        );
    };

    const ExhibitionItem = () => {
        return (
            <>
                <div className="w-264px h-210px rounded-xl overflow-hidden object-cover">
                    <img
                        className="w-full h-full hover:scale-125 transition-all duration-400"
                        src={image_url || PreparingImage}
                        alt={`${title} 이미지`}
                    />
                </div>
                <div className="flex justify-between items-center h-6">
                    <p className="font-bold">{title || ""}</p>
                    <p>{`${discountPercentage || 0}%`}</p>
                </div>
                <div className="h-6"></div>
            </>
        );
    };

    const BrandItem = () => {
        return (
            <>
                <div className="w-264px h-210px rounded-xl overflow-hidden object-cover">
                    <img
                        className="w-full h-full hover:scale-125 transition-all duration-400"
                        src={brand_image_url || PreparingImage}
                        alt=""
                    />
                </div>
                <div className="flex justify-between items-center h-6">
                    <p className="font-bold">{brand_name || ""}</p>
                    <p className="font-bold">관심고객수</p>
                </div>
                <div className="flex justify-end items-center h-6">
                    <p>{`${(follower || 0).toLocaleString("ko-KR")}명`}</p>
                </div>
            </>
        );
    };

    return (
        <figure key={id} className={`relative w-264px min-w-264px mr-6 mb-3 cursor-pointer`}>
            {type === "Product" ? <ProductionItem /> : null}
            {type === "Category" ? <CategoryItem /> : null}
            {type === "Exhibition" ? <ExhibitionItem /> : null}
            {type === "Brand" ? <BrandItem /> : null}
            <button className="absolute bottom-16 right-3">
                <AiFillStar size={"2rem"} color="#e8e8e8" />
            </button>
        </figure>
    );
}

export default CProductItem;

import React, { useState } from "react";

import { useSetRecoilState } from "recoil";
import { changeIsBookmarkedStatus } from "@recoil/ProductList";
import { addBookmark, removeBookmark } from "@recoil/Bookmark";

import CModal from "@component/Common/CModal";
import ProductModal from "@component/ProductList/ProductModal";
import PreparingImage from "@asset/preparing-image.jpeg";
import { AiFillStar } from "react-icons/ai";

import { useToast } from "@hook/useToast";
import { useProductInfo } from "@hook/useProductInfo";

import { IProductItemWithBookmark } from "@type/ProductList";

function CProductItem(props: { item: IProductItemWithBookmark }) {
    const { id, type, isBookmarked } = props.item;

    const [isOpen, setIsOpen] = useState(false);

    const { fireToast } = useToast();
    const addBookmarkFn = useSetRecoilState(addBookmark);
    const removeBookmarkFn = useSetRecoilState(removeBookmark);

    const changeIsBookmarkedStatusFn = useSetRecoilState(changeIsBookmarkedStatus(id));

    const productInfo = useProductInfo({ item: props.item });

    const handleBookmarkClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        let content = { color: "", text: "" };
        if (isBookmarked) {
            removeBookmarkFn([{ ...props.item }]);
            content = { color: "#e8e8e8", text: "상품이 북마크에서 삭제되었습니다" };
        } else {
            addBookmarkFn([{ ...props.item, isBookmarked: true }]);
            content = { color: "#FFD361", text: "상품이 북마크에 추가되었습니다" };
        }
        fireToast({
            content: (
                <div className="flex items-center">
                    <AiFillStar size={"2rem"} color={content.color} />
                    <p>{content.text}</p>
                </div>
            ),
        });
        changeIsBookmarkedStatusFn([]);
    };

    return (
        <>
            <figure
                key={id}
                className={`relative w-264px min-w-264px mr-6 mb-3 cursor-pointer`}
                onClick={() => setIsOpen(true)}
            >
                <div className="w-264px h-210px overflow-hidden rounded-xl">
                    <img
                        className="w-full h-full hover:scale-125 transition-all duration-400"
                        src={productInfo?.img || PreparingImage}
                        alt={`${productInfo?.title || ""} 이미지`}
                    />
                </div>
                <figcaption className="flex justify-between items-center h-6">
                    <p className="font-bold">{productInfo?.title || ""}</p>
                    <p className={`font-bold ${type === "Product" ? "text-violet" : ""}`}>{productInfo?.info || ""}</p>
                </figcaption>
                <div className="flex justify-between items-center h-6">
                    <p>{productInfo?.subTitle || ""}</p>
                    <p>{productInfo?.subInfo || ""}</p>
                </div>
                <button className="absolute bottom-16 right-3" onClick={handleBookmarkClick}>
                    {isBookmarked ? (
                        <AiFillStar size={"2rem"} color="#FFD361" />
                    ) : (
                        <AiFillStar size={"2rem"} color="#e8e8e8" />
                    )}
                </button>
            </figure>
            {isOpen ? (
                <CModal setIsOpen={setIsOpen}>
                    <ProductModal
                        img={productInfo.img || PreparingImage}
                        title={productInfo.title || ""}
                        setIsOpen={setIsOpen}
                        isBookmarked={!!isBookmarked}
                        item={props.item}
                    />
                </CModal>
            ) : null}
        </>
    );
}

export default CProductItem;

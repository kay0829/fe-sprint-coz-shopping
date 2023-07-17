import React, { Dispatch, SetStateAction } from "react";
import { useSceenWidthAndHeight } from "@hook/useScreenWidthAndHeight";

import { useSetRecoilState } from "recoil";
import { changeIsBookmarkedStatus } from "@recoil/ProductList";
import { addBookmark, removeBookmark } from "@recoil/Bookmark";

import { useToast } from "@hook/useToast";

import { AiFillStar } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import { IProductItemWithBookmark } from "@type/ProductList";

function ProductModal({
    title,
    img,
    setIsOpen,
    isBookmarked,
    item,
}: {
    title: string,
    img: string,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isBookmarked: boolean,
    item: IProductItemWithBookmark,
}) {
    const screenRect = useSceenWidthAndHeight();

    const { fireToast } = useToast();
    const addBookmarkFn = useSetRecoilState(addBookmark);
    const removeBookmarkFn = useSetRecoilState(removeBookmark);

    const changeIsBookmarkedStatusFn = useSetRecoilState(changeIsBookmarkedStatus(item.id));

    const handleBookmarkClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        let content = { color: "", text: "" };
        if (isBookmarked) {
            removeBookmarkFn([{ ...item }]);
            content = { color: "#e8e8e8", text: "상품이 북마크에서 삭제되었습니다" };
        } else {
            addBookmarkFn([{ ...item, isBookmarked: true }]);
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
        <div
            className="relative object-cover rounded-xl overflow-hidden"
            style={{ width: `${(screenRect.width / 5) * 3}px`, height: `${(screenRect.height / 5) * 3}px` }}
        >
            <img className="w-full h-full" src={img} alt="" />
            <button className="absolute top-3 right-3" onClick={() => setIsOpen(false)}>
                <IoClose size={"2rem"} color="#ffffff" />
            </button>
            <div className="flex items-center absolute bottom-3 left-3">
                <button className="mr-2" onClick={handleBookmarkClick}>
                    <AiFillStar size={"2rem"} color="#e8e8e8" />
                </button>
                <span className="text-white">{title}</span>
            </div>
        </div>
    );
}

export default ProductModal;

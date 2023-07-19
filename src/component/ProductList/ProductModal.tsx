import { Dispatch, SetStateAction } from "react";
import { useSceenWidthAndHeight } from "@hook/useScreenWidthAndHeight";

import { IoClose } from "react-icons/io5";

import { IProductItemWithBookmark } from "@type/ProductList";
import CBookmarkBtn from "@component/Common/CBookmarkBtn";

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
                <CBookmarkBtn btnStyle="mr-2" isBookmarked={isBookmarked} item={item} />
                <span className="text-white">{title}</span>
            </div>
        </div>
    );
}

export default ProductModal;

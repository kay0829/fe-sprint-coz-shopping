import { Dispatch, SetStateAction } from "react";
import { useSceenWidthAndHeight } from "@hook/useScreenWidthAndHeight";

import { IProductItemWithBookmark } from "@type/ProductList";
import BookmarkBtn from "@component/Morecule/BookmarkBtn";
import Icon from "@component/Atom/Icon";

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
                <Icon icon="Close" size={"2rem"} color="#ffffff" />
            </button>
            <div className="flex items-center absolute bottom-3 left-3">
                <BookmarkBtn btnStyle="flex items-center mr-2" isBookmarked={isBookmarked} item={item} label={title} />
            </div>
        </div>
    );
}

export default ProductModal;

import { useSetRecoilState } from "recoil";
import { changeIsBookmarkedStatus } from "@recoil/ProductList";
import { addBookmark, removeBookmark } from "@recoil/Bookmark";

import { useToast } from "@hook/useToast";

import debounce from "lodash/debounce";

import { IProductItemWithBookmark } from "@type/ProductList";

import { AiFillStar } from "react-icons/ai";

function CBookmarkBtn({
    btnStyle,
    isBookmarked,
    item,
}: {
    btnStyle: string,
    isBookmarked: boolean,
    item: IProductItemWithBookmark,
}) {
    const { fireToast } = useToast();
    const addBookmarkFn = useSetRecoilState(addBookmark);
    const removeBookmarkFn = useSetRecoilState(removeBookmark);

    const changeIsBookmarkedStatusFn = useSetRecoilState(changeIsBookmarkedStatus(item.id));

    const handleBookmarkClick = debounce(() => {
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
    }, 400);

    return (
        <button
            className={btnStyle}
            onClick={(e) => {
                e.stopPropagation();
                handleBookmarkClick();
            }}
        >
            {isBookmarked ? <AiFillStar size={"2rem"} color="#FFD361" /> : <AiFillStar size={"2rem"} color="#e8e8e8" />}
        </button>
    );
}

export default CBookmarkBtn;

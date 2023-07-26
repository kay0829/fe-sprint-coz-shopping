import { useSetRecoilState } from "recoil";
import { changeIsBookmarkedStatus } from "@recoil/ProductList";
import { addBookmark, removeBookmark } from "@recoil/Bookmark";

import { useToast } from "@hook/useToast";

import debounce from "lodash/debounce";

import Icon from "@component/Atom/Icon";
import Text from "@component/Atom/Text";

import { IProductItemWithBookmark } from "@type/ProductList";

function BookmarkBtn({
    label,
    btnStyle,
    isBookmarked,
    item,
    handleClickBtn,
}: {
    label?: string,
    btnStyle: string,
    isBookmarked: boolean,
    item: IProductItemWithBookmark,
    handleClickBtn?: () => void,
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
                    <Icon icon="Star" size={"2rem"} color={content.color} />
                    <Text type="Highlight" text={content.text} />
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
                if (handleClickBtn) {
                    handleClickBtn();
                }
            }}
        >
            {isBookmarked ? (
                <Icon icon="Star" size={"2rem"} color="#FFD361" />
            ) : (
                <Icon icon="Star" size={"2rem"} color="#e8e8e8" />
            )}
            {label ? <Text type="Highlight" text={label} color="text-white" styles="ml-2" /> : null}
        </button>
    );
}

export default BookmarkBtn;

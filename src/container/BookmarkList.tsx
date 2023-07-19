import { useRecoilValue } from "recoil";
import { filterBookmarkListByType } from "@recoil/Bookmark";

import CProductItem from "@component/Common/CProductItem";
import Gnb from "@component/Global/Gnb";

function BookmarkList({ isMain }: { isMain: boolean }) {
    const bookmarkList = useRecoilValue(filterBookmarkListByType);

    const NoBookmarkList = () => (
        <div className="flex justify-center items-center w-screen h-210px">북마크된 상품이 없습니다 🥲</div>
    );

    return (
        <>
            {isMain ? (
                <div
                    className={`flex flex-nowrap w-full ${
                        bookmarkList && bookmarkList.length > 4 ? "overflow-x-scroll" : ""
                    }`}
                >
                    {bookmarkList.length > 0 ? (
                        bookmarkList.slice(0, 10).map((v) => <CProductItem item={v} key={v.id} />)
                    ) : (
                        <NoBookmarkList />
                    )}
                </div>
            ) : (
                <div>
                    <Gnb />
                    <div className="flex flex-wrap justify-center">
                        {bookmarkList.length > 0 ? (
                            bookmarkList.map((v) => <CProductItem item={v} key={v.id} />)
                        ) : (
                            <NoBookmarkList />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default BookmarkList;

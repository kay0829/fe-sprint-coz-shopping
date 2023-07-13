import { atom, selector } from "recoil";
import { reqProductList } from "@api/ProductList/index";
import { IProductItem, IProductItemWithBookmark } from "@type/ProductList";
import { productItemWithBookmark } from "@recoil/Bookmark";

export const paramsProductSize = atom({
    key: "paramsProductSize",
    default: 10,
});

// prettier-ignore
export const reqGetProductList = selector<IProductItemWithBookmark[]>({
    key: "reqGetProductList",
    get: async ({ get }) => {
        const response = await reqProductList({
            count: get(paramsProductSize),
        });

        const savedValue = localStorage.getItem("bookmarks");
        let paredSavedValue = [];
        if (savedValue) {
            paredSavedValue = JSON.parse(savedValue)
        }
        
        const bookmarkIds = paredSavedValue.map((v: IProductItemWithBookmark) => v.id);

        const data: Array<IProductItem> = response.data;
        const addBookmarkStatus = data.map((v) => bookmarkIds.includes(v.id) ? {...v, isBookmarked: true} : v);
        return addBookmarkStatus;
    },
});

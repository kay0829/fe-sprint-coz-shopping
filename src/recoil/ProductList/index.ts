import { atom, selector, selectorFamily } from "recoil";

import { IProductItemWithBookmark } from "@type/ProductList";
import { selectedGnbType } from "@recoil/Global";

export const paramsProductSize = atom({
    key: "paramsProductSize",
    default: 10,
});

// 상품 리스트 api 응답 결과를 저장할 atom
export const productList = atom<IProductItemWithBookmark[]>({
    key: "productList",
    default: []
});

// 상품 리스트 api 응답 결과에 북마크 여부를 포함하여 productList 상태를 set 할 함수
export const reqGetProductList = selector<IProductItemWithBookmark[]>({
    key: "reqGetProductList",
    get: async ({ get }) => {
        return get(productList);
    },
    set: ({ set }, productListWithoutBookmark) => {
        const savedValue = localStorage.getItem("bookmarks");
        let paredSavedValue = [];
        if (savedValue) {
            paredSavedValue = JSON.parse(savedValue);
        }
        
        const bookmarkIds = paredSavedValue.map((v: IProductItemWithBookmark) => v.id);

        let data: IProductItemWithBookmark[] = []
        if (Array.isArray(productListWithoutBookmark)) {
            data = productListWithoutBookmark;
        }
        const addBookmarkStatus = data.map((v) => bookmarkIds.includes(v.id) ? { ...v, isBookmarked: true } : v);
        set(productList, addBookmarkStatus);
    }
});

// 전달받은 상품의 id에 해당하는 상품의 북마크 여부를 수정할 set 함수
export const changeIsBookmarkedStatus = selectorFamily({
    key: "changeIsBookmarkedStatus",
    get: (productId: number) => ({ get }) => {
        const temp = get(productList);

        const changeedBookmarkStatus = temp.map((v) => (v.id === productId ? { ...v, isBookmarked: !v.isBookmarked } : v));
        return changeedBookmarkStatus;
    },
    set: (productId: number) => ({ get, set }) => {
        const temp = get(productList);
        
        const changeedBookmarkStatus = temp.map((v) => (v.id === productId ? { ...v, isBookmarked: !v.isBookmarked } : v));
        set(productList, changeedBookmarkStatus);
    }
})

// 상품 타입에 따라 상품 리스트 데이터를 필터하여 화면에 뿌리기 위한 get 함수
export const filterProductListByType = selector({
    key: "filterProductListByType",
    get: ({ get }) => {
        const temp = get(productList);
        const type = get(selectedGnbType);

        if (type === '') return temp;

        return temp.filter(v => v.type === type);
    }
})
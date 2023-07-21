import { atom, selector, AtomEffect } from "recoil";
import { IProductItemWithBookmark } from "@type/ProductList";
import { selectedGnbType } from "@recoil/Global";

// 타입 참고 블로그
// [AtomEffects localStorage.](https://velog.io/@rifkin/react-TIL-10)
const localStorageEffect: <T>(key: string) => AtomEffect<T> = (key: string) => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setSelf(JSON.parse(savedValue));
    }
  
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export const productItemWithBookmark = atom<IProductItemWithBookmark[]>({
    key: "productItemWithBookmark",
    default: [] as IProductItemWithBookmark[],
    effects: [localStorageEffect("bookmarks")],
});

export const addBookmark = selector({
    key: "addBookmark",
    get: ({ get }) => {
        return get(productItemWithBookmark);
    },
    set: ({ set }, newBookmark) => {
        set(productItemWithBookmark, (prevBookmark) => {
            let newBookmarkObj = { id: -1 };
            if (Array.isArray(newBookmark)) {
                newBookmarkObj = newBookmark[0];
            }

            // 새로운 북마크 객체에 id가 없을 경우
            if (newBookmarkObj.id === -1) {
                return prevBookmark;
            }

            // 북마크 배열에 이미 새로운 북마크 객체의 id가 존재할 경우
            if (prevBookmark.filter((v) => v.id === newBookmarkObj.id).length > 0) {
                return prevBookmark;
            }

            return [...prevBookmark, ...newBookmark as []];
      });
    },
})

export const removeBookmark = selector({
    key: "removeBookmark",
    get: ({ get }) => { 
        return get(productItemWithBookmark);
    },
    set: ({ set }, deletedBookmark) => {
        const deleteId = Array.isArray(deletedBookmark) ? deletedBookmark[0]?.id : undefined;
        set(productItemWithBookmark, prevBookmark => prevBookmark.filter((v: IProductItemWithBookmark) => v.id && v.id !== deleteId));
    },
})

// 상품 타입에 따라 북마크 리스트 데이터를 필터하여 화면에 뿌리기 위한 get 함수
export const filterBookmarkListByType = selector({
    key: "filterBookmarkListByType",
    get: ({ get }) => {
        const temp = get(productItemWithBookmark);
        const type = get(selectedGnbType);
        
        if (type === '') return temp;

        return temp.filter(v => v.type === type);
    }
})

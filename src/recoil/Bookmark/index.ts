import { atom, selector, AtomEffect } from "recoil";
import { IProductItemWithBookmark } from "@type/ProductList";
import { selectedGnbType } from "@recoil/Global";

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
      // TODO 북마크 리스트를 맵으로 관리가 되어야하는 건 아닌가!
      set(productItemWithBookmark, prevBookmark => [...prevBookmark, ...newBookmark as []]);
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

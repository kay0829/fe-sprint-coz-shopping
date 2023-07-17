import { atom, selector } from "recoil";
import { IProductItemWithBookmark } from "@type/ProductList";
import { selectedGnbType } from "@recoil/Global";

const localStorageEffect = (key: string) => ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }
  
    onSet((newValue: IProductItemWithBookmark[], _: any, isReset: boolean) => {
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
import { DefaultValue, atom, selectorFamily, SerializableParam, selector } from "recoil";
import { IProductItemWithBookmark, IProductItem } from "@type/ProductList";

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
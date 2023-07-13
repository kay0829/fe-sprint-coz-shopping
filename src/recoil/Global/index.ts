import { DefaultValue, atom, selector, selectorFamily } from "recoil";
import { Toast } from "@type/Global";


export const dropdownShow = atom<boolean>({
    key: "dropdownShow",
    default: false,
});

export const toastState = atom<Toast[]>({
  key: 'toastState',
  default: [],
});
// 기능 1. toastItem 추가
export const addToastItem = selector({
  key: "addToastItem",
  get: ({ get }) => get(toastState),
  set: ({ set }, newToast: Toast[] | DefaultValue) => {
    set(toastState, prevToast => [...prevToast, ...newToast as []]);
  },
})
// 기능 2. id에 해당하는 toastItem 삭제
export const removeToastItem = selector({
  key: "removeToastItem",
  get: ({ get }) => get(toastState),
  set: ({ set }, deletedToast: Toast[] | DefaultValue) => {
      const deleteId = Array.isArray(deletedToast) ? deletedToast[0]?.id : undefined;
      set(toastState, prevToast => prevToast.filter((v: Toast) => v.id && v.id !== deleteId));
  },
})

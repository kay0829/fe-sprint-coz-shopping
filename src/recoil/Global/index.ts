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

export const selectedGnbType = atom<string>({
    key: "selectedGnbType",
    default: "",
})

// ==================================================================================================================================
// select의 set 코드
// 현재 상황에서의 장점
// 1. 아래 코드와 달리 컴포넌트 상단에서 useToast 를 호출하는 순간 Toast 객체를 넘겨주는 것이 아닌
// 이벤트 핸들러에서 fireToast 함수를 호출하는 시점에서 Toast 객체를 넘겨주기 때문에 toast의 content에 대한 상태관리를 할 필요가 없다.

// 현재 상황에서의 단점
// 2. ({set}, temp) 여기서 temp에 해당하는 인자의 타입은 Toast[] 또는 DefaultValue
// 그렇기 때문에 하나의 Toast Item을 추가할 때보다는 여러개의 Toast Item을 한번에 추가하고 싶은 상황에 적합할 것 같다.
// 3. 그리고 set을 사용하려면 get 을 작성하는 것이 필수적인데,
// get 함수를 유용하게 사용하려면 toast와 관려된 atom 하나를 더 만들어 사용하는 것이 더 좋을 것 같다.

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
// useToast hook 코드
// export function useToast() {
//     const toasts = useRecoilValue(toastState);
//     const id = getRandomID();
//     const toastWithNewItem = useSetRecoilState(addToastItem);
//     const toastWithoutItem = useSetRecoilState(removeToastItem);

//     const fireToast = (toast: Toast) => {
//         toastWithNewItem([
//             {
//                 id: id,
//                 content: toast.content || "",
//                 duration: toast.duration || 2000,
//                 bottom: toast.bottom || 10,
//             },
//         ]);

//         setTimeout(() => {
//             toastWithoutItem([
//                 {
//                     id: id,
//                     content: toast.content || "",
//                     duration: toast.duration || 2000,
//                     bottom: toast.bottom || 10,
//                 },
//             ]);
//         }, 600 + (toast.duration ?? 2000));
//     };

//     return { toasts, fireToast };
// }

// ==================================================================================================================================
// selectFamily 코드
// 현재 상황에서의 장점
// 1. 만약 토스트를 하나만 띄울 상황이라면 selectFamily의 get 메서드를 사용하면 매우 편리하고 간단하게 쓸 수 있을 것 같다.


// 현재 상황에서의 단점
// 1. 위와 마찬가지로 두번째 파라미터인, ({set}, temp) 여기서 temp에 해당하는 인자의 타입은 Toast[] 또는 DefaultValue
// set 함수의 두번째 인자인 콜백함수에서 파라미터로 prevState를 제공하기 때문에
// 의도( Toast 타입의 객체를 넘겨서 기존 배열에 추가하고 싶어! ) 대로 코드를 작성하면 두번째 파라미터의 의미가 없어진다.

// 2. 컴포넌트 상단에서 useToast 를 호출하는 순간 toast 데이터를 넘겨줘야 하므로 toast의 content를 상태관리해줘야한다는 불편함이 있다.

// 기능 1. toastItem 추가
// export const addToastItem = selectorFamily({
//   key: "addToastItem",
//   get: ({id, content, duration, bottom}: {id: string, content: string, duration: number, bottom: number}) => ({ get }) => { 
//     const toastList = get(toastState);
    
//     return [...toastList, { id, content, duration, bottom }];
//   },
//   set: ({ id, content, duration, bottom }: { id: string, content: string, duration: number, bottom: number }) => ({ set }, temp) => {
//     set(toastState, prevToast => [...prevToast, { id, content, duration, bottom }]);
//   },
// })
// 기능 2. id에 해당하는 toastItem 삭제
// export const removeToastItem = selectorFamily({
//   key: "removeToastItem",
//   get: (toastId: string) => ({ get }) =>
//     get(toastState).filter((v: Toast) => v.id && v.id !== toastId),
//   set: (toastId: string) => ({ set }, temp) => {
//       set(toastState, prevToast => prevToast.filter((v: Toast) => v.id && v.id !== toastId))
//   },
// })

// useToast hook 코드
// export function useToast(toast: Toast) {
//     const toasts = useRecoilValue(toastState);
//     const id = getRandomID();
//     const toastWithNewItem = useSetRecoilState(
//         addToastItem({
//             id: id,
//             content: toast.content || "",
//             duration: toast.duration || 2000,
//             bottom: toast.bottom || 10,
//         }),
//     );
//     const toastWithoutItem = useSetRecoilState(removeToastItem(id));

//     const fireToast = () => {
//         toastWithNewItem(toasts);

//         setTimeout(() => {
//             toastWithoutItem(toasts);
//         }, 600 + (toast.duration ?? 2000));
//     };

//     return { toasts, fireToast };
// }


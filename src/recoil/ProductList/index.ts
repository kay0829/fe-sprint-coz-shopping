import { atom, selector } from "recoil";
import { reqProductList } from "@api/ProductList/index";
import { IProductItem } from "@type/ProductList";

export const paramsProductSize = atom({
    key: "paramsProductSize",
    default: 10,
});

// prettier-ignore
export const reqGetProductList = selector({
    key: "reqGetProductList",
    get: async ({ get }) => {
        const response = await reqProductList({
            count: get(paramsProductSize),
        });
        const result: Array<IProductItem> = response.data;
        return result;
    },
});

import { atom, selector } from "recoil";
import { reqProductList } from "@api/ProductList/index";

export const paramsProductSize = atom({
    key: "paramsProductSize",
    default: 4,
});

export const reqGetProductList = selector({
    key: "reqGetProductList",
    get: async ({ get }) => {
        const response = await reqProductList({
            count: get(paramsProductSize),
        });
        return response.data;
    },
});

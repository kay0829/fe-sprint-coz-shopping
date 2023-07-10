import { commonApi } from "@api/common";

export const reqProductList = ({ count }: { count: number }) => {
    const method = "GET";
    const path = "products";
    const params = { count };

    return commonApi({ method, path, params });
};

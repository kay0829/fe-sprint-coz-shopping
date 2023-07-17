import { commonApi } from "@api/common";

/**
 *
 * @param {number | null} count; nunmber-size조절 parameter/null-전체
 * @returns
 */
export const reqProductList = ({ count }: { count: number | null }) => {
    const method = "GET";
    const path = "products";
    const params = { count };

    return commonApi({ method, path, params });
};

export const reqAllProductList = () => {
    return reqProductList({ count: null });
};

// typescript에서 enum을 명확하게 사용하는 방법
// 출처: https://www.youtube.com/watch?v=0fTdCSH_QEU

// enum PRODUCT_TYPE {
//     PRODUCT = 0,
//     CATEGORY = 1,
//     EXHIBITION = 2,
// }

export const PRODUCT_TYPE = {
    PRODUCT: "Product",
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    BRAND: "Brand",
} as const;

type PRODUCT_TYPE = typeof PRODUCT_TYPE[keyof typeof PRODUCT_TYPE];

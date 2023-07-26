import ProductItem from "@component/Organism/ProductItem";

import type { Meta } from "@storybook/react";

export default {
    title: "Organism/ProductItem",
    component: ProductItem,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
} as Meta<typeof ProductItem>;

export const ProductItems = () => {
    const item = {
        id: 92,
        type: "Product",
        title: "리바이스 청바지",
        sub_title: null,
        brand_name: null,
        price: "29900",
        discountPercentage: 35,
        image_url:
            "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80",
        brand_image_url: null,
        follower: null,
    };

    return (
        <ProductItem item={item} />
    );
};

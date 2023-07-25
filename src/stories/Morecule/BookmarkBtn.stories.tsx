import { useState } from "react";
import BookmarkBtn from "@component/Morecule/BookmarkBtn";

import type { Meta } from "@storybook/react";

export default {
    title: "Morecule/BookmarkBtn",
    component: BookmarkBtn,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
    decorators: [
        (Story) => (
            <div className="flex justify-center items-center h-screen">
                <Story />
            </div>
        ),
    ],
} as Meta<typeof BookmarkBtn>;

export const BookmarkButton = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
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
        <BookmarkBtn
            btnStyle="mr-2"
            isBookmarked={isBookmarked}
            item={item}
            handleClickBtn={() => setIsBookmarked(!isBookmarked)}
        />
    );
};

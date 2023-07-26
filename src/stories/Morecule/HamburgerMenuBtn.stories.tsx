import HamburgerMenuBtn from "@component/Morecule/HamburgerMenuBtn";

import type { Meta } from "@storybook/react";

export default {
    title: "Morecule/Buttons",
    component: HamburgerMenuBtn,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
    argTypes: { onClick: { action: 'clicked' } },
    decorators: [
        (Story) => (
            <div className="flex justify-center items-center h-screen">
                <Story />
            </div>
        ), 
    ],
} as Meta<typeof HamburgerMenuBtn>;

export const HamburgerMenuButton = () => {
    return (
        <div className="relative">
            <HamburgerMenuBtn />
        </div>
    );
};

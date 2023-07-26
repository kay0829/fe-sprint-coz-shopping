import MenuDropDownItem from "@component/Morecule/MenuDropDownItem";

import type { Meta } from "@storybook/react";

export default {
    title: "Morecule/DropDown",
    component: MenuDropDownItem,
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
} as Meta<typeof MenuDropDownItem>;

export const MenuDropDownItems = () => {
    return (
        <div className="flex flex-col">
            <MenuDropDownItem />
        </div>
    );
};

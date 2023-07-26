import { useState } from "react";
import GnbItem from "@component/Morecule/GnbItem";

import type { Meta } from "@storybook/react";

import { gnbItems } from "@constant/GnbItems";

export default {
    title: "Morecule/GnbItem",
    component: GnbItem,
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
} as Meta<typeof GnbItem>;

export const MenuDropDownItems = () => {
    const [gnbMenu, setGnbMenu] = useState(gnbItems);
    return (
        <GnbItem v={gnbItems[0]} i={ 0} gnbMenu={gnbMenu} setGnbMenu={setGnbMenu} />
    );
};

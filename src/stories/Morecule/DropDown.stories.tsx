import { useState } from "react";
import DropDown from "@component/Morecule/DropDown";

import type { Meta } from "@storybook/react";

export default {
    title: "Morecule/DropDown",
    component: DropDown,
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
} as Meta<typeof DropDown>;

export const DropDownContainer = () => {
    const [isDropDownShow, setIsDropDownShow] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setIsDropDownShow(!isDropDownShow)}>
                DropDown Toggle Btn
            </button>
            <DropDown height="170px" isDropDownShow={isDropDownShow} setIsDropDownShow={setIsDropDownShow}>
                <>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </>
            </DropDown>
        </div>
    );
};

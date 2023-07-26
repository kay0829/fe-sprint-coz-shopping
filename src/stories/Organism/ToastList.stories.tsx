import { useEffect } from "react";
import { useToast } from "@hook/useToast";

import ToastList from "@component/Organism/ToastList";
import Text from "@component/Atom/Text";

import type { Meta } from "@storybook/react";


export default {
    title: "Organism/ToastList",
    component: ToastList,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
} as Meta<typeof ToastList>;

export const ToastLists = () => {
    const { fireToast } = useToast();

    useEffect(() => {
        fireToast({
            content: (
                <div className="flex items-center">
                    <Text type="Highlight" text={`Lorem ipsum dolor sit amet1`} />
                </div>
            ),
        });

        setTimeout(() => {
            fireToast({
                content: (
                    <div className="flex items-center">
                        <Text type="Highlight" text={`Lorem ipsum dolor sit amet2`} />
                    </div>
                ),
            });
        }, 500)

       setTimeout(() => {
            fireToast({
                content: (
                    <div className="flex items-center">
                        <Text type="Highlight" text={`Lorem ipsum dolor sit amet3`} />
                    </div>
                ),
            });
        }, 1000)
    }, [])

    return (
        <ToastList />
    );
};

// ToastLists.args = {
//     text: ,
// };

// Toasts.argTypes = {
//     text: `Lorem ipsum dolor sit amet`,
// };
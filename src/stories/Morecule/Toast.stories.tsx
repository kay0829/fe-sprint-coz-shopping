import Toast from "@component/Morecule/Toast";

import type { Meta } from "@storybook/react";

export default {
    title: "Morecule/Toast",
    component: Toast,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
} as Meta<typeof Toast>;

export const Toasts = ({ text }: { text: string }) => {
    return (
        <Toast content={text} />
    );
};

Toasts.args = {
    text: `Lorem ipsum dolor sit amet`,
};

Toasts.argTypes = {
    text: `Lorem ipsum dolor sit amet`,
};
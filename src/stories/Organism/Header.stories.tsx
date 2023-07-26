import Header from "@component/Organism/Header";

import type { Meta } from "@storybook/react";

export default {
    title: "Organism/Header",
    component: Header,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
} as Meta<typeof Header>;

export const Headers = () => {
    return (
        <div className="flex flex-col">
            <Header />
        </div>
    );
};

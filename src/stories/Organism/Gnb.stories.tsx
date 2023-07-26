import Gnb from "@component/Organism/Gnb";

import type { Meta } from "@storybook/react";

export default {
    title: "Organism/Gnb",
    component: Gnb,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
} as Meta<typeof Gnb>;

export const Gnbs = () => {
    return (
        <Gnb />
    );
};

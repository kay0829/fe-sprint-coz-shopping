import Footer from "@component/Organism/Footer";

import type { Meta } from "@storybook/react";

export default {
    title: "Organism/Footer",
    component: Footer,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
} as Meta<typeof Footer>;

export const Footers = () => {
    return (
        <div className="flex flex-col">
            <Footer />
        </div>
    );
};

import NoContent from "@component/Organism/NoContent";

import type { Meta } from "@storybook/react";

export default {
    title: "Organism/NoContent",
    component: NoContent,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
} as Meta<typeof NoContent>;

export const NoContents = ({ message }: { message: string | JSX.Element }) => {
    return (
        <div className="flex flex-col">
            <NoContent message={message} />
        </div>
    );
};

NoContents.args = {
    message: `Lorem ipsum dolor sit amet`,
}

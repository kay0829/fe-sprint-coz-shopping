import React from "react";
import "../src/index.css";
import type { Preview } from "@storybook/react";
import { RecoilRoot } from "recoil";

import { withRouter } from "storybook-addon-react-router-v6";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        withRouter,
        (Story) => (
            <RecoilRoot>
                <Story />
            </RecoilRoot>
        ),
    ],
};

export default preview;

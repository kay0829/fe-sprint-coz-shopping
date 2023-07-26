import Logo, { ILogoSize } from "@component/Atom/Logo";

import type { Meta } from '@storybook/react'; 

const logoSizes = ["XS", "SM", "MD", "XL"] as ILogoSize[];

export default {
    title: "Atom/Logo",
    component: Logo,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
    decorators: [
        (Story) => (
            <div className="flex justify-center items-center flex-col h-screen">
                <Story />
            </div>
        ),
    ],
} as Meta<typeof Logo>;

export const AllLogoItems = ({ withLogoName }: { size: ILogoSize, withLogoName: boolean }) => (
    <>
        {logoSizes.map((size) => (
            <Logo size={size} withLogoName={withLogoName} />
        ))}
    </>
);

export const LogoItem = ({ size, withLogoName }: { size: ILogoSize, withLogoName: boolean }) => (
    <Logo size={size} withLogoName={withLogoName} />
);

LogoItem.argTypes = {
    size: {
        options: logoSizes,
        control: { type: "select" },
    },
    withLogoName: {
        options: [true, false],
        control: { type: "radio" },
    },
};
LogoItem.args = {
    size: "XS",
    withLogoName: true,
};

AllLogoItems.argTypes = {
    withLogoName: {
        options: [true, false],
        control: { type: "radio" },
    },
};
AllLogoItems.args = {
    withLogoName: true,
};
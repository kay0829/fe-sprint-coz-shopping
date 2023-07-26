import Text, { ITextType } from "@component/Atom/Text";

import type { Meta } from '@storybook/react';

const textTypes = ["Heading", "Label", "Highlight", "Body", "Description"] as ITextType[];

export default {
    title: "Atom/Text",
    component: Text, 
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
} as Meta<typeof Text>;

export const AllTextItems = ({ color, text }: { color: string, text: string }) => (
    <>
        {textTypes.map((type) => (
            <Text key={type} type={type} text={text} color={color} />
        ))}
    </>
);

export const TextItem = ({ type, text, color = "black" }: { type: ITextType, text: string, color?: string }) => (
    <Text type={type} text={text} color={color} />
);

TextItem.argTypes = {
    type: {
        options: textTypes,
        control: { type: "select" },
    },
    text: `Lorem ipsum dolor sit amet`,
    color: {
        options: ["text-light-text", "text-violet", "text-black", "text-blue-500"],
        control: { type: "select" },
    },
};
TextItem.args = {
    type: "Heading",
    text: `Lorem ipsum dolor sit amet`,
    color: "black",
};

AllTextItems.argTypes = {
    text: `Lorem ipsum dolor sit amet`,
    color: {
        options: ["text-light-text", "text-violet", "text-black", "text-blue-500"],
        control: { type: "select" },
    },
};
AllTextItems.args = {
    text: `Lorem ipsum dolor sit amet`,
    color: "black",
};


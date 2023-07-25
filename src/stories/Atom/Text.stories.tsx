import Text, { ITextType } from "@component/Atom/Text";

import type { Meta } from '@storybook/react';

const textTypes = ["Heading", "Label", "Highlight", "Body", "Description"] as ITextType[];

export default {
    title: "Atom/Text", // 스토리 분류 및 컴포넌트 이름
    component: Text, // 테스트할 컴포넌트(Icon)
    parameters: {
        backgrounds: { default: { value: "light" } }, // 스토리의 배경색 설정
        controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
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
            <Text type={type} text={text} color={color} />
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
        options: ["light-text", "violet", "black"],
        control: { type: "select" },
    },
};
TextItem.args = {
    type: "Heading",
    text: `Lorem ipsum dolor sit amet`,
    color: "#FFD361",
};

AllTextItems.argTypes = {
    type: {
        options: textTypes,
        control: { type: "select" },
    },
    text: `Lorem ipsum dolor sit amet`,
    color: {
        options: ["light-text", "violet", "black"],
        control: { type: "select" },
    },
};
AllTextItems.args = {
    type: "Heading",
    text: `Lorem ipsum dolor sit amet`,
    color: "#FFD361",
};


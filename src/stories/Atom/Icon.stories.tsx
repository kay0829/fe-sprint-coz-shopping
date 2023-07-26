import Icon, { IIcon } from "@component/Atom/Icon";

import type { Meta } from '@storybook/react';

const iconNames = ["Star", "Close", "HamburgerMenu", "OutlineGift", "OutlineStar"] as IIcon[];

export default {
    title: "Atom/Icons", // 스토리 분류 및 컴포넌트 이름
    component: Icon, // 테스트할 컴포넌트(Icon)
    parameters: {
        backgrounds: { default: { value: "light" } }, // 스토리의 배경색 설정
        controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
    },
    decorators: [
        (Story) => (
            <div className="flex justify-center items-center h-screen">
                <Story />
            </div>
        ),
    ],
} as Meta<typeof Icon>;

// 사용하는 아이콘을 볼 수 있는 All 스토리 정의
export const AllIconItems = ({ color, size }: { color: string, size: string }) => (
    <div style={{ display: "grid", gridTemplateColumns: "3rem 3rem 3rem 3rem", gridAutoRows: "3rem" }}>
        {iconNames.map((icon) => (
            <Icon icon={icon} key={icon} size={size} color={color} />
        ))}
    </div>
);

// Item 스토리 정의
export const IconItem = ({ icon, color, size }: { icon: IIcon, color: string, size: string }) => (
    <Icon icon={icon} size={size} color={color} />
); // Icon 컴포넌트 렌더링

IconItem.argTypes = {
    icon: {
        options: iconNames, // 아이콘 이름 옵션 설정
        control: { type: "select" }, // 컨트롤 타입을 select로 설정
    },
    size: {
        options: ["1rem", "1.5rem", "2rem"], // 아이콘 크기 옵션 설정
        control: { type: "radio" }, // 컨트롤 타입을 radio로 설정
    },
    color: {
        options: ["#000000", "#FFD361", "#e8e8e8"],
        control: { type: "select" },
    },
};
IconItem.args = {
    icon: "Star", // 초기 아이콘 설정
    size: "1.5rem", // 초기 아이콘 크기 설정
    color: "#FFD361",
};

AllIconItems.argTypes = {
    icon: {
        options: iconNames, // 아이콘 이름 옵션 설정
        control: { type: "select" }, // 컨트롤 타입을 select로 설정
    },
    size: {
        options: ["1rem", "1.5rem", "2rem"], // 아이콘 크기 옵션 설정
        control: { type: "radio" }, // 컨트롤 타입을 radio로 설정
    },
    color: {
        options: ["#000000", "#FFD361", "#e8e8e8"],
        control: { type: "select" },
    },
};
AllIconItems.args = {
    icon: "Star", // 초기 아이콘 설정
    size: "1.5rem", // 초기 아이콘 크기 설정
    color: "#FFD361",
};

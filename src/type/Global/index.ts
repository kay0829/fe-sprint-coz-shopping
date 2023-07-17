export interface Toast {
    id?: string;
    content: string | JSX.Element;
    duration?: number;
    bottom?: number;
}

export interface IGnbItems {
    id: number;
    label: string;
    type: string;
    img: string;
    isSelected: boolean;
}

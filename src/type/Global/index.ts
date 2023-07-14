export interface Toast {
    id?: string;
    content: string | JSX.Element;
    duration?: number;
    bottom?: number;
}

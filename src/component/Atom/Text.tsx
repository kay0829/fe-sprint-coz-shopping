export type ITextType = "Heading" | "Label" | "Highlight" | "Body" | "Description";

function Text({ type, text, color = "black" }: { type: ITextType, text: string, color?: string }) {
    const renderText = () => {
        if (type === "Heading") {
            return <p className={`font-inter font-bold text-3.5xl text-${color}`}>{text}</p>;
        }

        if (type === "Label") {
            return <p className={`font-inter font-bold text-2xl text-${color}`}>{text}</p>;
        }

        if (type === "Highlight") {
            return <p className={`font-inter font-bold text-base text-${color}`}>{text}</p>;
        }

        if (type === "Body") {
            return <p className={`font-inter text-base text-${color}`}>{text}</p>;
        }

        if (type === "Description") {
            return <p className={`font-inter text-xs text-${color}`}>{text}</p>;
        }
    };
    return <>{renderText()}</>;
}

export default Text;

export type ITextType = "Heading" | "Label" | "Highlight" | "Body" | "Description";

function Text({
    type,
    text,
    color = "black",
    styles,
}: {
    type: ITextType,
    text: string,
    color?: string,
    styles?: string,
}) {
    const renderText = () => {
        let classNames = "";

        if (color) {
            classNames += color;
        }

        if (styles) {
            classNames += ` ${styles}`;
        }

        if (type === "Heading") {
            return <p className={`font-inter font-bold text-3.5xl ${classNames}`}>{text}</p>;
        }

        if (type === "Label") {
            return <p className={`font-inter font-bold text-2xl ${classNames}`}>{text}</p>;
        }

        if (type === "Highlight") {
            return <p className={`font-inter font-bold text-base ${classNames}`}>{text}</p>;
        }

        if (type === "Body") {
            return <p className={`font-inter text-base ${classNames}`}>{text}</p>;
        }

        if (type === "Description") {
            return <p className={`font-inter text-xs ${classNames}`}>{text}</p>;
        }
    };
    return <>{renderText()}</>;
}

export default Text;

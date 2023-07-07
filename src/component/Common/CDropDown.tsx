import React from "react";

function CDropDown({ children }: { children: JSX.Element }) {
    const olDefaultCss = "w-max relative top-1 -left-36 shadow-md rounded-xl border border-light-black";
    const triangleBeforeCss = `before:content-[''] before:absolute before:w-0 before:h-0 before:z-20 before:-top-3 before:left-2
        before:border-t-0 before:border-b-16px before:border-b-light-black
        before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent`;
    const triangleAfterCss = `after:content-[''] after:absolute after:w-0 after:h-0 after:z-30 after:-top-2 after:left-2
        after:border-t-0 after:border-b-16px after:border-b-white
        after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent`;

    return (
        <div className={`absolute ${triangleBeforeCss} ${triangleAfterCss}`}>
            <ol className={`${olDefaultCss}`}>{children}</ol>
        </div>
    );
}

export default CDropDown;

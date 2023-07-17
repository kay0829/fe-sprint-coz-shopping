import React from "react";
import { dropdownShow } from "@recoil/Global";
import { useRecoilValue } from "recoil";

function CDropDown({ height, children }: { height: string, children: JSX.Element }) {
    const show = useRecoilValue(dropdownShow);

    const triangleBeforeCss = `before:content-[''] before:absolute before:w-0 before:h-0 before:z-40 before:-top-0 before:left-3/4
        before:border-t-0 before:border-b-16px before:border-b-light-black
        before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent`;
    const triangleAfterCss = `after:content-[''] after:absolute after:w-0 after:h-0 after:z-50 after:top-1 after:left-3/4
        after:border-t-0 after:border-b-16px after:border-b-white
        after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent`;

    const olDefaultCss = "w-max mt-4 shadow-md rounded-xl border border-light-black bg-white ";

    return (
        <div
            style={{ height: `${show ? height : "0"}`, transition: "height ease-out 100ms 0s" }}
            className={`absolute z-30 right-52px w-max overflow-hidden ${triangleBeforeCss} ${triangleAfterCss}`}
        >
            <ol className={`${olDefaultCss}`}>{children}</ol>
        </div>
    );
}

export default CDropDown;

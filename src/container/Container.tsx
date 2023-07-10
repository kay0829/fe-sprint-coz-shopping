import React, { useRef, RefObject, useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "@component/Global/Header";
import Footer from "@component/Global/Footer";

import { useSceenWidthAndHeight } from "@hook/useScreenWidthAndHeight";

function Container() {
    // prettier-ignore
    const mainRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);

    const screenRect = useSceenWidthAndHeight();

    // prettier-ignore
    const [mainHeight, setMainHeight] = useState<number>(0);

    useEffect(() => {
        // main 의 min-height는 screen 높이에서 Header와 Footer를 제외한 높이
        // screen.height: 스크린의 height
        // 80: Header의 height
        // 58: Footer의 height
        const temp = screenRect.height - 80 - 58;
        setMainHeight(temp);
    }, [screenRect.height]);

    return (
        <>
            <Header />
            <main ref={mainRef} style={{ minHeight: mainHeight + "px" }} className="px-76px py-6">
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </React.Suspense>
            </main>
            <Footer />
        </>
    );
}

export default Container;

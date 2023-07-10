import React, { useRef, RefObject, useState, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "@component/Global/Header";
import Footer from "@component/Global/Footer";

import { useElementWidthAndHeight } from "@hook/useElementWidthAndHeight";
import { useSceenWidthAndHeight } from "@hook/useScreenWidthAndHeight";

function Container() {
    // prettier-ignore
    const mainRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);

    const screenRect = useSceenWidthAndHeight();

    // prettier-ignore
    const [mainHeight, setMainHeight] = useState<number>(0);

    useEffect(() => {
        // main 의 height가 짧을 경우 Footer 를 하단에 고정시키기 위함
        // screen.height: 스크린의 height
        // main.height: Header와 Footer를 제외한 main 엘리먼트의 전체 height
        // 80: Header의 height
        // 58: Footer의 height
        const temp = screenRect.height - 80 - 58;
        setMainHeight(temp);
    }, [screenRect.height]);

    return (
        <>
            <Header />
            <main ref={mainRef} style={{ minHeight: mainHeight + "px" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Container;

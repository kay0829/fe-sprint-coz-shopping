import { useEffect, useState } from "react";

/**
 * resize 이벤트 발생 시 바뀐 clientWidth, clientHeight를 반환
 * @returns {object<width: number, height: number>} ref로 받은 컴포넌트의 width와 heigth
 */
export const useSceenWidthAndHeight = () => {
    // prettier-ignore
    const [width, setWidth] = useState<number>(0);
    // prettier-ignore
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        const setScreenWidthHeight = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        setScreenWidthHeight();

        window.addEventListener("resize", setScreenWidthHeight);

        return () => {
            window.removeEventListener("resize", setScreenWidthHeight);
        };
    }, []);

    const clientRects = { width, height };

    return clientRects;
};

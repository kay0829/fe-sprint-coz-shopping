import { useState, useEffect, useMemo } from "react";
import _ from "lodash";

export function useScroll() {
    let beforeScrollY = 0;
    const [isScrollDown, setIsScrollDown] = useState(false);

    const scrollEvent = useMemo(
        () =>
            _.throttle(() => {
                const curScrollY = window.scrollY;
                if (curScrollY === 0) {
                    setIsScrollDown(false);
                } else if (curScrollY > beforeScrollY) {
                    setIsScrollDown(false);
                } else {
                    setIsScrollDown(true);
                }

                beforeScrollY = curScrollY;
            }, 300),
        [isScrollDown],
    );

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);

        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);

    return { isScrollDown };
}

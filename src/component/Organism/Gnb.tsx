import { useState } from "react";
import { useScroll } from "@hook/useScroll";

import GnbItem from "@component/Morecule/GnbItem";

import { IGnbItems } from "@type/Global";
import { gnbItems } from "@constant/GnbItems";

function Gnb() {
    const [gnbMenu, setGnbMenu] = useState(gnbItems);
    const { isScrollDown } = useScroll();

    return (
        <div
            className={`flex justify-center items-center w-full h-28 z-10 mb-6 bg-white ${
                isScrollDown ? "fixed top-20 left-0" : "mt-20"
            }`}
        >
            {gnbMenu.map((v: IGnbItems, i: number) => {
                return <GnbItem v={v} i={i} gnbMenu={gnbMenu} setGnbMenu={setGnbMenu} />;
            })}
        </div>
    );
}

export default Gnb;

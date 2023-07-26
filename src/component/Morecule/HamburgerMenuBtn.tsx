import { useEffect, RefObject, useRef } from "react";

import { useRecoilState } from "recoil";
import { dropdownShow } from "@recoil/Global";

import DropDown from "@component/Morecule/DropDown";
import MenuDropDownItem from "@component/Morecule/MenuDropDownItem";
import Icon from "@component/Atom/Icon";

function HamburgerMenuBtn() {
    // prettier-ignore
    const dropdownRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [isDropDownShow, setIsDropDownShow] = useRecoilState(dropdownShow);

    useEffect(() => {
        const outsideClick = (e: MouseEvent) => {
            if (isDropDownShow && !dropdownRef.current?.contains(e.target as Node)) {
                setIsDropDownShow(false);
            }
        };

        document.body.addEventListener("click", outsideClick);

        return () => {
            document.body.removeEventListener("click", outsideClick);
        };
    }, [isDropDownShow]);

    return (
        <div className="relatvie z-20">
            <button
                className="cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsDropDownShow(!isDropDownShow);
                }}
            >
                <Icon icon="HamburgerMenu" size={"2rem"} color="#000000" />
            </button>

            <div ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
                <DropDown height="170px" isDropDownShow={isDropDownShow} setIsDropDownShow={setIsDropDownShow}>
                    <MenuDropDownItem />
                </DropDown>
            </div>
        </div>
    );
}

export default HamburgerMenuBtn;

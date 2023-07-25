import { useEffect, RefObject, useRef } from "react";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { dropdownShow } from "@recoil/Global";

import CDropDown from "@component/Common/CDropDown";
import MenuDropDownItem from "@component/Global/MenuDropDownItem";
import Icon from "@component/Atom/Icon";
import Logo from "@asset/Logo.png";

function Header() {
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
        <header className="flex justify-between items-center fixed w-full h-20 z-20 px-76px bg-white">
            <Link to="/">
                <div className="flex items-center cursor-pointer">
                    <div className="w-55px h-30px pr-3">
                        <img src={Logo} alt="Coz Shopping 로고" className="w-full h-full" />
                    </div>
                    <h1 className="text-3.5xl font-bold">COZ Shopping</h1>
                </div>
            </Link>

            <div className="relatvie z-20">
                <button className="cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    setIsDropDownShow(!isDropDownShow);
                }}>
                    <Icon icon="HamburgerMenu" size={"2rem"} color="#000000" />
                </button>

                <div ref={dropdownRef} onClick={(e) => e.stopPropagation()}>
                    <CDropDown height="170px">
                        <MenuDropDownItem />
                    </CDropDown>
                </div>
            </div>
        </header>
    );
}

export default Header;

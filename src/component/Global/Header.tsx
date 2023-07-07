import React from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

import CDropDown from "@component/Common/CDropDown";
import MenuDropDownItem from "@component/Global/MenuDropDownItem";
import Logo from "@asset/Logo.png";

function Header() {
    return (
        <div className="flex justify-between items-center w-full h-20 px-76px">
            <Link to="/">
                <div className="flex items-center cursor-pointer">
                    <div className="w-55px h-30px pr-3">
                        <img src={Logo} alt="Coz Shopping 로고" className="w-full h-full" />
                    </div>
                    <h1 className="text-3.5xl font-bold">COZ Shopping</h1>
                </div>
            </Link>

            <div className="relatvie z-10">
                <button className="cursor-pointer">
                    <GiHamburgerMenu size={"2rem"} />
                </button>
                <CDropDown>
                    <MenuDropDownItem />
                </CDropDown>
            </div>
        </div>
    );
}

export default Header;

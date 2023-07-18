import React from "react";

function Footer() {
    // const fixedCss = `${isNeededToBeFixed ? "fixed bottom-0" : "block"}`;
    return (
        <footer className={`flex flex-col justify-center items-center w-screen h-14 border-t border-light-black`}>
            <p className="text-xs text-light-text">개인정보 처리방침 | 이용 약관</p>
            <p className="text-xs text-light-text">All rights reserved @ Codestates</p>
        </footer>
    );
}

export default Footer;

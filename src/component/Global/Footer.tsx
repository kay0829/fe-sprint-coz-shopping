import Text from "@component/Atom/Text";

function Footer() {
    // const fixedCss = `${isNeededToBeFixed ? "fixed bottom-0" : "block"}`;
    return (
        <footer className={`flex flex-col justify-center items-center w-screen h-14 border-t border-light-black`}>
            <Text type="Description" text="개인정보 처리방침 | 이용 약관" color="light-text" />
            <Text type="Description" text="All rights reserved @ Codestates" color="light-text" />
        </footer>
    );
}

export default Footer;

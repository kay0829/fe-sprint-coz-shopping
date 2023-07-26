import Logo from "@component/Atom/Logo";
import HamburgerMenuBtn from "@component/Morecule/HamburgerMenuBtn";

function Header() {
    return (
        <header className="flex justify-between items-center fixed w-full h-20 z-20 px-76px bg-white">
            <Logo size="XL" withLogoName={true} linkTo="/" />

            <HamburgerMenuBtn />
        </header>
    );
}

export default Header;

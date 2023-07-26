import { Link } from "react-router-dom";
import LogoImg from "@asset/Logo.png";
import Text from "@component/Atom/Text";

export type ILogoSize = "XS" | "SM" | "MD" | "XL";

function Logo({ size, withLogoName, linkTo }: { size: ILogoSize, withLogoName: boolean, linkTo?: string }) {
    const renderLogo = () => {
        if (size === "XS") {
            return (
                <>
                    <div className="w-3 h-2 mr-3">
                        <img src={LogoImg} alt="Coz Shopping 로고" className="w-full h-full" />
                    </div>
                    {withLogoName ? <Text text="COZ Shopping" type="Description" /> : null}
                </>
            );
        }

        if (size === "SM") {
            return (
                <>
                    <div className="w-6 h-3 mr-3">
                        <img src={LogoImg} alt="Coz Shopping 로고" className="w-full h-full" />
                    </div>
                    {withLogoName ? <Text text="COZ Shopping" type="Highlight" /> : null}
                </>
            );
        }

        if (size === "MD") {
            return (
                <>
                    <div className="w-9 h-5 mr-3">
                        <img src={LogoImg} alt="Coz Shopping 로고" className="w-full h-full" />
                    </div>
                    {withLogoName ? <Text text="COZ Shopping" type="Label" /> : null}
                </>
            );
        }

        if (size === "XL") {
            return (
                <>
                    <div className="w-55px h-30px mr-3">
                        <img src={LogoImg} alt="Coz Shopping 로고" className="w-full h-full" />
                    </div>
                    {withLogoName ? <Text text="COZ Shopping" type="Heading" /> : null}
                </>
            );
        }
    };

    return (
        <>
            {linkTo ? (
                <Link to={linkTo}>
                    <div className="flex items-center cursor-pointer">{renderLogo()}</div>
                </Link>
            ) : (
                <div className="flex items-center">{renderLogo()}</div>
            )}
        </>
    );
}

export default Logo;

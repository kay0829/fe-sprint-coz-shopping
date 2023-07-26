import { AiFillStar } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineGift, AiOutlineStar } from "react-icons/ai";

export type IIcon = "Star" | "Close" | "HamburgerMenu" | "OutlineGift" | "OutlineStar";

function Icon({ icon, color, size }: { icon: IIcon, color: string, size: string }) {
    const renderIcon = () => {
        if (icon === "Star") {
            return <AiFillStar size={size} color={color} />;
        }

        if (icon === "Close") {
            return <IoClose size={size} color={color} />;
        }

        if (icon === "HamburgerMenu") {
            return <GiHamburgerMenu size={size} color={color} />;
        }

        if (icon === "OutlineGift") {
            return <AiOutlineGift size={size} color={color} />;
        }

        if (icon === "OutlineStar") {
            return <AiOutlineStar size={size} color={color} />;
        }
    };

    return <>{renderIcon()}</>;
}

export default Icon;

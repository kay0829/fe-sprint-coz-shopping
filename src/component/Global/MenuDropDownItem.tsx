import { Link } from "react-router-dom";
import Icon from "@component/Atom/Icon";

function MenuDropDownItem() {
    const liDefaultCss = "flex items-center w-48 px-4 py-3 border-b border-light-black";
    return (
        <>
            <li className={liDefaultCss}>임솔팅님, 안녕하세요!</li>
            <Link to="/products/list">
                <li className={`${liDefaultCss} cursor-pointer`}>
                    <Icon icon="OutlineGift" size="1rem" color="#000000" />
                    <div className="w-32 pl-2 text-left">
                        <p>상품리스트 페이지</p>
                    </div>
                </li>
            </Link>
            <Link to="/bookmark">
                <li className={`${liDefaultCss} cursor-pointer`}>
                    <Icon icon="OutlineStar" size="1rem" color="#000000" />
                    <div className="w-32 pl-2 text-left">
                        <p>북마크 페이지</p>
                    </div>
                </li>
            </Link>
        </>
    );
}

export default MenuDropDownItem;

import { Link } from "react-router-dom";
import ProductSummary from "@component/Main/ProductSummary";
import BookmarkList from "./BookmarkList";
import Text from "@component/Atom/Text";

function Main() {
    return (
        <>
            <section className="mt-20 mb-6">
                <div className="flex justify-between items-center">
                    <Text type="Label" text="상품 리스트" styles="mb-3" />
                    <Link to="/products/list">
                        <p>더보기 +</p>
                    </Link>
                </div>
                <ProductSummary />
            </section>
            <section className="mb-3">
                <div className="flex justify-between items-center">
                    <Text type="Label" text="북마크 리스트" styles="mb-3" />
                    <Link to="/bookmark">
                        <p>더보기 +</p>
                    </Link>
                </div>
                <BookmarkList isMain={true} />
            </section>
        </>
    );
}

export default Main;

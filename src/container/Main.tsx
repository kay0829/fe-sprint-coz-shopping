import React from "react";
import { Link } from "react-router-dom";
import ProductList from "@container/ProductList";
import BookmarkList from "./BookmarkList";

function Main() {
    return (
        <>
            <section className="mb-6">
                <div className="flex justify-between items-center">
                    <p className="mb-3 text-2xl">상품 리스트</p>
                    <Link to="/products/list">
                        <p>더보기 +</p>
                    </Link>
                </div>
                <ProductList isMain={true} />
            </section>
            <section className="mb-3">
                <div className="flex justify-between items-center">
                    <p className="mb-3 text-2xl">북마크 리스트</p>
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

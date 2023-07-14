import React, { useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { productList, reqGetProductList } from "@recoil/ProductList/index";

import { reqAllProductList } from "@api/ProductList/index";

import Gnb from "@component/Global/Gnb";
import CProductItem from "@component/Common/CProductItem";
import CNoContent from "@component/Common/CNoContent";

function ProductList() {
    const list = useRecoilValue(productList);

    const addBookmarkStatusFn = useSetRecoilState(reqGetProductList);

    useEffect(() => {
        reqAllProductList().then((res) => addBookmarkStatusFn(res.data));
    }, []);

    return (
        <div>
            <Gnb />
            <div className="flex flex-wrap justify-center">
                {list.length > 0 ? (
                    list.map((v) => <CProductItem item={v} key={v.id} />)
                ) : (
                    <CNoContent message={"상품이 없습니다 🥲"} />
                )}
            </div>
        </div>
    );
}

export default ProductList;

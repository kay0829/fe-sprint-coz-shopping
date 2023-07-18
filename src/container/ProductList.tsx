import React, { useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterProductListByType, reqGetProductList } from "@recoil/ProductList/index";

import { reqAllProductList } from "@api/ProductList/index";

import Gnb from "@component/Global/Gnb";
import CProductItem from "@component/Common/CProductItem";
import CNoContent from "@component/Common/CNoContent";
import { IProductItemWithBookmark } from "@type/ProductList";

function ProductList() {
    const productList = useRecoilValue(filterProductListByType);

    const addBookmarkStatusFn = useSetRecoilState(reqGetProductList);

    useEffect(() => {
        reqAllProductList()
            .then((res) => addBookmarkStatusFn(res.data as IProductItemWithBookmark[]))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Gnb />
            <div className="flex flex-wrap justify-center">
                {productList.length > 0 ? (
                    productList.map((v) => <CProductItem item={v} key={v.id} />)
                ) : (
                    <CNoContent message={"상품이 없습니다 🥲"} />
                )}
            </div>
        </div>
    );
}

export default ProductList;

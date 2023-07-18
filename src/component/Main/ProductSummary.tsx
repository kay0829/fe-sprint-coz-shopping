import React, { useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { productList, paramsProductSize, reqGetProductList } from "@recoil/ProductList/index";

import { reqProductList } from "@api/ProductList/index";

import CProductItem from "@component/Common/CProductItem";
import CNoContent from "@component/Common/CNoContent";
import { IProductItemWithBookmark } from "@type/ProductList";

function ProductSummary() {
    const list = useRecoilValue(productList);
    const count = useRecoilValue(paramsProductSize);

    const addBookmarkStatusFn = useSetRecoilState(reqGetProductList);

    useEffect(() => {
        reqProductList({ count })
            .then((res) => addBookmarkStatusFn(res.data as IProductItemWithBookmark[]))
            .catch((err) => console.log(err));
    }, [count]);

    return (
        <div className="flex flex-nowrap w-full overflow-x-scroll">
            {list.length > 0 ? (
                list.slice(0, 10).map((v) => <CProductItem item={v} key={v.id} />)
            ) : (
                <CNoContent message={"상품이 없습니다 🥲"} />
            )}
        </div>
    );
}

export default ProductSummary;

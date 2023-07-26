import { useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { productList, paramsProductSize, reqGetProductList } from "@recoil/ProductList/index";

import { reqProductList } from "@api/ProductList/index";

import ProductItem from "@component/Organism/ProductItem";
import NoContent from "@component/Organism/NoContent";
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
                list.slice(0, 10).map((v) => <ProductItem item={v} key={v.id} />)
            ) : (
                <NoContent message={"상품이 없습니다 🥲"} />
            )}
        </div>
    );
}

export default ProductSummary;

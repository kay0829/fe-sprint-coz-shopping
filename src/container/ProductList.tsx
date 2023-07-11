import React from "react";
import { useRecoilValue } from "recoil";
import { reqGetProductList } from "@recoil/ProductList/index";

import CProductItem from "@component/Common/CProductItem";
import Gnb from "@component/Global/Gnb";

function ProductList({ isMain }: { isMain: boolean }) {
    const productList = useRecoilValue(reqGetProductList);

    return (
        <>
            {isMain ? (
                <div className="flex flex-nowrap w-full overflow-x-scroll">
                    {productList.map((v) => (
                        <CProductItem item={v} key={v.id} />
                    ))}
                </div>
            ) : (
                <div>
                    <Gnb />
                    <div className="flex flex-wrap justify-center">
                        {productList.map((v) => (
                            <CProductItem item={v} key={v.id} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductList;

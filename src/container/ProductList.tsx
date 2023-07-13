import React from "react";
import { useRecoilValue } from "recoil";
import { reqGetProductList } from "@recoil/ProductList/index";

import CProductItem from "@component/Common/CProductItem";
import Gnb from "@component/Global/Gnb";

function ProductList({ isMain }: { isMain: boolean }) {
    const productList = useRecoilValue(reqGetProductList);
    const NoProductList = () => (
        <div className="flex justify-center items-center w-screen h-210px">상품이 없습니다 🥲</div>
    );

    return (
        <>
            {isMain ? (
                <div className="flex flex-nowrap w-full overflow-x-scroll">
                    {productList.length > 0 ? (
                        productList.slice(0, 10).map((v) => <CProductItem item={v} key={v.id} />)
                    ) : (
                        <NoProductList />
                    )}
                </div>
            ) : (
                <div>
                    <Gnb />
                    <div className="flex flex-wrap justify-center">
                        {productList.length > 0 ? (
                            productList.map((v) => <CProductItem item={v} key={v.id} />)
                        ) : (
                            <NoProductList />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductList;

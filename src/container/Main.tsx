import React from "react";
import { useRecoilValue } from "recoil";

import { reqGetProductList } from "@recoil/ProductList/index";

function Main() {
    const productList = useRecoilValue(reqGetProductList);

    return <p className="text-3xl font-bold underline">Hello world!</p>;
}

export default Main;

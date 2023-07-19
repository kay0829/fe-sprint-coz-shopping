import { useState } from "react";

import CModal from "@component/Common/CModal";
import CBookmarkBtn from "@component/Common/CBookmarkBtn";
import ProductModal from "@component/ProductList/ProductModal";
import PreparingImage from "@asset/preparing-image.jpeg";

import { useProductInfo } from "@hook/useProductInfo";

import { IProductItemWithBookmark } from "@type/ProductList";

function CProductItem(props: { item: IProductItemWithBookmark }) {
    const { id, type, isBookmarked } = props.item;

    const [isOpen, setIsOpen] = useState(false);

    const productInfo = useProductInfo({ item: props.item });
    const btnStyle = "absolute bottom-16 right-3";

    return (
        <>
            <figure
                key={id}
                className={`relative w-264px min-w-264px mr-6 mb-3 cursor-pointer`}
                onClick={() => setIsOpen(true)}
            >
                <div className="w-264px h-210px overflow-hidden rounded-xl">
                    <img
                        className="w-full h-full hover:scale-125 transition-all duration-400"
                        src={productInfo?.img || PreparingImage}
                        alt={`${productInfo?.title || ""} 이미지`}
                    />
                </div>
                <figcaption className="flex justify-between items-center h-6">
                    <p className="font-bold">{productInfo?.title || ""}</p>
                    <p className={`font-bold ${type === "Product" ? "text-violet" : ""}`}>{productInfo?.info || ""}</p>
                </figcaption>
                <div className="flex justify-between items-center h-6">
                    <p>{productInfo?.subTitle || ""}</p>
                    <p>{productInfo?.subInfo || ""}</p>
                </div>
                <CBookmarkBtn btnStyle={btnStyle} isBookmarked={!!isBookmarked} item={props.item} />
            </figure>
            {isOpen ? (
                <CModal setIsOpen={setIsOpen}>
                    <ProductModal
                        img={productInfo.img || PreparingImage}
                        title={productInfo.title || ""}
                        setIsOpen={setIsOpen}
                        isBookmarked={!!isBookmarked}
                        item={props.item}
                    />
                </CModal>
            ) : null}
        </>
    );
}

export default CProductItem;

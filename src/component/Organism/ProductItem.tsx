import { useState } from "react";

import Modal from "@component/Morecule/Modal";
import Text from "@component/Atom/Text";
import BookmarkBtn from "@component/Morecule/BookmarkBtn";
import ProductModal from "@component/Organism/ProductModal";
import PreparingImage from "@asset/preparing-image.jpeg";

import { useProductInfo } from "@hook/useProductInfo";

import { IProductItemWithBookmark } from "@type/ProductList";

function ProductItem(props: { item: IProductItemWithBookmark }) {
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
                    <Text type="Highlight" text={productInfo?.title || ""} />
                    <Text
                        type="Highlight"
                        text={productInfo?.info || ""}
                        color={type === "Product" ? "violet" : "black"}
                    />
                </figcaption>
                <div className="flex justify-between items-center h-6">
                    <Text type="Body" text={productInfo?.subTitle || ""} />
                    <Text type="Body" text={productInfo?.subInfo || ""} />
                </div>
                <BookmarkBtn btnStyle={btnStyle} isBookmarked={!!isBookmarked} item={props.item} />
            </figure>
            {isOpen ? (
                <Modal setIsOpen={setIsOpen}>
                    <ProductModal
                        img={productInfo.img || PreparingImage}
                        title={productInfo.title || ""}
                        setIsOpen={setIsOpen}
                        isBookmarked={!!isBookmarked}
                        item={props.item}
                    />
                </Modal>
            ) : null}
        </>
    );
}

export default ProductItem;

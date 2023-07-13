import React, { useEffect, useState } from "react";

import CModal from "@component/Common/CModal";
import ProductModal from "@component/ProductList/ProductModal";
import PreparingImage from "@asset/preparing-image.jpeg";
import { AiFillStar } from "react-icons/ai";

import { useToast } from "@hook/useToast";

import { IProductItem, IProductInfo } from "@type/ProductList";

function CProductItem(props: { item: IProductItem }) {
    const { id, title, sub_title, price, image_url, brand_name, brand_image_url, follower, discountPercentage, type } =
        props.item;

    // prettier-ignore
    const [productInfo, setProductInfo] = useState<IProductInfo>({});
    const [isOpen, setIsOpen] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const { fireToast } = useToast();

    const infoWidthCategory = () => {
        if (type === "Product") {
            return {
                title: title,
                subTitle: sub_title,
                info: `${discountPercentage || 0}%`,
                subInfo: `${Number.parseInt(price || "0").toLocaleString("ko-KR")}원`,
                img: image_url,
            };
        }

        if (type === "Category") {
            return {
                title: title,
                subTitle: "",
                info: "",
                subInfo: "",
                img: image_url,
            };
        }

        if (type === "Exhibition") {
            return {
                title: title,
                subTitle: "",
                info: `${discountPercentage || 0}%`,
                subInfo: "",
                img: image_url,
            };
        }

        if (type === "Brand") {
            return {
                title: brand_name,
                subTitle: "",
                info: "관심고객수",
                subInfo: `${(follower || 0).toLocaleString("ko-KR")}명`,
                img: brand_image_url,
            };
        }

        return {};
    };

    useEffect(() => {
        setProductInfo(infoWidthCategory());
    }, []);

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
                        alt={`${title} 이미지`}
                    />
                </div>
                <div className="flex justify-between items-center h-6">
                    <p className="font-bold">{productInfo?.title || ""}</p>
                    <p className={`font-bold ${type === "Product" ? "text-violet" : ""}`}>{productInfo?.info || ""}</p>
                </div>
                <div className="flex justify-between items-center h-6">
                    <p>{productInfo?.subTitle || ""}</p>
                    <p>{productInfo?.subInfo || ""}</p>
                </div>
                <button
                    className="absolute bottom-16 right-3"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isBookmarked) {
                            setIsBookmarked(false);
                            fireToast({
                                content: (
                                    <div className="flex items-center">
                                        <AiFillStar size={"2rem"} color="#e8e8e8" />
                                        <p>상품이 북마크에서 제거되었습니다.</p>
                                    </div>
                                ),
                            });
                        } else {
                            setIsBookmarked(true);
                            fireToast({
                                content: (
                                    <div className="flex items-center">
                                        <AiFillStar size={"2rem"} color="#FFD361" />
                                        <p>상품이 북마크에 추가되었습니다.</p>
                                    </div>
                                ),
                            });
                        }
                    }}
                >
                    {isBookmarked ? (
                        <AiFillStar size={"2rem"} color="#FFD361" />
                    ) : (
                        <AiFillStar size={"2rem"} color="#e8e8e8" />
                    )}
                </button>
            </figure>
            {isOpen ? (
                <CModal setIsOpen={setIsOpen}>
                    <ProductModal
                        img={productInfo.img || PreparingImage}
                        title={productInfo.title || ""}
                        setIsOpen={setIsOpen}
                    />
                </CModal>
            ) : null}
        </>
    );
}

export default CProductItem;

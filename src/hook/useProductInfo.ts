import { useState, useEffect } from "react";
import { IProductInfo, IProductItemWithBookmark } from "@type/ProductList";
import { PRODUCT_TYPE } from "@constant/ProductList";

export const useProductInfo = ({ item }: { item: IProductItemWithBookmark }) => {
    // prettier-ignore
    const [productInfo, setProductInfo] = useState<IProductInfo>({});
    const { title, sub_title, price, image_url, brand_name, brand_image_url, follower, discountPercentage, type } =
        item;

    useEffect(() => {
        setProductInfo(infoWidthCategory());
    }, []);

    const infoWidthCategory = () => {
        if (type === PRODUCT_TYPE.PRODUCT) {
            return {
                title: title,
                subTitle: sub_title,
                info: `${discountPercentage || 0}%`,
                subInfo: `${Number.parseInt(price || "0").toLocaleString()}원`,
                img: image_url,
            };
        }

        if (type === PRODUCT_TYPE.CATEGORY) {
            return {
                title: `#${title || ""}`,
                subTitle: "",
                info: "",
                subInfo: "",
                img: image_url,
            };
        }

        if (type === PRODUCT_TYPE.EXHIBITION) {
            return {
                title: title,
                subTitle: `${sub_title || ""}`,
                info: "",
                subInfo: "",
                img: image_url,
            };
        }

        if (type === PRODUCT_TYPE.BRAND) {
            return {
                title: brand_name,
                subTitle: "",
                info: "관심고객수",
                subInfo: `${(follower || 0).toLocaleString()}명`,
                img: brand_image_url,
            };
        }

        return {};
    };

    return productInfo;
};

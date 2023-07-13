export interface IProductItem {
    id: number;
    title?: string | null;
    sub_title?: string | null;
    price?: string | null;
    image_url?: string | null;
    brand_name?: string | null;
    brand_image_url?: string | null;
    follower?: number | null;
    discountPercentage?: number | null;
    type?: string | null;
}

export interface IProductItemWithBookmark extends IProductItem {
    isBookmarked?: boolean | null;
}

export interface IProductInfo {
    title?: string | null;
    subTitle?: string | null;
    info?: string | null;
    subInfo?: string | null;
    img?: string | null;
}

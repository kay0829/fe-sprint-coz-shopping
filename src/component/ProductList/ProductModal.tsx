import React, { Dispatch, SetStateAction } from "react";
import { useSceenWidthAndHeight } from "@hook/useScreenWidthAndHeight";

import { AiFillStar } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

function ProductModal({
    title,
    img,
    setIsOpen,
}: {
    title: string,
    img: string,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}) {
    const screenRect = useSceenWidthAndHeight();

    return (
        <div
            className="relative object-cover rounded-xl overflow-hidden"
            style={{ width: `${(screenRect.width / 5) * 3}px`, height: `${(screenRect.height / 5) * 3}px` }}
        >
            <img className="w-full h-full" src={img} alt="" />
            <button className="absolute top-3 right-3" onClick={() => setIsOpen(false)}>
                <IoClose size={"2rem"} color="#ffffff" />
            </button>
            <div className="flex items-center absolute bottom-3 left-3">
                <button className="mr-2">
                    <AiFillStar size={"2rem"} color="#e8e8e8" />
                </button>
                <span className="text-white">{title}</span>
            </div>
        </div>
    );
}

export default ProductModal;

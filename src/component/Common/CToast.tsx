import React, { useState, useEffect } from "react";
import { Toast } from "@type/Global";

function CToast({ content, bottom, duration }: Toast) {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(true);

        const timer = setTimeout(() => {
            setIsShow(false);
        }, duration ?? 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const defaultCss = "min-w-244px px-6 py-4 mb-3 bg-white border border-slate-100 rounded-xl shadow-md";

    return <>{isShow ? <div className={defaultCss}>{content}</div> : null}</>;
}

export default CToast;

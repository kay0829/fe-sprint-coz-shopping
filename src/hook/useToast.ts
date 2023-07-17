import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toastState, addToastItem, removeToastItem } from "@recoil/Global";
import { getRandomID } from "@util/getRandomId";

import { Toast } from "@type/Global";

export const useToast = () => {
    const toasts = useRecoilValue(toastState);
    const id = getRandomID();
    const addToastItemFn = useSetRecoilState(addToastItem);
    const removeToastItemFn = useSetRecoilState(removeToastItem);

    const fireToast = (toast: Toast) => {
        addToastItemFn([
            {
                id: id,
                content: toast.content || "",
                duration: toast.duration || 2000,
                bottom: toast.bottom || 10,
            },
        ]);

        setTimeout(() => {
            removeToastItemFn([
                {
                    id: id,
                    content: toast.content || "",
                    duration: toast.duration || 2000,
                    bottom: toast.bottom || 10,
                },
            ]);
        }, 600 + (toast.duration ?? 2000));
    };

    return { toasts, fireToast };
};

import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toastState, addToastItem, removeToastItem } from "@recoil/Global";
import { getRandomID } from "@util/getRandomId";

import { Toast } from "@type/Global";

export function useToast() {
    const toasts = useRecoilValue(toastState);
    const id = getRandomID();
    const toastWithNewItem = useSetRecoilState(addToastItem);
    const toastWithoutItem = useSetRecoilState(removeToastItem);

    const fireToast = (toast: Toast) => {
        toastWithNewItem([
            {
                id: id,
                content: toast.content || "",
                duration: toast.duration || 2000,
                bottom: toast.bottom || 10,
            },
        ]);

        setTimeout(() => {
            toastWithoutItem([
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
}

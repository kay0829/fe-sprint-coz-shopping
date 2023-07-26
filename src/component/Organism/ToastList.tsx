import { useRecoilValue } from "recoil";
import { toastState } from "@recoil/Global";

import Toast from "@component/Morecule/Toast";

function ToastList() {
    const toasts = useRecoilValue(toastState);

    return (
        <div className="fixed bottom-10 right-4">
            {toasts.map((v) => (
                <Toast key={v.id} content={v.content} bottom={v.bottom} duration={v.duration} />
            ))}
        </div>
    );
}

export default ToastList;

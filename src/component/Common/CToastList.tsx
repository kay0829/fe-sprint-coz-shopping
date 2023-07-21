import { useRecoilValue } from "recoil";
import { toastState } from "@recoil/Global";

import CToast from "@component/Common/CToast";

function CToastList() {
    const toasts = useRecoilValue(toastState);

    return (
        <div className="fixed bottom-10 right-4">
            {toasts.map((v) => (
                <CToast key={v.id} content={v.content} bottom={v.bottom} duration={v.duration} />
            ))}
        </div>
    );
}

export default CToastList;

import { Dispatch, SetStateAction } from "react";

function Modal({ setIsOpen, children }: { setIsOpen: Dispatch<SetStateAction<boolean>>, children: JSX.Element }) {
    return (
        <div onClick={() => setIsOpen(false)} className="absolute top-0 left-0 w-screen h-screen z-40 bg-modal">
            <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-xl bg-white"
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;

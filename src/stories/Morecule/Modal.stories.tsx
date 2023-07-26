import { useState } from "react";

import Modal from "@component/Morecule/Modal";
import Text from "@component/Atom/Text";

import type { Meta } from "@storybook/react";

export default {
    title: "Morecule/Modal",
    component: Modal,
    parameters: {
        backgrounds: { default: { value: "light" } },
        controls: { hideNoControlsWarning: true },
    },
} as Meta<typeof Modal>;

export const Modals = ({ text }: { text: string }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <Text type="Label" text="open modal button" color="text-white" />
            </button>
            <>
                {isOpen ? (
                    <Modal setIsOpen={setIsOpen}>
                        <Text type="Heading" text={text} />
                    </Modal>
                ) : null}
            </>
        </>
    );
};

Modals.args = {
    text: `Lorem ipsum dolor sit amet`,
}
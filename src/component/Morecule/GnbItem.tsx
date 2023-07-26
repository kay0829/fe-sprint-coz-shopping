import { useSetRecoilState } from "recoil";
import { selectedGnbType } from "@recoil/Global";

import Text from "@component/Atom/Text";

import { IGnbItems } from "@type/Global";
import { gnbItems } from "@constant/GnbItems";

function GnbItem({
    v,
    i,
    gnbMenu,
    setGnbMenu,
}: {
    v: IGnbItems,
    i: number,
    gnbMenu: IGnbItems[],
    setGnbMenu: (menu: IGnbItems[]) => void,
}) {
    const setSelectedType = useSetRecoilState(selectedGnbType);

    const handleGnbClick = (v: IGnbItems, i: number) => {
        setSelectedType(v.type);

        const selectedIdx = i;
        const temp = gnbMenu.map((v) => {
            if (v.id === selectedIdx) {
                return { ...v, isSelected: true };
            } else {
                return { ...v, isSelected: false };
            }
        });

        setGnbMenu(temp);
    };

    return (
        <div
            key={v.label}
            className={`${i !== gnbItems.length - 1 ? "mr-9" : ""} cursor-pointer hover:font-bold hover:text-violet`}
            onClick={() => handleGnbClick(v, i)}
        >
            <img src={v.img} alt="" className="w-82px h-82px mb-1.5" />

            <div className="text-center">
                {v.isSelected ? (
                    <Text text={v.label} type="Highlight" color="violet" styles="underline" />
                ) : (
                    <Text text={v.label} type="Body" />
                )}
            </div>
        </div>
    );
}

export default GnbItem;

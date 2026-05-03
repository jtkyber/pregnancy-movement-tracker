import { useState } from "react"

type Items = { [key: string]: string };
export default function ToggleGroup<T extends Items>({ items, cb, lookup, twContainerStyle = '' }: { items: (keyof T)[], cb: (item: keyof T) => void, lookup?: T, twContainerStyle?: string }) {
    const [selected, setSelected] = useState<keyof T>(items[0]);

    const handleSelection = (item: keyof T) => {
        setSelected(item);
        cb(item);
    }

    return (
        <div className={`w-full  border-primary border-2 rounded-md overflow-x-auto no-scrollbar ${twContainerStyle}`}>
            <div className={`flex direction-row justify-between`}>
                {
                    items.map(item => (
                        <button onClick={() => handleSelection(item)} key={item.toString()} className={`px-4 py-3 font-bold ${item === selected ? 'text-bg1 bg-primary' : 'text-primary'}`}>{lookup ? lookup[item] : item.toString()}</button>
                    ))
                }
            </div>

        </div >
    )
}

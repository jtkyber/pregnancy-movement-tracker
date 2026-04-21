'use client'
import { CSSProperties, useEffect } from "react";
import { mock_pregnancy } from "../../mock_data";
import { removeDzContainer } from "@/utils/dz";
import MvmtAdder from "@/components/mvmt_adder";
import { CssResource } from "next/dist/build/webpack/plugins/flight-manifest-plugin";

export default function Home() {
    removeDzContainer();

    return (
        <main data-name="container" className="relative bg-inherit w-full">
            <div className="w-full h-full overflow-y-auto">
                <div data-name="mvmt-history-container" className="flex flex-nowrap flex-col gap-4 px-10 py-4 pb-12">
                    {
                        mock_pregnancy.movements.map(m => {
                            const { id, type, intensity, timestamp } = m;

                            const date_time = new Date(timestamp * 1000);
                            const date = date_time.toLocaleDateString('en-gb', { month: 'short', day: 'numeric' });
                            const time = date_time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                            const textStyle: CSSProperties = { color: `var(--${type})` };

                            return <div style={{ border: `2px solid var(--${type})` }} key={id} data-name="mvmt-card" className={"w-full h-24 rounded-md grid grid-cols-3 grid-rows-2 px-4 py-2 bg-bg2"}>
                                <h3 style={textStyle} className="col-start-1 col-span-1 row-start-1 row-span-1 self-start justify-self-start text-black capitalize text-lg">{type}</h3>
                                <h3 style={textStyle} className="col-start-2 col-span-1 row-start-1 row-span-1 self-end justify-self-center text-black text-2xl font-bold">{time}</h3>
                                <h3 style={textStyle} className="col-start-2 col-span-1 row-start-2 row-span-1 self-start justify-self-center text-black text-xl">{date}</h3>
                                <h3 style={textStyle} className="col-start-3 col-span-1 row-start-1 row-span-1 self-start justify-self-end text-black capitalize text-lg">{intensity}</h3>
                            </div>
                        })
                    }
                </div>
            </div>

            <MvmtAdder />
        </main>
    );
}

import { mock_pregnancy } from "../../mock_data";

export default function Home() {
    return (
        <main data-name="container" className="bg-inherit w-full h-full">
            <div className="w-full h-full overflow-y-auto">
                <div data-name="mvmt-history-container" className="flex flex-nowrap flex-col gap-8 px-10 py-8">
                    {
                        mock_pregnancy.movements.map(m => {
                            const { id, type, intensity, timestamp } = m;

                            const date_time = new Date(timestamp * 1000);
                            const date = date_time.toLocaleDateString('en-gb', { month: 'short', day: 'numeric' });
                            const time = date_time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                            return <div key={id} data-name="mvmt-card" style={{ backgroundColor: `var(--${type})` }} className={"w-full aspect-5/1 rounded-md grid grid-cols-3 grid-rows-2 px-4 py-2"}>
                                <h3 className="col-start-1 col-span-1 row-start-1 row-span-1 self-start justify-self-start text-black capitalize text-xl">{type}</h3>
                                <h3 className="col-start-2 col-span-1 row-start-1 row-span-1 self-end justify-self-center text-black text-3xl font-bold">{time}</h3>
                                <h3 className="col-start-2 col-span-1 row-start-2 row-span-1 self-start justify-self-center text-black text-2xl">{date}</h3>
                                <h3 className="col-start-3 col-span-1 row-start-1 row-span-1 self-start justify-self-end text-black capitalize text-xl">{intensity}</h3>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="fixed bottom-0 w-full flex justify-end p-8">
                <div className="w-20 rounded-full aspect-1/1 bg-primary flex justify-center items-center"><h2 className="text-bg1 text-4xl text-bold">+</h2></div>
            </div>
        </main>
    );
}

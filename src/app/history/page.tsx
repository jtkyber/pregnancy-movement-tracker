'use client'
import { CSSProperties, Fragment, useEffect, useState } from "react";
import { removeDzContainer } from "@/utils/dz";
import { Movement, MOVEMENT_INTENSITY_LABELS, MOVEMENT_TYPE_LABELS } from "@/types/movements.types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovementsChronological } from "@/services/api/movements";
import { useInView } from "react-intersection-observer";

export default function History() {
    removeDzContainer();

    const { ref, inView } = useInView({ threshold: 0.5 });

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status, error } = useInfiniteQuery({
        queryKey: ['movementHistory'],
        queryFn: ({ pageParam }) => getMovementsChronological(1, pageParam),
        initialPageParam: 0,
        getNextPageParam: lastPage => lastPage.next
    });

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage()
    }, [inView])

    if (status === 'pending') return <p className="p-4">Loading...</p>
    if (status === 'error') return <p className="p-4">Error: {error?.message}</p>

    return (
        <main data-name="container" className="relative bg-inherit w-full">
            <div className="w-full h-full overflow-y-auto">
                <div data-name="mvmt-history-container" className="flex flex-nowrap flex-col gap-4 px-10 py-4 pb-12">
                    {
                        data?.pages.map((page, i) => (
                            <Fragment key={i}>
                                {

                                    page.items.map((m: Movement) => {
                                        const { id, type, intensity, timestamp } = m;

                                        const typeLabel = MOVEMENT_TYPE_LABELS[type];
                                        const intensityLabel = MOVEMENT_INTENSITY_LABELS[intensity];

                                        const date_time = new Date(timestamp);
                                        const date = date_time.toLocaleDateString('en-gb', { month: 'short', day: 'numeric' });
                                        const time = date_time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                                        const textStyle: CSSProperties = { color: `var(--${type})` };

                                        return <div style={{ border: `2px solid var(--${type})` }} key={id} data-name="mvmt-card" className={"w-full h-24 rounded-md grid grid-cols-3 grid-rows-2 px-4 py-2 bg-bg2"}>
                                            <h3 style={textStyle} className="col-start-1 col-span-1 row-start-1 row-span-1 self-start justify-self-start text-black text-lg">{typeLabel}</h3>
                                            <h3 style={textStyle} className="col-start-2 col-span-1 row-start-1 row-span-1 self-end justify-self-center text-black text-2xl font-bold">{time}</h3>
                                            <h3 style={textStyle} className="col-start-2 col-span-1 row-start-2 row-span-1 self-start justify-self-center text-black text-xl">{date}</h3>
                                            <h3 style={textStyle} className="col-start-3 col-span-1 row-start-1 row-span-1 self-start justify-self-end text-black text-lg">{intensityLabel}</h3>
                                        </div>
                                    })
                                }
                            </Fragment>
                        ))
                    }
                    {
                        hasNextPage ?
                            isFetchingNextPage ?
                                <h4 ref={ref} className="text-text-secondary text-center font-bold">Loading...</h4>
                                :
                                <h4 ref={ref} className="text-text-secondary text-center font-bold">Load More</h4>
                            : null
                    }
                </div>

            </div>
        </main>
    );
}

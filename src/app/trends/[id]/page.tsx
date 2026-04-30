'use client'

import { TrendType } from "@/types/trends";
import { removeDzContainer } from "@/utils/dz";
import { useParams } from "next/navigation";

export default function TrendPage() {
    removeDzContainer();

    const { id } = useParams<{ id: TrendType }>();

    return (
        <main data-name='trend-container' className="overflow-y-auto">
            <div data-name='movement-type-selector'></div>
            <div data-name='timespan-selector'></div>
            <div data-name='chart-container'></div>
            <div data-name='summary-container'></div>
        </main>
    )
}

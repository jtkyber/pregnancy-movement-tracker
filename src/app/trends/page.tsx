'use client'
import { removeDzContainer } from "@/utils/dz";
import TrendCard from "./_components/card";
import { TrendType } from "@/types/trends";
import { useRouter } from "next/navigation";

export default function Trends() {
    removeDzContainer();

    const router = useRouter();
    const handleSelection = (trendType: TrendType) => {
        router.push(`/trends/${trendType}`);
    }

    return (
        <main data-name='trends-container' className="overflow-y-auto">
            <div className="px-6 py-8 flex flex-col gap-4">
                <TrendCard trendType='movementAvg' handleSelection={handleSelection} />
                <TrendCard trendType='movementBreakdown' handleSelection={handleSelection} />
                <TrendCard trendType='timeBreakdown' handleSelection={handleSelection} />
            </div>
        </main>
    )
}

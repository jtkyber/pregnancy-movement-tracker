import { TrendType } from "@/types/trends"

export default function TrendCard({ trendType, handleSelection }: {
    trendType: TrendType,
    handleSelection: (trendType: TrendType) => void
}) {
    return (
        <div onClick={() => handleSelection(trendType)} data-name='trend-card' className="w-full aspect-5/1 bg-primary flex justify-between items-center px-4 rounded-md" >
            {
                trendType === 'movementAvg' ?
                    <>
                        <h5>Line Graph</h5>
                        <h3 className="text-bg2 text-xl font-extrabold">Movement Trend</h3>
                    </>
                    : trendType === 'movementBreakdown' ?
                        <>
                            <h5>Pie Chart</h5>
                            <h3 className="text-bg2 text-xl font-extrabold">Movement Breakdown</h3>
                        </>
                        : trendType === 'timeBreakdown' ?
                            <>
                                <h5>Clock Logo</h5>
                                <h3 className="text-bg2 text-xl font-extrabold">Time Breakdown</h3>
                            </>
                            : null
            }
        </div >
    )
}

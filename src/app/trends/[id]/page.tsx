'use client'
import ToggleGroup from "@/components/inputs/toggle_group";
import { MOVEMENT_TYPES, MovementType, MovementTypeKey, MovementTypeLabel } from "@/types/movements";
import { TrendType } from "@/types/trends";
import { removeDzContainer } from "@/utils/dz";
import { useParams } from "next/navigation";

type MovementTypeOptions = MovementType & { combined: 'Combined', split: 'Split' };
const movementTypeOptions: MovementTypeOptions = {
    combined: 'Combined',
    split: 'Split',
    ...MOVEMENT_TYPES,
}
export default function TrendPage() {
    removeDzContainer();

    const { id } = useParams<{ id: TrendType }>();

    const handleMovementTypeSelection = (item: keyof MovementTypeOptions) => {
        console.log(item);
    }

    const handleTimeRangeSelection = (item: string | number) => {
        console.log(item);
    }

    return (
        <main data-name='trend-container' className="overflow-y-auto px-4 py-6 flex flex-col gap-4">
            <div data-name='movement-type-selector'>
                <ToggleGroup<MovementTypeOptions> items={Object.keys(movementTypeOptions) as (keyof MovementTypeOptions)[]} lookup={movementTypeOptions} cb={handleMovementTypeSelection} />
            </div>
            <div data-name='timespan-selector'>
                <ToggleGroup items={['Day', 'Week', 'Month', 'Total']} cb={handleTimeRangeSelection} />
            </div>
            <div data-name='chart-container'></div>
            <div data-name='summary-container'></div>
        </main>
    )
}

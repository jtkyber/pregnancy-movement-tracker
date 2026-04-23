import { MovementIntensity, MovementType } from "@/constants/movement";
import { MOVEMENT_INTENSITY_LABELS, MOVEMENT_TYPE_LABELS } from "@/types/movements.types";
import { useEffect, useState } from "react";

const MvmtAdder = () => {
    const [stage, setStage] = useState<'closed' | 'type' | 'intensity' | 'completed'>('closed');
    const [movementType, setMovementType] = useState<MovementType | null>(null)
    const [movementIntensity, setMovementIntensity] = useState<MovementIntensity | null>(null)

    const handleMovementAdd = async () => {
        console.log(movementType, movementIntensity);
    }

    useEffect(() => {
        if (stage === "closed" || stage === 'type') setMovementType(null)
        else if (stage === 'completed') {
            handleMovementAdd()
            setTimeout(() => {
                setStage('closed')
                setMovementIntensity(null);
            }, 2000);
        }
    }, [stage])

    const handleMainClick = () => {
        switch (stage) {
            case 'closed': setStage('type'); break;
            case 'type': setStage('closed'); break;
            case 'intensity': setStage('type'); break;
        }
    }

    const handleTypeSelect = (type: MovementType) => {
        setMovementType(type);
        setStage('intensity');
    }

    const handleIntensitySelect = (intensity: MovementIntensity) => {
        setMovementIntensity(intensity);
        setStage('completed');
    }

    return (
        <div data-name="mvmt-adder-container" data-mvmt-adder-stage={stage} className="absolute bottom-0 right-0 w-17 rounded-full aspect-1/1 m-16">
            <button style={{ border: `2px solid var(--${movementType})`, backgroundColor: `var(--${movementType})` }} onClick={handleMainClick} data-name='selected-type' className="selected-type absolute w-full h-full rounded-[inherit] flex justify-center items-center outline-none bg-bg2">
                <h5 className="pointer-events-none text-bg1 text-md font-semibold capitalize text-bg1">{movementType}</h5>
            </button>

            <button onClick={handleMainClick} data-name='add-movement' className="add-btn absolute w-full h-full rounded-[inherit] bg-primary flex justify-center items-center outline-none">
                <h2 className="text-bg1 text-3xl text-bold">{stage === 'closed' ? '+' : stage === 'completed' ? '✓' : '×'}</h2>
            </button>

            {
                (Object.keys(MOVEMENT_TYPE_LABELS) as MovementType[]).map((key, _) => {
                    const label = MOVEMENT_TYPE_LABELS[key];
                    const isSelected = key === movementType;

                    return (
                        <button
                            key={key}
                            id={key}
                            onClick={() => handleTypeSelect(key)}
                            style={{
                                border: `2px solid var(--${key})`,
                                backgroundColor: isSelected ? `var(--${key})` : 'var(--bg2)'
                            }}
                            data-name={`${key}-btn`}
                            className="mvmt-adder-type-btn absolute w-17 aspect-1/1 rounded-[inherit] bg-accent1 flex justify-center items-center">
                            <h5 style={{ color: isSelected ? 'var(--bg2)' : `var(--${key})` }} className="pointer-events-none text-bg1 text-md font-semibold">{label}</h5>
                        </button>
                    )
                })
            }

            {
                (Object.keys(MOVEMENT_INTENSITY_LABELS) as MovementIntensity[]).map((key, _) => {
                    const label = MOVEMENT_INTENSITY_LABELS[key];
                    const isSelected = key === movementIntensity;

                    return (
                        <button
                            key={key}
                            id={key}
                            onClick={() => handleIntensitySelect(key)}
                            style={{
                                border: `2px solid var(--${key})`,
                                backgroundColor: isSelected ? `var(--${key})` : 'var(--bg2)'
                            }}
                            data-name={`${key}-btn`}
                            className="mvmt-adder-intensity-btn absolute w-20 aspect-1/1 rounded-[inherit] bg-accent1 flex justify-center items-center bg-bg2">
                            <h5 style={{ color: isSelected ? 'var(--bg2)' : `var(--${key})` }} className="pointer-events-none text-bg1 text-md font-semibold">{label}</h5>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default MvmtAdder;

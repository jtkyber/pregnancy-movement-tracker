import { degToRad, radToDeg } from "@/utils/math";
import { useState } from "react";

const MvmtAdder = () => {
    const [stage, setStage] = useState<'closed' | 'type' | 'intensity'>('closed');
    const [animationDirection, setAnimationDirection] = useState<'forwards' | 'reverse'>('forwards');

    const handleMvmtAddClick = () => {
        if (stage === 'closed') {
            setStage('type')
            setAnimationDirection('forwards')
        }
        else {
            setAnimationDirection('reverse')
            setTimeout(() => setStage('closed'), 250)
        }
    }

    return (
        <div data-name="mvmt-adder-container" className="absolute bottom-0 right-0 w-16 rounded-full aspect-1/1 m-16">
            <button onClick={handleMvmtAddClick} data-name='add-movement' className="absolute w-full h-full rounded-[inherit] bg-primary flex justify-center items-center z-1">
                <h2 className="text-bg1 text-3xl text-bold">{stage === 'closed' ? '+' : 'X'}</h2>
            </button>

            {
                stage === 'type' ?
                    Array.from({ length: 4 }, (_, i) => {
                        let name: string;

                        switch (i) {
                            case 0: name = 'Flutter'; break;
                            case 1: name = 'Hiccup'; break;
                            case 2: name = 'Roll'; break;
                            default: name = 'Kick'; break;
                        }

                        return (
                            <button key={`${i}-${animationDirection}`} style={{
                                animation: `radial-translate${i + 1} 0.25s var(--radial-cubic-bezier) ${animationDirection}`,
                                animationFillMode: 'forwards'
                            }} data-name={`${name.toLowerCase()}-btn`} className="absolute w-full h-full rounded-[inherit] bg-primary flex justify-center items-center">
                                <h5 className="text-bg1 text-lg text-bold">{name}</h5>
                            </button>
                        )
                    })

                    : stage === 'intensity' ?
                        <>
                        </>
                        : null
            }

        </div>
    )
}

export default MvmtAdder;

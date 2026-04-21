import { degToRad, radToDeg } from "@/utils/math";
import { useState } from "react";

const MvmtAdder = () => {
    const animationDurationS = 0.25;

    const [stage, setStage] = useState<'closed' | 'type' | 'intensity'>('closed');
    const [animationDirection, setAnimationDirection] = useState<'forwards' | 'reverse'>('forwards');

    const handleMvmtAddClick = () => {
        if (stage === 'closed') {
            setAnimationDirection('forwards')
            setStage('type')
        }
        else {
            setAnimationDirection('reverse')
            setTimeout(() => setStage('closed'), animationDurationS * 1000)
        }
    }

    return (
        <div data-name="mvmt-adder-container" className="absolute bottom-0 right-0 w-16 rounded-full aspect-1/1 m-16">
            <button onClick={handleMvmtAddClick} data-name='add-movement' className="absolute w-full h-full rounded-[inherit] bg-primary flex justify-center items-center z-1 outline-none shadow-[0_0_0.8rem_rgba(0,0,0,0.3)]">
                <h2 className="text-bg1 text-3xl text-bold">{stage === 'closed' ? '+' : '×'}</h2>
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
                                animation: `radial-translate${i + 1} ${animationDurationS}s var(--radial-cubic-bezier) ${animationDirection}`,
                                animationFillMode: 'forwards',
                                backgroundColor: `var(--bg2)`,
                                border: `2px solid var(--${name.toLowerCase()})`
                            }} data-name={`${name.toLowerCase()}-btn`} className="absolute w-17 aspect-1/1 rounded-[inherit] bg-accent1 flex justify-center items-center shadow-[0_0_0.8rem_rgba(0,0,0,0.3)]">
                                <h5 style={{ color: `var(--${name.toLowerCase()})` }} className="text-bg1 text-md font-semibold">{name}</h5>
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

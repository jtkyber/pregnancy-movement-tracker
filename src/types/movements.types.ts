import { MovementIntensity, MovementType } from "@/constants/movement"

export type Pregnancy = {
    name: string,
    movements: Movement[]
}

export type Movement = {
    id: number,
    type: MovementType,
    intensity: MovementIntensity,
    timestamp: Date,
    note: string | null
}

export const MOVEMENT_TYPE_LABELS: Record<MovementType, string> = {
    flutter: 'Flutter',
    hiccup: 'Hiccup',
    roll: 'Roll',
    kick: 'Kick'
}

export const MOVEMENT_INTENSITY_LABELS: Record<MovementIntensity, string> = {
    light: 'Gentle',
    moderate: 'Moderate',
    strong: 'Strong'
}


import { MovementIntensity, MovementType } from "@/shared/constants/movement"

export type Pregnancy = {
    name: string,
    movements: Movement[]
}

export type Movement = {
    id: number,
    type: MovementType,
    intensity: MovementIntensity,
    timestamp: number,
    note?: string
}

export const MOVEMENT_TYPE_LABELS: Record<MovementType, string> = {
    flutter: 'flutter',
    hiccup: 'hiccup',
    roll: 'roll',
    kick: 'kick'
}

export const MOVEMENT_INTENSITY_LABELS: Record<MovementIntensity, string> = {
    low: 'Gentle',
    medium: 'Moderate',
    high: 'Strong'
}


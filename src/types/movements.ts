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

export enum MovementType {
    Kick = 'kick',
    Roll = 'roll',
    Flutter = 'flutter',
    Hiccup = 'hiccup'
}

export enum MovementIntensity {
    Gentle = 'gentle',
    Moderate = 'moderate',
    Strong = 'strong'
}


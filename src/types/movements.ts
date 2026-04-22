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
    Flutter = 'flutter',
    Hiccup = 'hiccup',
    Roll = 'roll',
    Kick = 'kick',
}

export enum MovementIntensity {
    Gentle = 'gentle',
    Moderate = 'moderate',
    Strong = 'strong'
}


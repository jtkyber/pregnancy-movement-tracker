export type Pregnancy = {
    name: string,
    movements: Movement[]
}

export type Movement = {
    id: number,
    type: MovementTypeKey,
    intensity: MovementIntensityKey,
    timestamp: Date,
    note: string | null
}

export const MOVEMENT_TYPES = {
    flutter: 'Flutter',
    hiccup: 'Hiccup',
    roll: 'Roll',
    kick: 'Kick'
} as const;

export type MovementType = typeof MOVEMENT_TYPES;
export type MovementTypeKey = keyof typeof MOVEMENT_TYPES;
export type MovementTypeLabel = typeof MOVEMENT_TYPES[keyof typeof MOVEMENT_TYPES];

export const MOVEMENT_INTENSITIES = {
    light: 'Gentle',
    moderate: 'Moderate',
    strong: 'Strong'
} as const;

export type MovementIntensity = typeof MOVEMENT_INTENSITIES;
export type MovementIntensityKey = keyof typeof MOVEMENT_INTENSITIES;
export type MovementIntensityLabel = typeof MOVEMENT_INTENSITIES[keyof typeof MOVEMENT_INTENSITIES];

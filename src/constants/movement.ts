export const MOVEMENT_INTENSITIES = [
    "light",
    "moderate",
    "strong",
] as const;

export type MovementIntensity = typeof MOVEMENT_INTENSITIES[number];


export const MOVEMENT_TYPES = [
    "flutter",
    "hiccup",
    "roll",
    "kick",
] as const;

export type MovementType = typeof MOVEMENT_TYPES[number];


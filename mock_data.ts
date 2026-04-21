import { MovementIntensity, MovementType, Pregnancy } from "@/types/movements";

export const mock_pregnancy: Pregnancy = {
    name: "Test",
    movements: [
        {
            id: 1,
            type: MovementType.Kick,
            intensity: MovementIntensity.Moderate,
            timestamp: 1776288359,
            note: "test note"
        },
        {
            id: 2,
            type: MovementType.Flutter,
            intensity: MovementIntensity.Gentle,
            timestamp: 1776289359,
            note: "test note"
        },
        {
            id: 3,
            type: MovementType.Hiccup,
            intensity: MovementIntensity.Moderate,
            timestamp: 1776298359,
            note: "test note"
        },
        {
            id: 4,
            type: MovementType.Kick,
            intensity: MovementIntensity.Strong,
            timestamp: 1776388359,
            note: "test note"
        },
        {
            id: 5,
            type: MovementType.Roll,
            intensity: MovementIntensity.Gentle,
            timestamp: 1776398359,
            note: "test note"
        },
        {
            id: 6,
            type: MovementType.Flutter,
            intensity: MovementIntensity.Moderate,
            timestamp: 1776428359,
            note: "test note"
        },
        {
            id: 7,
            type: MovementType.Kick,
            intensity: MovementIntensity.Moderate,
            timestamp: 1776288359,
            note: "test note"
        },
        {
            id: 8,
            type: MovementType.Flutter,
            intensity: MovementIntensity.Gentle,
            timestamp: 1776289359,
            note: "test note"
        },
        {
            id: 9,
            type: MovementType.Hiccup,
            intensity: MovementIntensity.Moderate,
            timestamp: 1776298359,
            note: "test note"
        },
        {
            id: 10,
            type: MovementType.Kick,
            intensity: MovementIntensity.Strong,
            timestamp: 1776388359,
            note: "test note"
        },
        {
            id: 11,
            type: MovementType.Roll,
            intensity: MovementIntensity.Gentle,
            timestamp: 1776398359,
            note: "test note"
        },
        {
            id: 12,
            type: MovementType.Flutter,
            intensity: MovementIntensity.Moderate,
            timestamp: 1776428359,
            note: "test note"
        }
    ],
}

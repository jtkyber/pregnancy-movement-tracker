import { MovementIntensity, MovementType } from "@/constants/movement"

export type DBMovement = {
    id: number,
    pregnancy_id: number
    movement_type: MovementType,
    movement_intensity: MovementIntensity,
    note: string | null,
    timestamp: Date
}

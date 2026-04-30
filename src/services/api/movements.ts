import { MovementIntensity, MovementType } from "@/constants/movement";
import { ApiMovementsChrono } from "@/types/api_returns";
import { Movement } from "@/types/movements.types";

export async function addMovement(pregnancyID: number, type: MovementType, intensity: MovementIntensity) {
    try {
        const res = await fetch(`/api/data/movements/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pregnancyID: pregnancyID,
                type: type,
                intensity: intensity
            }),
        })

        const data = await res.json();
        return data;

    } catch (err) {
        throw new Error('Unable to add movement');
    }
}

export async function getMovementsChronological(pregnancyID: number, page: number): Promise<{
    items: Movement[],
    next: number | undefined
}> {
    try {
        const res = await fetch(`/api/data/movements/get?pregnancyID=${pregnancyID}&page=${page}&limit=10`);
        const data: ApiMovementsChrono = await res.json();

        return {
            items: data.items,
            next: page < data.totalPages ? page + 1 : undefined
        }
    } catch (err) {
        throw new Error('Unable to get movements');
    }
}

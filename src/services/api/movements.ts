import { MovementIntensity, MovementType } from "@/constants/movement";

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

export async function getMovementsChronological(pregnancyID: number, page: number) {
    try {
        const res = await fetch(`/api/data/movements/get?pregnancyID=${pregnancyID}&page=${page}&limit=10`);

        const data = await res.json();
        return data
    } catch (err) {

    }
}   

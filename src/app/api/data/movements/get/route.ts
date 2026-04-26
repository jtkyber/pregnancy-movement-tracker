import { sql } from "@/lib/db";
import { ApiMovementsChrono } from "@/types/api_returns";
import { DBMovement } from "@/types/db_tables";
import { Movement } from "@/types/movements.types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;

    const pregnancyID = searchParams.get('pregnancyID');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    if (pregnancyID === null || page === null || limit === null) {
        throw new Error('Incorrect query parameter format');
    }

    const limitAsInt: number = parseInt(limit);
    const offset: number = parseInt(page) * limitAsInt;

    type CountResult = { total: string }
    const [data, countResult] = await Promise.all([
        sql`
            SELECT * FROM movements
            WHERE pregnancy_id = ${pregnancyID}
            ORDER BY timestamp DESC
            LIMIT ${limitAsInt} OFFSET ${offset}
        `,
        sql`
            SELECT COUNT(*) AS total FROM movements
            WHERE pregnancy_id = ${pregnancyID}
        `,
    ]) as [DBMovement[], CountResult[]];

    const items: Movement[] = data.map(m => (
        {
            id: m.id,
            type: m.movement_type,
            intensity: m.movement_intensity,
            note: m.note,
            timestamp: m.timestamp
        }
    ))

    const totalCount = Number(countResult[0].total);

    const result: ApiMovementsChrono = {
        items,
        totalPages: Math.ceil(totalCount / limitAsInt)
    }

    return NextResponse.json(result);
}


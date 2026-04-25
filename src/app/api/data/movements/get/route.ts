import { sql } from "@/lib/db";
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

    const data = await sql`
        SELECT * FROM movements
        WHERE pregnancy_id = ${pregnancyID}
        ORDER BY timestamp DESC
        LIMIT ${limitAsInt} OFFSET ${offset}
    ;` as DBMovement[];

    const result: Movement[] = data.map(m => (
        {
            id: m.id,
            type: m.movement_type,
            intensity: m.movement_intensity,
            note: m.note,
            timestamp: m.timestamp
        }
    ))

    return NextResponse.json(result);
}


import { MovementIntensity, MovementType } from "@/constants/movement";
import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { pregnancyID, type, intensity }:
        { pregnancyID: number, type: MovementType, intensity: MovementIntensity }
        = await req.json();

    const [data] = await sql`
        INSERT INTO movements (pregnancy_id, type, intensity)
        VALUES (${pregnancyID} ${type} ${intensity})
        RETURNING *
    ;`;

    return NextResponse.json({
        data
    });
}

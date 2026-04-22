import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { userID, name } = await req.json();

    const [data] = await sql`
        INSERT into pregnancies (user_id, name)
        VALUES (${userID}, ${name})
        RETURNING *
    ;`;

    return NextResponse.json({
        data
    });
}

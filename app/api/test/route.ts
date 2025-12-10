import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        engine: process.env.PRISMA_CLIENT_ENGINE_TYPE || "NOT_LOADED"
    });
}

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, text: "Learn Next.js" },
    { id: 2, text: "Commit to GitHub" }
  ]);
}

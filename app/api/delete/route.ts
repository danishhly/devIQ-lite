import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id }: { id: number } = await req.json();
  return NextResponse.json({ success: true, deletedId: id });
}

import { NextResponse } from "next/server";
import { sampleUsers } from "@/data/sample-users";

export function GET() {
  return NextResponse.json(sampleUsers);
}
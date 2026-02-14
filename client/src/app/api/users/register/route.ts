import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const backendResponse = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/register`,
    body
  );

  return NextResponse.json(backendResponse.data);
}

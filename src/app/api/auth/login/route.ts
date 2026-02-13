import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const backendResponse = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
    body
  );

  const { access_token } = backendResponse.data;

  const res = NextResponse.json({ ok: true });

  res.cookies.set("access_token", access_token, {
    httpOnly: true,
    path: "/",
  });

  return res;
}

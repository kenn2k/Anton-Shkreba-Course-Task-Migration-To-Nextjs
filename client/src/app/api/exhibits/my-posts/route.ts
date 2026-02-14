import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;

  const backendResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/exhibits/my-posts`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return NextResponse.json(backendResponse.data);
}

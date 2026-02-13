import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const backendResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/my-profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return NextResponse.json(backendResponse.data);
}

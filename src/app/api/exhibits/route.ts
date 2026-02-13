import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  const formData = await req.formData();

  const backendResponse = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/exhibits`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return NextResponse.json(backendResponse.data);
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  const backendResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/exhibits`,
    {
      params: { page },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return NextResponse.json(backendResponse.data);
}

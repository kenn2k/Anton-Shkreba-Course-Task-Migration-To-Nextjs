import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/exhibits/static/${filename}`,
      { responseType: "arraybuffer" }
    );

    return new NextResponse(response.data, {
      headers: {
        "Content-Type": response.headers["content-type"],
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}

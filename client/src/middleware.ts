import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");
  const { pathname } = request.nextUrl;

  const isLoginPage = pathname.startsWith("/user/login");
  const isProtectedPage =
    pathname.startsWith("/post") || pathname.startsWith("/home");

  if (isProtectedPage && !token) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }

  if (isLoginPage && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*", "/post/:path*", "/user/login"],
};

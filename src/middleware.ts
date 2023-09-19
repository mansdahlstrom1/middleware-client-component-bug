import "server-only";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { functionThatChecksAccessCookies } from "./services/cookieService";

export function middleware(request: NextRequest) {
  const someCookie = functionThatChecksAccessCookies();
  console.log(someCookie);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
